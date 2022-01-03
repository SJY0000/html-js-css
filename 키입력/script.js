// 입력할 태그 객체
const insert = document.getElementById('insert');

// 현재화면에서 키입력시 이벤트 발생
// 키를 눌렀을 때('keydown')
window.addEventListener('keydown', (e) => {
  // console.log(e.code);
  // console.log(e.keyCode);
  // console.log(e.key);
  insert.innerHTML =
    // textcontent외 달리 태그까지 삽입
    `<div class="key">  
  ${e.key}
  <small>event.key</small>
</div>

<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});

window.addEventListener('click', (e) => {
  console.log(`클릭한 좌표 : ${e.clientX}px, ${e.clientY}px`);
});
