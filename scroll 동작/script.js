// 모든 box클래스 객체를 담기
const boxes = document.querySelectorAll('.box');

// scroll 이벤트
window.addEventListener('scroll', checkBoxes);

checkBoxes(); // 처음 한번 실행

function checkBoxes() {
  // console.log(window.innerHeight);
  const triggerBottom = (window.innerHeight / 5) * 3; // window창의 5분의 4 지점

  // 모든 box에게 triggerBottom 보다 작으면 보이게 설정
  boxes.forEach((box) => {
    // 모든 box의 상단의 높이
    const boxTop = box.getBoundingClientRect().top; // box의 상단 높이
    // box height < triggerBottom => 박스를 다시 원위치시켜 보이게(show클래스 추가)
    if (boxTop < triggerBottom) {
      // box 보이게 (show 클래스 추가)
      box.classList.add('show');
    } else {
      // box 안보이게 (show 클래스 삭제)
      box.classList.remove('show');
    }
  });
}
