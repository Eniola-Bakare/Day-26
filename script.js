// buttons for adding to cart
let quantityReduce = document.getElementById('minus')
let quantityFigure = document.querySelector('.quantity-figure')
let quantityAdd = document.getElementById('plus')
let texts = document.querySelector('.texts')

let modalCartEmpty = document.querySelector('.modal-cart')
let modalCartFull = document.querySelector('.modal-cart-full')


let originalPrice = document.querySelector('.original-price')
let dicountedPrice = document.querySelector('#price-and-discount')
let count = 0

// function forQuantity(button){

//     if(button == plus){
//         count+= 1
//     }else if(button == minus){
//         count -= 1
//     }
//     quantityFigure.innerHTML = count
// }


// cart function
function cartText(count){
    let cartText = document.querySelector('.cart-text')
        cartText.innerHTML = `Fall Limited Edition Sneakers $125 x ${count} <span class='total-price'>$${125 * count}`
}

// for prices
function forPrices(count){
    quantityFigure.innerHTML = count
    let forOriginalPrice = count * 250
    originalPrice.innerHTML = `$${forOriginalPrice}`

    let forDiscountedPrice = `$${forOriginalPrice/2}`
    dicountedPrice.innerHTML = forDiscountedPrice
}

// event listeners
quantityAdd.addEventListener('click', ()=>{
    count ++
        forPrices(count)
        modalCartEmpty.classList.remove('active')

        // for full cart
        cartText(count)
    
})
quantityReduce.addEventListener('click', ()=>{
    count --
    if(count <= 0){
        count = 0
        modalCartEmpty.classList.toggle('active')
        modalCartFull.classList.remove('active')
        return  quantityFigure.innerHTML = count;
    }else{
     forPrices(count)
        
    }
    cartText(count)
})

// ADD TO CART BTN
let addToCartBtn = document.querySelector('.add-to-cart-btn')
addToCartBtn.addEventListener('click', () =>{
    if(count === 0){
        modalCartEmpty.classList.toggle('active')
        modalCartFull.classList.remove('active')
    }else{
        modalCartEmpty.classList.remove('active')
        modalCartFull.classList.toggle('active')
    }
})

// for checkout submission
let checkOutBtn = document.querySelector('.check-out')
        checkOutBtn.addEventListener('click', () =>{
            modalCartFull.classList.remove('active')
            count = 0
            forPrices(count)

        })

// for Image section

let bigImage = document.querySelector('.big-image')
let thumbnailsDiv = document.querySelectorAll('.thumbnail')

const lightBoxBg =  document.createElement('div')
lightBoxBg.id  = 'lightBoxBg'
document.body.appendChild(lightBoxBg)


let thumbNailLeak = ''
thumbnailsDiv.forEach(thumbnail => {
 thumbnail.addEventListener('click', () =>{ 
        thumbnailSrc = thumbnail.src
        bigImage.src = thumbnailSrc
        thumbNailLeak = bigImage.src
    })
   
    console.log(thumbNailLeak)
        bigImage.addEventListener('click', () =>{
            lightBoxBg.classList.add('active')
            const lightBoxImg = document.createElement('img')
            lightBoxImg.src = thumbNailLeak
            lightBoxImg.id = 'lightBoxImg'
           while(lightBoxBg.firstChild){
            lightBoxBg.removeChild(lightBoxBg.firstChild)
           }
            lightBoxBg.appendChild(lightBoxImg)

        })
});
lightBoxBg.addEventListener('click', e =>{
    console.log('errr')
    lightBoxBg.classList.remove('active')
})





