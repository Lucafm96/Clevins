

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})


document.querySelectorAll('.card-btn').forEach(el => {
    el.addEventListener('click', () => {
        console.log('datos enviados');
        const request = new XMLHttpRequest();
        request.open('GET', 'product.json');
        request.responseType = 'json';
        request.send();
        request.onload = () => {
            const datos = request.response;
            console.log(datos[0].name);
        }
    });
});

