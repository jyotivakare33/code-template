const encode = document.querySelector('.btn-humantime');
const result = document.querySelector('.result-humantime');
const inputValue = document.querySelector('.epoch');
encode.addEventListener('click', () => {
    result.innerHTML = new Date(inputValue.value.trim() * 1000);
});

const epoch = document.querySelector('.btn-epoch');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const date = document.querySelector('.date');
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const timezone = document.querySelector('.timezone');
const resultEpoch = document.querySelector('.result-epoch');

epoch.addEventListener('click',() => {
    result.innerHTML = (Math.floor(new Date(month.value+' '+date.value+', '+year.value+' '+hour.value+':'+minutes.value+':'+seconds.value).getTime()/1000.0));
})

