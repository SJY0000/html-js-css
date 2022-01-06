// 입력받는 창
const textarea = document.getElementById('textarea');
// tag들을 넣을 tags객체
const tagsEl = document.getElementById('tags');

// 처음 시작시 커서를 textarea 입력창에 들어가게함
textarea.focus();
// keydown(key를 눌렀을 때), keyup(key를 누르고 똇을 때), keypress(특수문자, Enter입력시 발생)
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  // Enter 입력 시
  if (e.key == 'Enter') {
    // setTimeout(함수, 시간); // 시간 뒤에 1번 함수 실행
    setTimeout(() => {
      e.target.value = ''; // Enter 입력 시 textarea 클리어(공백)
    }, 1); // 0.001초 후 실행
    randomSelect(); // 랜덤 선택
  }
});

function randomSelect() {
  const times = 150; // 시간 변경

  // 계속 반복함
  const interval = setInterval(() => {
    // setInterval(함수, 시간); // 시간 동안 반복
    // 0.1초마다 실행
    const randomTag = 랜덤태그선택();
    하이라이트(randomTag);
    setTimeout(() => {
      하이라이트제거(randomTag);
    }, times);
  }, times);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = 랜덤태그선택();
      하이라이트(randomTag);
    }, times);
  }, times * 10);
}

function 랜덤태그선택() {
  const tags = document.querySelectorAll('.tag');
  // Math.random() 함수는 0 이상 1 미만의 구간에서
  // 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환
  // floor(올림) => 정수로 출력
  return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag) {
  tag.classList.add('highlight');
}

function 하이라이트제거(tag) {
  tag.classList.remove('highlight');
}

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '') // 공백만 있는 것 제거
    .map((tag) => tag.trim()); // 공백이 있을 때 공백제거

  // console.log(tags);
  tagsEl.innerHTML = ''; // 안의 태그들을 전부 삭제
  tags.forEach((tag) => {
    const tagEl = document.createElement('span'); // js로 span 태그 만들기
    tagEl.classList.add('tag'); // tag 클래스 추가
    tagEl.textContent = tag; // 글자내용을 tag(tags의 배열)로 입력
    tagsEl.appendChild(tagEl); // tags에 자식태그로 입력
  });
}
