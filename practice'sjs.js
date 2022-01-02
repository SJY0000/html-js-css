const box = document.querySelectorAll('.box');

box.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('show');
  });
});

window.addEventListener('scroll', abc);

function abc() {
  box.forEach((box) => {
    const boxes = box.getBoundingClientRect().top;
    if (boxes < window.innerHeight / 3) {
      box.classList.add('pop');
    } else {
      box.classList.remove('pop');
    }
  });
}
