// -------------------
// Fetch()
// -------------------
/**
 * fetch()
 * - JS의 내장 API로, 최신 브라우저에서 지원되는 비동기 HTTP 요청을 처리하는 방법.
 * - Promise 기반으로 동작하여, 비동기 방식으로 데이터 요청하고 결과를 반환함.
 * - 직관적이고 사용하기 쉬움 : 매우 간단하고 직관적인 코드로 비동기 요청을 보낼 수 있음.
 *
 * * 구문
 * fetch( 'URL', { ... } )
 *
 * - URL : 요청할 URL
 * - { ... } : 옵션 객체
 *              - 요청의 설정을 정의
 *              - method / headers / body ... etc
 * - method : HTTP 요청 메서드 지정.
 * - headers : 요청의 헤더 정보 설정.
 * - body : 요청의 본문 데이터 설정.
 */

// -------------------
// Open API 사용해보기.
// -------------------
/**
 * ** response 객체 Info
 * status: HTTP 응답 상태 코드(ex: 200, 404, 500 등)
 * statusText: HTTP 상태 메시지 문자열 (ex: "OK", "Not Found")
 * ok : 요청이 성공적으로 수행되었는지를 나타내는 boolean 값
 *      상태 코드가 200~299 사이일 경우 true
 * headers: 응답 헤더를 나타내는 Headers 객체
 * url: 응답이 반환된 URL 문자열
 */

// #1. Get 요청
// - fetch()는 URL을 인자로 받아 데이터를 가져온다.
// - fetch()에서 GET 요청은 기본 동작이기 때문에 명시적으로 설정하지 않아도 됨.
// Action) JSONPlaceHolder 사이트에서 게시글 데이터 가져오기.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // *response : 서버에서 반환된 응답 객체
    if (!response.ok) {
      throw new Error("Network response was not ok"); // 상태 코드 확인.
    }
    console.log("Get response >>> ", response);
    return response.json(); // JSON 데이터 변환 : 서버에서 응답한 데이터는 JSON 형식으로 제공.
  })
  .then((data) => {
    console.log("Get Posts: ", data); // 데이터를 콘솔에 출력
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation", error);
  });

// #2. Post 요청
// 새로운 게시글 데이터 전송
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // 서버에 전달할 데이터 형식 지정 : JSON 데이터를 보낼 것이라는 뜻
  },
  body: JSON.stringify({
    // JS 객체를 JSON 문자열로 변환. - 서버가 올바르게 해석 할 수 있도록.
    title: "My New POST", // 제목
    body: "This is the cotent of my post", // 본문 내용
    userId: 1, // 작성자 ID
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // JSON 데이터 변환
  })
  .then((data) => {
    console.log("Created Post: ", data); // 생성된 게시글 출력
  })
  .catch((error) => {
    console.error(error);
  });

// #3. Put 요청
// 게시글 ID 1의 데이터를 수정
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1, // 수정할 게시글 ID
    title: "Updated Post Title", // 수정된 제목
    body: "This is the updated content", // 수정된 본문
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Updated Post : ", data); // 수정된 게시글 출력
  })
  .catch((err) => console.error(err));

// #4. Delete 요청
// 게시글 ID 1 삭제
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => {
    if (res.ok) {
      console.log("삭제 성공"); // 삭제 성공 메시지
    } else {
      console.error("삭제 실패 ㅠㅠ");
    }
  })
  .catch((error) => console.error("Error: ", error));

// #5. Fetch와 Async/Await 사용하기
// 게시글 데이터 가져오기 (Async/Await 방식)
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok"); // 상태 코드 확인.
    }
    const data = await response.json();
    console.log("Async Posts: ", data);
  } catch (err) {
    console.error(err);
  }
}
getPosts();

// #6. 쿼리스트링 (Query String)
// - URL에 추가되는 데이터.
// - 서버에 특정 요청을 전달하거나 클라이언트에서 데이터를 주고 받을 때 사용.
// - URL의 끝에 ? 로 시작하며, *파라미터 데이터를 전달하는 구조를 가짐.
// - * 파라미터 : 키와 값의 쌍

// *구문
// URL?key1=value1&key2=value2&key3=value3
// - URL : 기본 주소
// - ? : 쿼리스트링의 시작을 나타냄.
// - key=value : 전달하고자 하는 데이터
// - & : 여러 개의 키-값 쌍 구분.

// *장점
// - 간단하고 직관적
// - 서버 요청과 데이터 결합 : 특정 요청에 필요한 데이터를 함께 전달할 수 있음.

// *단점
// - 보안 취약점 : 쿼리스트링에 포함된 데이터는 URL에 노출되므로, 민감한 정보를 포함하면 안됨. (비번, 인증토큰)
// - 데이터 길이 제한 : URL 길이에 제한이 있는 브라우저나 서버에서는 긴 데이터를 전송할 수 없음.
// - 가독성 저하 : 너무 길어지면 URL이 복잡해지고 이해하기 어려워짐.
fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok"); // 상태 코드 확인.
    }
    return response.json();
  })
  .then((data) => {
    console.log("QueryString posts: ", data);
  })
  .catch((err) => {
    console.error(err);
  });
