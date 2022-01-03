const sounds = ['박수', '부우', '승리', '타다', '틀림', '한숨'];
// 각각의 사운드 이름으로 버튼 태그를 생성
sounds.forEach((sound) => {
  const btn = document.createElement('button'); // button 태그 생성
  btn.classList.add('btn');

  btn.textContent = sound; //사운드 이름을 태그 컨텐트(내용)으로 저장

  document.getElementById('buttons').appendChild(btn); // buttons의 자식태그로 btn태그를 붙임

  // 각각의 버튼에 클릭하면 이름과 같은 mp3를 실행
  btn.addEventListener('click', () => {
    stopMp3();
    document.getElementById(sound).play();
  });
});

function stopMp3() {
  // 모든 오디오들을 선택해서 멈추게 한다
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    // 오디오 멈추는 법
    song.pause();
    song.currentTime = 0; // 처음부분으로 돌아감
  });
}
