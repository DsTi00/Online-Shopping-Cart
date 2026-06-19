let productsContainer = document.querySelector('.product_container')
let openCartBtn = document.querySelector('.cart-icon')
let openLikedBtn = document.querySelector('.liked-items')
let cartProductsContainer = document.querySelector('.dialogProducts')
let likedItemsProductsConatainer = document.querySelector('.likedItemsProducts')

let products = [
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 14 pro', 'gb': ' 512GB', 'serialNumber': '(MQ233)', 'color': 'Gold', 'Price': 1437, 'image': 'https://i.postimg.cc/1XRQMGmX/Iphone-14-pro-1.png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 11 ', 'gb': ' 128GB', 'serialNumber': '(MQ233)', 'color': 'White', 'Price': 510, 'image': 'https://i.postimg.cc/y8JWKHFh/Iphone-14-pro-1-(1).png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 11 ', 'gb': ' 128GB', 'serialNumber': '(MQ233)', 'color': 'White', 'Price': 550, 'image': 'https://i.postimg.cc/y8JWKHFh/Iphone-14-pro-1-(1).png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 14 pro', 'gb': ' 1TB', 'serialNumber': '(MQ2V3)', 'color': 'White', 'Price': 1499, 'image': 'https://i.postimg.cc/BvXzNhfK/Iphone-14-pro-1-(2).png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 14 pro', 'gb': ' 1TB', 'serialNumber': '(MQ2V3)', 'color': 'Gold', 'Price': 1399, 'image': 'https://i.postimg.cc/1XRQMGmX/Iphone-14-pro-1.png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 14 pro', 'gb': ' 128GB', 'serialNumber': '(MQ0G3)', 'color': ' Purple', 'Price': 1600, 'image': 'https://i.postimg.cc/MK6ddsyK/Iphone-14-pro-1-(3).png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 13 mini', 'gb': ' 128GB', 'serialNumber': '(MLK23)', 'color': 'Pink', 'Price': 850, 'image': 'https://i.postimg.cc/d34RbY8K/Iphone-14-pro-1-(4).png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 14 pro', 'gb': ' 256GB', 'serialNumber': '(MQ0T3)', 'color': ' Black', 'Price': 1399, 'image': 'https://i.postimg.cc/hGTLSx9m/Iphone-14-pro-1-(5).png', 'liked': false },
    { 'id': crypto.randomUUID(), 'name': 'Apple iphone 14 pro', 'gb': ' 256GB', 'serialNumber': '(MQ103)', 'color': 'Silver', 'Price': 1399, 'image': 'https://i.postimg.cc/BvXzNhfK/Iphone-14-pro-1-(2).png', 'liked': false },
]

let cart = []
let likedItems = JSON.parse(localStorage.getItem('favourite')) || []

console.log(likedItems);


    
function renderProductsList() {

    for (let i = 0; i < products.length; i++) {
        const product = products[i];


        let isLiked = likedItems.find(i => i.id == product.id)

        // console.log(isLiked);

        // creating new product HTML
        let newProduct = document.createElement('div')
        newProduct.className = 'product'
        newProduct.innerHTML = `
            <div class="phone">
                 <button class="cursor likedItems">
                        <svg class="heart ${isLiked ? 'heart-liked' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-heart-icon lucide-heart">
                        <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>
                    </button>
                <div class="phone_img">
                    <img src="${product.image}" alt="iphone" class="iphone">
                </div>
                <div class="phoneD1">
                    <p class="name">${product.name}${product.gb} </p>
                    <p class="color"> ${product.color}</p>
                </div>
                <div class="phoneD2">
                    <p class="serialNub">${product.serialNumber}</p>
                    <p class="serialNub">$${product.Price}</p>

                </div>
                <div class="button">
                    <button class="buy cursor">Buy Now</button>
                </div>
            </div>
        `
        productsContainer.appendChild(newProduct)


        // buy product button
        newProduct.querySelector('.buy').addEventListener('click', () => {
            let find = cart.find(item => item.id === product.id)
            console.log(find)
            if (find == undefined) {
                cart.push({ id: product.id, quantity: 1 })
                console.log('Kill ADVAITH')
            }
            else {
                find.quantity += 1
                console.log('done')
            }
        })

        let likeBtn = newProduct.querySelector('.heart')

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('heart-liked')


            let findLikedItems = likedItems.find(item => item.id === product.id)


            if (findLikedItems == undefined) {
                likedItems.push({ id: product.id })
                // likedItems.push(isLiked)
                console.log('added')

            }
            else {
                likedItems = likedItems.filter(item => item.id !== product.id)
                console.log('removed');

            }
            renderLikedItems()

        })
    }
}

