// #1. 게시글을 저장할 로컬 변수
let posts = [];

// #2. 게시글을 보여주는 함수
function displayPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // 이전에 보여준 게시글들을 클리어.
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <h3 id="title-${post.id}">${post.title}</h3>
            <p id="body-${post.id}">${post.body}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
            <button onclick="startEditPost(${post.id})">Edit</button>
        `;
    postsContainer.appendChild(postElement);
  });

  console.log(posts);
}

// #3. API에서 게시글 가져오기
function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      posts = data.slice(0, 10); // 처음 10개의 게시글만 가져오기.
      displayPosts();
    })
    .catch((err) => console.error(err));
}

// #4. 게시글 수정 함수
function startEditPost(id) {
  const post = posts.find((post) => post.id === id); // id = 4
  if (!post) return; // 일치하지 않는다면 그냥 return 해라 (그냥나와라)

  const titleElement = document.getElementById(`title-${id}`);
  const bodyElement = document.getElementById(`body-${id}`);

  titleElement.innerHTML = `<input type="text" id="edit-title-${id}" value="${post.title}">`;
  bodyElement.innerHTML = `<textarea id="edit-body-${id}">${post.body}</textarea>`;

  const editButton = document.querySelector(
    `button[onclick="startEditPost(${id})"]`
  );
  editButton.textContent = "Save";
  editButton.setAttribute("onclick", `saveEditPost(${id})`);
}

// 수정한 게시글을 저장하는 함수
function saveEditPost(id) {
  const editedTitle = document.getElementById(`edit-title-${id}`).value; // 수정 된 Title 값
  const editedBody = document.getElementById(`edit-body-${id}`).value; // 수정 된 body 값

  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex > -1) {
    posts[postIndex].title = editedTitle; // 여기에서 수정 된 내용이 재할당 하면서 덮어짐.
    posts[postIndex].body = editedBody;
    displayPosts();
  }
}

// #5. 게시글 삭제 함수
function deletePost(id) {
  posts = posts.filter((post) => post.id !== id);
  // 매개변수로 전달받은 id와 같지 않은 게시글만 배열에 남김.
  displayPosts();
}

// "Load Posts" 버튼에 이벤트 리스너 추가.
document.getElementById("fetchPosts").addEventListener("click", fetchPosts);
