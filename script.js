let acc = document.getElementsByClassName('accordion')

let day1 =  document.querySelector('.day1')
let day2 =  document.querySelector('.day2')

let btn1 =  document.querySelector('.btn1')
let btn2 =  document.querySelector('.btn2')

for(let i=0;i<acc.length;i++){
  acc[i].addEventListener('click',function(){
    
    
    
    
    let panel = this.nextElementSibling
    
    
    
    if(panel.style.maxHeight){
      panel.style.maxHeight=null;
      this.classList.remove('open')
      this.getElementsByClassName('icon')[0].innerHTML ='+';
    }
    
    else{
      
      
      for(let x=0;x<acc.length; x++){
        acc[x].classList.remove('open')
        acc[x].nextElementSibling.style.maxHeight=null;
        acc[x].getElementsByClassName('icon')[0].innerHTML ='+';

      }
      
      
      panel.style.maxHeight = panel.scrollHeight + 'px';
      this.classList.toggle('open')
      this.getElementsByClassName('icon')[0].innerHTML ='-'
    }
  })
}


btn1.addEventListener("click", function(){
  console.log("working");
  day1.classList.remove("hidden-day")
  day2.classList.add("hidden-day")
})

btn2.addEventListener("click", function(){
  day2.classList.remove("hidden-day")
  day1.classList.add("hidden-day")
})

