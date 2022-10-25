const form = document.getElementById('form');
const username = document.getElementById('formName');
const email = document.getElementById('formEmail');
const password1 = document.getElementById('formPassword1');
const password2 = document.getElementById('formPassword2');


form.addEventListener('submit', (e) => {
   e.preventDefault();
   let error = validateInputs();
   if(error === 0){
      alert('Your form send!');
      form.reset();
      let all = [username, email, password1, password2];
      for (let index = 0; index < all.length; index++) {
         const element = all[index];
         setFinish(element);
         
      }
   }else{
      alert('Please fill in the required fields');
   }
   

});

const setError = (input) => {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
   input.classList.remove('_success');
}



const setSuccess = element => {
   element.parentElement.classList.remove('_error');
   element.parentElement.classList.add('_success');
   element.classList.add('_success');

};
const setFinish =(element)=>{
   element.parentElement.classList.remove('_success');
   element.classList.remove('_success');

}

const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const password1Value = password1.value.trim();
   const password2Value = password2.value.trim();

   let error = 0;

   if (usernameValue === '') {
      setError(username);
      error++;
   } else {
      setSuccess(username);
   }

   if (emailValue === '' || !isValidEmail(emailValue)) {
      setError(email);
      error++;
   } else {
      setSuccess(email);
   }

   if (password1Value === '' || password1Value.length < 8) {
      setError(password1);
      error++;
   } else {
      setSuccess(password1);
   }

   if (password2Value === '' || password2Value.length < 8 || password2Value !== password1Value) {
      setError(password2);
      error++;
   } else {
      setSuccess(password2);
   }
   return error;

};