document.addEventListener("DOMContentLoaded", () => {
  const $textArea = document.querySelector('#input');
  const $preview = document.querySelector('#preview');

  $textArea.addEventListener('input', (e) => {
    $preview.innerHTML = e.target.value;
  });
});
