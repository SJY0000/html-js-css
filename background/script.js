// alert('테스트');
// 사용할 객체를 상수로
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
// id 선택시 getElementById를 사용('id') 그 외 querySelector
const body = document.getElementById('gradient');

// 이벤트 리스너 달아서 이벤트 발생시키기
/*button.addEventListener('이벤트 타입', 함수명);*/

function set() {
  body.style.background =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
}

color1.addEventListener('input', set);
color2.addEventListener('input', set);
