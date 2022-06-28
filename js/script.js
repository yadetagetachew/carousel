let currentPosition = 0
// document.getElementById("outercontainer").addEventListener('click', function(){
//     currentPosition = currentPosition + 1
//     document.querySelector(".main").style.marginLeft = '-' + (currentPosition*100) + '%'
// })
document.getElementById("left").addEventListener("click", function(){
    if(currentPosition > 0){
        currentPosition = currentPosition - 1
        document.querySelector(".main").style.marginLeft = '-' + (currentPosition* 93) + 'vw'
    }
})
document.getElementById("right").addEventListener("click", function(){
    if (currentPosition < 2){
        currentPosition = currentPosition + 1
        document.querySelector(".main").style.marginLeft = "-" + (currentPosition* 93) + 'vw'
    }
})







// let currentPosition = 0
// // document.getElementById('carousel-container').addEventListener('click', function(){
// //     currentPosition = currentPosition + 1;
// //     document.querySelector('.main').style.marginLeft = '-' + (currentPosition*100) + '%'
// // })

// document.getElementById('left').addEventListener('click', function(){
//     if(currentPosition > 0){
//         currentPosition = currentPosition -1
//         document.querySelector('.slides').style.marginLeft = '-' + (currentPosition * 100) + '%'
//     }
// })

// document.getElementById('right').addEventListener('click', function(){
//     if(currentPosition < 2){
//         currentPosition = currentPosition + 1
//         document.querySelector('.slides').style.marginLeft = '-' + (currentPosition * 100) + '%'
//     }
// })





// const slideWrap = document.querySelector('.carousel-container')
// const slides = Array.from(slideWrap.children)
// const nav = document.querySelector('.carousel-nav') 
// const dots = Array.from(nav.children)
// const slidesWidth = slides[0].getBoundingClientRect().width

// console.log(slidesWidth)

// const slidePosition = (slide, index) => {
//     slide.style.left = slidePosition * index +'px'
// }

// slides.forEach(slidePosition)

// const moveToSlide = (slideWrap, currentSlide, indicatorSlide) => {
//     slideWrap.style.transform = 'translateX('- + indicatorSlide.style.left +')'
//     currentSlide.classList.remove('current-slide')
//     indicatorSlide.classList.add('current-slide')
// }

// const updateDots = (currentDot, indicatorDot) => {
//     currentDot.classList.remove('.current-slide')
//     indicatorSlide.classList.add('.current-slide')
// }

// // why does dots not work here
// document.querySelector('.carousel-nav').addEventListener('click', e => {
//     const indicatorDot = e.target.closest('button')

//     console.log(dots)

//     if(!indicatorDot) return

//     const currentSlide = slideWrap.querySelector('.current-slide')
//     const currentDot = nav.querySelector('.current-slide')
//     const indicatorIndex = dots.findIndex(dot => dot === indicatorDot)
//     const indicatorSlide = slides[indicatorIndex]

//     console.log( moveToSlide)

//     // moveToSlide(slideWrap, currentSlide, indicatorSlide)
//     // updateDots(currentDot, indicatorDot )
// })  