// open/close 버튼 객체, container 객체
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// open버튼 클릭시 show-nav클래스 추가
open.addEventListener('click', () => {
  container.classList.add('show-nav');
});
// close버튼 클릭시 show-nav클래스 제거
close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
