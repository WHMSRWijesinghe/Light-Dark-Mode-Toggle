const switchElement = document.querySelector('.switch');

switchElement.addEventListener('change', () => {
    document.body.style.backgroundColor = switchElement.checked ? '#2c3e50' : 'white';
});
