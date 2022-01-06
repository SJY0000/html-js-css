// 버튼을 클릭했을 때 active클래스를 객체(.faq)에 추가
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  // 모든 toggle에 클릭시 상위객체(.parentNode)를 찾아서 active클래스를 토글
  toggle.addEventListener('click', () => {
    // 익명함수에는 매개변수 e(매개변수명은 상관없음)가 생략되어있음
    // console.log(toggle.parentNode);// .parentNode 상위 객체 출력
    toggle.parentNode.classList.toggle('active');
    // e.target.parentNode.parentNode.classList.toggle('active'); // 매개변수 e 있을 때
  });
});
