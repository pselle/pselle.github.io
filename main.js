console.log("HI")

function shuffle(i) {
  console.log(i);
  document.querySelectorAll('section').map((i) => {
    i.style.order = 0;
  });
  document.querySelector('section:last-child').style.order = -1;
  // document.querySelector('section').className = "bottom";
  if (i == 3) {
    i = 0;
  }
}
for(i=0; i<5; i++) {
  window.setTimeout(shuffle, 2000, i)
}
