const faqMain = document.querySelectorAll('.faq');
const faqAll = document.querySelectorAll('.faq-toggle');



faqAll.forEach((faq) => {
        faq.addEventListener('click', faqActive)
    })
 function faqActive (){
    faqAll.forEach((faq) => {
         this.parentNode.classList.toggle('active');
     })
 }

 //or ANother Method

//  faqAll.forEach( toggles => {
//      toggles.addEventListener('click', () => {
//         toggles.parentNode.classList.toggle('active');
//      })
//  })