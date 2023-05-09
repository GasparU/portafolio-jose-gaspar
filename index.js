function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

let list = document.querySelectorAll(".list")
function setActiveClass(){
  list.forEach((item) => {
    item.classList.remove("active2");
    this.classList.add("active2");
  });
}
list.forEach( (item)=> 
item.addEventListener("mouseover", setActiveClass))

function toggleMenu2() {
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".navigation");
  menuToggle.classList.toggle("active2");
  sidebar.classList.toggle("active2");
}

// Aqui inicia para envio de correo

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_c7cmlyd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      Swal.fire(
        'Correo enviado!',
        'Me contactaré contigo lo antes posible!',
        'success'
      )
      
     
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
      
    });
    
});
