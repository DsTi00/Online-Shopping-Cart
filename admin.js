let adminPageInputs = document.querySelectorAll('.adminPageInput')
console.log(adminPageInputs);

let product = {
    'id': null,
    'name': null,
    'gb': null,
    'serialNumber': null,
    'color': null,
    'Price': null,
    'image': null,
    'liked': false,
}

document.querySelector('.addProduct').addEventListener('click', () => {
    // console.log(adminPageInput.values);

    // for (let i = 0; i < adminPageInputs.length; i++) {
    //     const adminPageInput = adminPageInputs[i];
    //     console.log(adminPageInput.value);
    // }

    product.name = document.querySelector('#input-name').value
    product.gb = document.querySelector('#input-model').value
    product.serialNumber = document.querySelector('#input-description').value
    product.color = document.querySelector('#input-model').value
    product.Price = document.querySelector('#input-price').value
    product.image = document.querySelector('#input-url').value
    console.log(product);


console.log(product.name);

    if (product.name == '' || product.gb == '' || product.image == '' || product.serialNumber == '' || product.color == '' || product.image == '') {
        alert('Please fill the Form')
    } else{
        product.id = product.name
        const old_localStorage = JSON.parse(localStorage.getItem('products')) || []
        old_localStorage.push(product)
        localStorage.setItem('products', JSON.stringify(old_localStorage))
    }
    console.log(product);

})