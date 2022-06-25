const sections = document.querySelectorAll('.section');
const sectBtns  = document.querySelectorAll('.controlls');
const sectBtn  = document.querySelectorAll('.control'); 
const allSelections =document.querySelector('.main-content');
const headerActive = document.querySelector('.header')



// function PageTransitions(){
//   //Button click
//   for(let i= 0; i < sectBtn.length; i++){
//     sectBtn[i].addEventListener('click', function(){
//       let currentBtn = document.querySelectorAll('.active-btn');
//       currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
//       this.className += ' active-btn';
//     })
//   }
  
//   //Sections Active-class
//     allSelections.addEventListener('click',(e)=>{
//       const id = e.target.dataset.id;
//       if(id){
//         //remove selected from the other
//         sectBtns.forEach((btn)=>{
//           btn.classList.remove('active')
//         })
//         e.target.classList.add('active')

//         //hide other sections
//         sections.forEach((sections)=>{
//           sections.classList.remove('active')
//         })
//       const element = document.getElementById(id)
//       element.classList.add('active')
//       }

//     })



// }

// PageTransitions();



function PageTransition(){
    // Button Click Active Class
  for(let i=0; i<sectBtn.length; i++)
      sectBtn[i].addEventListener('click',function(){
          let currentBtn = document.querySelectorAll('.active-btn');
        //   currentBtn[0].classList.remove('active-btn')
          currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
        //   currentBtn[0].className=currentBtn[0].className.replace('control1','');
          this.className += ' active-btn'
        //   this.className += ' control1'
      })  
    //   Section Active Class
     allSelections.addEventListener('click',function(e){
         const id = e.target.dataset.id;
         if(id){
             sectBtns.forEach((btn)=>{
                 btn.classList.remove('active')
                 
                
             })
             e.target.classList.add('active')
             
             
             sections.forEach((section)=>{
                 section.classList.remove('active')
                 
                })
                const element = document.getElementById(id);
             
             element.classList.add('active');
         }
     })
     //Togle Theme
     const themeBtn = document.querySelector('.theme-btn')
     themeBtn.addEventListener('click',()=>{
        let element = document.body
        element.classList.toggle('light-mode')
     })
}
PageTransition();

