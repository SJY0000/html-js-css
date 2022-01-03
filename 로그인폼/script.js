// label
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('') // split('') 전체 다 분리 // [이, 메, 일]
    .map((c, i) => `<span style="transition-delay: ${i * 40}ms">${c}</span>`)
    .join(''); // 각각의 span태그를 다 합침
});
