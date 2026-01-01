// Menú toggle simplificado
function toggleMenu() {
  document.querySelector(".toggle").classList.toggle("active");
  document.querySelector(".sidebar").classList.toggle("active");
}

// Navegación activa
document.querySelectorAll(".list").forEach((item) => {
  item.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".list")
      .forEach((i) => i.classList.remove("active2"));
    this.classList.add("active2");
  });
});

// Envío de formulario
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const btn = document.getElementById("button");
  btn.value = "Enviando...";

  emailjs.sendForm("default_service", "template_c7cmlyd", this).then(
    () => {
      btn.value = "Enviar";
      Swal.fire(
        "Correo enviado!",
        "Me contactaré contigo lo antes posible!",
        "success"
      );
    },
    (err) => {
      btn.value = "Enviar";
      console.error("Error:", err);
    }
  );
});
