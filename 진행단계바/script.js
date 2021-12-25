// 객체 상수 만들기
const progress = document.getElementById('progress'); // 막대기바
const prev = document.getElementById('prev'); // 버튼 이전
const next = document.getElementById('next'); // 버튼 다음

// circle(1,2,3,4) 들을 객체를 저장
const circles = document.querySelectorAll('.circle'); // 모든 circle

// 단계 표시 변수
let currentActive = 1;

// 다음 버튼을 클릭했을 때
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length; // 다음 버튼 계속 눌러도 circle객체의 수로 고정
  }

  막대바업데이트();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1; // 이전 버튼 계속 눌러도 1로 고정
  }

  막대바업데이트();
});

function 막대바업데이트() {
  circles.forEach((circle, idx) => {
    // console.log(circle, idx);
    if (idx < currentActive) {
      circle.classList.add('active'); // 클래스 추가
    } else {
      circle.classList.remove('active'); // 클래스 제거
    }
  });
  // 막대바 업데이트
  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // 이전버튼을 누를 수 있도록
  if (currentActive === 1) {
    prev.disabled = true; // 현재 상태가 1이면 이전버튼 disabled
  } else if (currentActive === circles.length) {
    next.disabled = true; // 현재 상태가 circle.length와 같으면 다음버튼 disabled
  } else {
    // 그 이외는 이전,다음버튼 사용가능
    prev.disabled = false;
    next.disabled = false;
  }
}
