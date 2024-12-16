// teacher
function changeImg(name) {
  $("img").attr("src", `./image/${name}.png`);
}

// me
function changeImg(a) {
  const pic = $("img");
  switch (a) {
    case "apple":
      pic.attr("src", "./image/apple1.png");
      break;

    case "banana":
      pic.attr("src", "./image/banana.png");
      break;

    case "grape":
      pic.attr("src", "./image/grape.png");
      break;

    case "peach":
      pic.attr("src", "./image/peach.png");
      break;
  }
}
