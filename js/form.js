"use strict"

document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('form');
   form.addEventListener('submit',formSend);

   async function formSend(e){
      e.preventDefault();
      let error = validateInputs(form);

   
   }

   function validateInputs(form){
      let error = 0 ;
      let formRequest = document.querySelectorAll('._req')
      for( let index = 0; index < formRequest.length; index++){
         const input = formRequest[index];
         formRemoveError(input);

         if(input.classList.contains('_email')){
            if(isValidEmail(input)){
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }

  

   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('._error');
      
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');

   }
   function isValidEmail(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }
});


