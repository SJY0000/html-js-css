// counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.textContent = '0';
  업데이트카운터(counter);
});

function 업데이트카운터(counter) {
  // counter에 지정한 속성값을 출력
  // counter.getAttribute('data-target');
  // 문자열타입으로 출력하지만 맨 앞에 +를 붙여주면 숫자타입으로 출력
  const target = +counter.getAttribute('data-target');

  // console.log(target); // 12000, 7000, 5000

  const c = +counter.textContent; // 숫자 0

  const increment = target / 200; // 60, 35, 25 씩

  if (c < target) {
    counter.textContent = `${Math.ceil(c + increment)}`;
    setTimeout(() => {
      업데이트카운터(counter);
    }, 1); // target 보다 작으면 0.001초 뒤에 업데이트카운터함수 실행
  } else {
    counter.textContent = target; // 타겟값 입력
  }
}
