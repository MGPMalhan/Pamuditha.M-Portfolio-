document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text-animation");
  const texts = ["Web Developer", "UI/UX Designer", "Cooperate Initiative"];
  let textIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100); // Adjust the speed of the typing effect here
    } else {
      setTimeout(eraseEffect, 1500); // Pause before erasing
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 70); // Adjust the speed of the erasing effect here
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 80); // Pause before typing the next text
    }
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", (event) => {
  emailjs.init("_-fxcVXhzDKWfCz81"); // Initialize EmailJS with your user ID

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const number = document.getElementById("number").value;
      const subject = document.getElementById("emailsubject").value;
      const message = document.getElementById("message").value;

      // Construct the email parameters
      const params = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
      };

      // Send the email
      emailjs.send("service_u44utut", "template_ivpfrag", params).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message.");
        }
      );
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink(); // Run on page load
});
