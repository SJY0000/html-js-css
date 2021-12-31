// input, botton, search
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// button을 클릭하면 search에 active 클래스를 toggle()
// toggle() : 클래스 추가/제거
btn.addEventListener('click', () => {
  search.classList.toggle('active'); // 없으면 추가, 있으면 제거
  input.focus(); //자동으로 input창에 입력가능 커서
});
