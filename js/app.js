const da = new DynamicAdapt("max");  
da.init();

const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight,

)
console.log(docHeight);

const page = document.querySelector('.page')

function progressBarDonation(){
    console.log('gfdh');
    
    const progressLine = document.querySelector('.d-reward-progress-bar__line')
    var width = 28
    if(width <= 100){
        progressLine.style.width = width + '%'
    }
}

progressBarDonation()

console.log('Привет');

//--------------------

const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        720:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        },
    }

  });
//------------------------
const changes = document.querySelectorAll('.change')


changes.forEach(el => {
    var av = Array.from(el.children)

    av.forEach(l =>{
        
        var lState = false
        l.addEventListener('click', function(){

            if (lState == false){
                av.forEach(j => {
                    console.log(j);
                    j.classList.remove('change_act')
                    j.classList.remove('default-change__act')
                })
                l.classList.add('change_act')
                l.classList.add('default-change__act')
                lState = true
                
            } else{
                l.classList.remove('change_act')
                l.classList.remove('default-change__act')
                lState = false
            }
        })
    })
})