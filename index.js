const encode = document.querySelector('.btn');
const result = document.querySelector('.decode-content');
const inputValue = document.querySelector('.input-value');
encode.addEventListener('click', () => {
    result.innerHTML = new Date(inputValue.value.trim() * 1000);
});
