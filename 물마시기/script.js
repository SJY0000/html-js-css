const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// 작은 컵을 마우스 클릭시 => 컵채우기(full 클래스 추가)
// forEach((매개변수, 인덱스번호) => 함수);
smallCups.forEach((Cup, idx) => {
  // 작은 컵에 클릭 이벤트를 설정 할 때 함수에 idx(인덱스번호) 매개변수
  Cup.addEventListener('click', () => 작은컵들채우기(idx));
});

큰컵채우기();

function 작은컵들채우기(idx) {
  // 마지막 컵을 클릭했는데 이미 다 차있을 경우와 중간 컵을 클릭했는데 다 차있을 경우
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
  else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  // 일반적인 경우 클릭한 컵 이하로는 다 full 아니면 다 full 제거
  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  큰컵채우기();
}

function 큰컵채우기() {
  // full 클래스를 가지고 있는 물이 채워진 작은 컵의 갯수
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalcups = smallCups.length; // 총 작은 컵의 갯수

  if (fullCups === 0) {
    // 채운 컵이 없을 경우 percentage는 안보이고 높이가 0
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    // 채운컵이 있을 경우 percentage는 보이고 높이와 문자 출력
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalcups) * 330}px`;
    percentage.innerText = `${(fullCups / totalcups) * 100}%`;
  }

  if (fullCups === totalcups) {
    // 모든 컵이 다 채워졌을 경우 remained은 안보이고 높이가 0
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
