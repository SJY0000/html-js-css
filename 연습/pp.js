const btn1 = document.getElementById('toggle');
const btn2 = document.getElementById('count');
const box2 = document.querySelector('.box2');
const tt = document.querySelectorAll('.t');
let count = 0;
btn1.addEventListener('click', () => {
  tt.forEach((e) => {
    e.classList.toggle('Toggle');
  });
});

btn2.addEventListener('click', 체인지);

function 체인지() {
  count++;
  box2.innerHTML = `        <ul>
  <li>${count}</li>
</ul>`;
}
