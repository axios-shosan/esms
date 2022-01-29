const ham=document.querySelector('.hamburger')
const mobnav=document.querySelector('.mobile-nav')

ham.addEventListener('click',function () {
    ham.classList.toggle('is-active')
    mobnav.classList.toggle('is-active')
    if (ham.classList.contains('is-active')) {
        document.querySelector('body').style.overflow='hidden'; } /*unable scrolling*/
    else 
        document.querySelector('body').style.overflow='scroll';
})

const section=document.querySelectorAll('.redirect_sec')

section.forEach((sec) =>  {sec.addEventListener('click', function() {
    ham.classList.toggle('is-active')
    mobnav.classList.toggle('is-active')
    document.querySelector('body').style.overflow='scroll' })
})


/*animating the title */
const title=document.querySelector('.title')


  var observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting == true) {
          title.classList.add('animated-title')
        }
      }

      )
    } ) ;

  var target = document.querySelector('.workshops')
observer.observe(target);

/*slider*/
const arrow_right=document.querySelector('#right')
const arrow_left=document.querySelector('#left')
const slider=document.querySelector('.slider')

arrow_right.addEventListener('click',
function () { 
   
  
  slider.style.marginLeft="-100%"
}
)

arrow_left.addEventListener('click',
function () { 
    
  slider.style.marginLeft="0%"

}
)