// openLikedBtn.addEventListener('click', renderProductsList)

function renderLikedItems() {

    // likedItemsProductsConatainer.innerHTML = "";
    console.log(likedItems)

    for (let i = 0; i < likedItems.length; i++) {
        let matchingProduct = products.find(item => item.id === likedItems[i].id)

        let likedItemElement = document.createElement('div')
        likedItemElement.className = 'likedAddedItem'




        likedItemElement.innerHTML = `
            
            <div class="phone">
                <button class="cursor likedItems likedItemsBtnColor">
                    <svg class="heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-heart-icon lucide-heart">
                        <path
                            d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>
                </button>
                <div class="phone_img">
                    <img src="${matchingProduct.image}" alt="iphone" class="iphone">
                </div>
                        
                <div class="phoneD1">
                    <p class="name">${matchingProduct.name}${matchingProduct.gb} </p>
                    <p class="color">${matchingProduct.color}</p>
                </div>
                        
                <div class="phoneD2">
                    <p class="serialNub">${matchingProduct.serialNumber}</p>
                    <p class="serialNub">$${matchingProduct.Price}</p>
                </div>
                        
                <div class="button">
                    <button class="buy cursor">Buy Now</button>
                </div>
            </div>
`

        likedItemsProductsConatainer.appendChild(likedItemElement)
    }
    localStorage.setItem('favourite', JSON.stringify(likedItems))

}
renderLikedItems()




// Event listeners


openCartBtn.addEventListener('click', renderCart)


function renderCart() {
    cartProductsContainer.innerHTML = ``

    cart.forEach(cartProduct => {

        let product = products.find(item => item.id === cartProduct.id)

        let cartItemElement = document.createElement('div')
        cartItemElement.className = 'cartAddedItem'
        cartItemElement.innerHTML = `
        
        <div class="dialogProduct">
            <img src="${product.image}" alt="Iphone-14-pro-1" class="cartImage">
            <div class="productsData">
                <p class="productName">${product.name}</p>
                <p class="productGbColor">${product.color}</p>
                <p class="serialNumber">#${product.serialNumber}</p>
            </div>
            <div class="productButtons">
                <button class="decrease cursor">-</button>
                <input type="text" value="${cartProduct.quantity}" class="productsInput cursor">
                <button class="increase cursor">+</button>
                <button class="deleteButton cursor">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path
                            d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z">
                        </path>
                    </svg>
                </button>
                <p class="productPrice">$${product.Price}</p>
            </div>
        </div>
        `
        cartProductsContainer.appendChild(cartItemElement)

        let cartItemInput = cartItemElement.querySelector('.productsInput')

        // Cart Product Event Listeners
        cartItemElement.querySelector('.increase').addEventListener('click', () => {
            cartProduct.quantity += 1
            cartItemInput.value = cartProduct.quantity
            renderTotal()
        })

        cartItemElement.querySelector('.decrease').addEventListener('click', () => {
            cartProduct.quantity -= 1
            cartItemInput.value = cartProduct.quantity

            if (cartItemInput.value == 0) {
                cart = cart.filter(item => item.id !== cartProduct.id)
            }

            renderCart()
        })

        cartItemElement.querySelector('.deleteButton').addEventListener('click', () => {
            cart = cart.filter(item => item.id !== cartProduct.id)
            renderCart()
        })



    })

    renderTotal()
}


function renderTotal() {

    let subTotalDiv = document.querySelector('.subtotalPrice')
    let taxDiv = document.querySelector('.esTaxPrice')
    let totalDiv = document.querySelector('.totalPrice')

    // currentItem.id * currentItem.quantity
    let subtotal = 0
    let shipping = 29
    let totalCost = 0
    let tax = 0

    cart.forEach(item => {
        let product = products.find(i => i.id === item.id);
        subtotal += product.Price * item.quantity
    });

    subTotalDiv.innerHTML = '$' + subtotal
    tax = subtotal * 0.05
    taxDiv.innerHTML = '$' + tax.toFixed(2) * 1

    totalCost = subtotal > 0 ? subtotal + tax + shipping : 0
    console.log(totalCost);

    totalDiv.innerHTML = '$' + totalCost
}


localStorage.setItem('Theme', 'lite')

// Starting the program
renderProductsList()