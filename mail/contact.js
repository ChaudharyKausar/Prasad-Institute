document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop normal form submission

    const formData = new FormData(form);

    fetch("mail/Contact2.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);      // 👈 Yeh alert dikhega "Message sent successfully"
        form.reset();     // Form clear
      })
      .catch((err) => {
        alert("Error sending message."); // 👈 Error case
        console.error(err);
      });
  });
});
