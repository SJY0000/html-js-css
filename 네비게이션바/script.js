// toggle 객체, nav 객체 저장
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// toggle 객체를 클릭하면 nav 객체에 active 클래스를 toggle
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
