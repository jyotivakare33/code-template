let intervalId;
const stopwatch = document.querySelector('.stopwatch');
document.querySelector('.btn-start').addEventListener('click', () => {
    intervalId = setInterval(() => {
        stopwatch.innerText++;
    }, 1000);
});

document.querySelector('.btn-stop').addEventListener('click', () => {
    clearInterval(intervalId);
});
