fetch('https://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then((json) => {
        document.querySelector('.result').innerHTML = json.ip;
    });