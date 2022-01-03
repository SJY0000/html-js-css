// %표시 글자, 백그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// 로딩숫자
let load = 0;

// setInterval(함수, 시간); // 시간만큼 반복해서 함수 실행
let interval = setInterval(blurring, 30);

function blurring() {
  load++;
  // console.log(load);
  if (load > 99) {
    clearInterval(interval); // 위의 반복 인터벌을 중지한다.
  }
  // loadText.textContent = 문자열; // 벡틱 문자열 `${변수}` 숫자 1옆에 있는 따옴표
  // loadText.textContent = `${load}%`; // 사용가능
  loadText.textContent = load + '%'; // 사용가능
  // 1. blurfiter를 사용 처음에 흐리게(30px) => 선명하게(0px)
  // 2. 글자를 갈수록 흐리게 opacity 1 => 0 (안보이게)

  // scale(number, inmin, inmax, outmin, outmax);
  // number에 해당하는 숫자로 inmin ~ inmax 범위의 비율을 측정하고
  //// 그 비율 만큼 outmin에서 outmax 사이에서 출력

  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  bg.style.filter = blur(scale(load, 0, 100, 30, 0)) + 'px';
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
