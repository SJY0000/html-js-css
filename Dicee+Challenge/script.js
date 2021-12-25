// alert('테스트');
// 상수 const로 태그 객체를 저장한다.
// class는 . 아이디는 #
const img1 = document.querySelector('.img1'); // .img 이미지 파일의 클래스이름
const img2 = document.querySelector('.img2');

// 랜덤 숫자를 만들어서 그 숫자 값의 주사위를 출력한다
// 변수 let (javaScript는 타입이 필요 없음) 변수는 전부 let으로 사용하면 됨
let n1 = Math.floor(Math.random() * 6) + 1;
let n2 = Math.floor(Math.random() * 6) + 1;

console.log(n1);
console.log(n2);

img1.setAttribute('src', 'images/dice' + n1 + '.png');
img2.setAttribute('src', 'images/dice' + n2 + '.png');

const h1 = document.querySelector('h1');
if (n1 > n2) {
  h1.textContent = '🚩 player 1 Wins! ';
} else if (n1 < n2) {
  h1.textContent = 'player 2 Wins! 🚩';
} else {
  h1.textContent = 'Draw!!';
}
