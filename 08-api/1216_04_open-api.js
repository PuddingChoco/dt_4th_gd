// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=3d5f1495
// 내꺼: http://www.omdbapi.com/?i=tt3896198&apikey=ac795d8a
// apikey=3d5f1495
// API 키는 필수.
// OMDB API를 사용해 영화 데이터를 비동기적으로 불러오고, 웹 페이지에 표시하는 예시.

async function getMovieData() {
  let word = "marvel";
  const h3 = document.querySelector("h3");
  h3.innerText = `영화 키워드 ${word}`;

  // fetch로 데이터 불러오기

  const res = await fetch(`http://www.omdbapi.com/?apikey=ac795d8a&s=${word}`);
  const movieData = await res.json();
  console.log("movieData >>> ", movieData);

  // 불러온 데이터를 이용해 html 요소를 만들기
  for (let movie of movieData.Search) {
    const ul = document.querySelector("ul");
    const div = document.createElement("div"); // <div></div>
    const img = document.createElement("img"); // <image></image>
    const p = document.createElement("p"); // <p></p>

    img.src = movie.Poster; // <image src="movie.Poster"></image>
    img.alt = movie.imdbID;
    p.innerText = movie.Title; // <p>movie.Title</p>

    div.append(img, p); // <div> <image src="movie.Poster"></image> <p>movie.Title</p> </div>
    ul.append(div);
  }
}

// getMovieData();
