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


// $(function () {

//     $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function ($form, event, errors) {
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault();
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var subject = $("input#subject").val();
//             var message = $("textarea#message").val();

//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true);

//             $.ajax({
//                 url: "contact.php",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     subject: subject,
//                     message: message
//                 },
//                 cache: false,
//                 success: function () {
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-success')
//                             .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                             .append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function () {
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
//                     $('#success > .alert-danger').append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", false);
//                     }, 1000);
//                 }
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// $('#name').focus(function () {
//     $('#success').html('');
// });
