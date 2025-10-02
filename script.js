const btn1 = document.getElementById('Increment');
const btn2 = document.getElementById('Decrement');
const btn3 = document.getElementById('Increment2');
const btn4 = document.getElementById('Decrement2');
const btn5 = document.getElementById('Increment5');
const btn6 = document.getElementById('Decrement5');
const btn7 = document.getElementById('Increment10');
const btn8 = document.getElementById('Decrement10');
const btn9 = document.getElementById('Increment50');
const btn10 = document.getElementById('Decrement50');
const btn11 = document.getElementById('Increment100');
const btn12 = document.getElementById('Decrement100');
const btn13 = document.getElementById('clear');
const container = document.getElementById('counter');
let count = 0;

btn1.addEventListener('click', () => {
  count++;
  container.innerHTML = count;
});

btn2.addEventListener('click', () => {
  count--;
  container.innerHTML = count;
});
btn3.addEventListener('click', () => {
  count+=2;
  container.innerHTML = count;
});

btn4.addEventListener('click', () => {
  count-=2;
  container.innerHTML = count;
});
btn5.addEventListener('click', () => {
  count+=5;
  container.innerHTML = count;
});

btn6.addEventListener('click', () => {
  count-=5;
  container.innerHTML = count;
});
btn7.addEventListener('click', () => {
  count+=10;
  container.innerHTML = count;
});

btn8.addEventListener('click', () => {
  count-=10;
  container.innerHTML = count;
});
btn9.addEventListener('click', () => {
  count+=50;
  container.innerHTML = count;
});

btn10.addEventListener('click', () => {
  count-=50;
  container.innerHTML = count;
});
btn11.addEventListener('click', () => {
  count+=100;
  container.innerHTML = count;
});

btn12.addEventListener('click', () => {
  count-=100;
  container.innerHTML = count;
});
btn13.addEventListener('click', () => {
  count = 0;
  container.innerHTML = count;
});
 
