document.addEventListener("DOMContentLoaded", () => {
  const $textArea = document.querySelector('#input');
  const $preview = document.querySelector('#preview');

  $textArea.addEventListener('input', (e) => {
    $preview.innerHTML = e.target.value;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const colors = ['navy', "aqua", "teal", "green", "yellow", "maroon",];
  const $btn = document.querySelector("button");
  const $select = document.querySelector("select");
  const body = document.querySelector("body");

  $btn.addEventListener("click", (e) => {
    const colorIndex = parseInt(colors.length * Math.random());
    body.style.backgroundColor = colors[colorIndex];
  })

  $select.addEventListener("input", (e) => {
    body.classList.remove("navy", "teal", "purple")
    body.classList.add(e.target.value);
  })

})
