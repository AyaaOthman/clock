const hour = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const btn = document.querySelector(".btn");
const digHours = document.querySelector(".dig-hour");
const digMin = document.querySelector(".dig-min");

function time() {
  const secCounter = setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    const hoursRotateRatio = hours * 30;
    const minRotateRatio = mins * 6;
    const secRotateRatio = secs * 6;

    sec.style.transform = `translate(-50%, -100%) rotate(${secRotateRatio}deg)`;
    hour.style.transform = `translate(-50%, -100%) rotate(${hoursRotateRatio}deg)`;
    min.style.transform = `translate(-50%, -100%) rotate(${minRotateRatio}deg)`;
  digHours.innerHTML = `${hours}`
  digMin.innerHTML = `:${mins}`
  }, 1000);
}
time();

btn.addEventListener('click', darkMode )
function darkMode(e){
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Dark Mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML='Light Mode'

    }
}