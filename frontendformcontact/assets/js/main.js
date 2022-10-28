//Ici avec DOMContentLoaded, on s'assure que toute la page soit bien chargée
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      console.log(data);
      const response = await axios.post(
        "http://localhost:3000/send-email",
        data
      );
      console.log(response.data);
      alert("Merci de votre réponse !");
    });
});
