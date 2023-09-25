/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.home__data')
sr.reveal('.home__handle', { delay: 700 })
sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' })

/*=======================Resume=======================*/

document.getElementById("download_resume").addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1QomrPltksgGTBEIkl7JKFg2NL0-qmO_e/view?usp=sharing", "_blank");
});

document.getElementById("nav_resume").addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1QomrPltksgGTBEIkl7JKFg2NL0-qmO_e/view?usp=sharing", "_blank");
});

/*=======================Email=======================*/

function validateEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}
let emailInput = document.querySelector("#form__email");
let validEmail = false;
emailInput.addEventListener("keyup", () => {
  validEmail = validateEmail(emailInput.value);
  let emailIcon = document.querySelector(".email-icon");
  if (emailInput.value === "") {
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    emailIcon.style.color = "#b4b4b4";
  } else if (validEmail) {
    emailIcon.classList.replace("uil-envelope", "uil-check-circle");
    emailIcon.style.color = "#4bb543";
  } else {
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    emailIcon.style.color = "#de0611";
  }
});
function sendmail() {
  let form = document.getElementById("contact__form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("form__name");
    let email = document.getElementById("form__email");
    let msg = document.getElementById("form__msg");
    let submit = document.getElementById("email_btn");
    if (
      email.value == "" ||
      name.value == "" ||
      msg.value == ""
    ) {
      error();
    }
    else if (validEmail === false) {
      alert("Please enter a valid email address.");
    } else if (validEmail === true) {
      sendEmail();
      alert("Message sent successfully!");
      form.reset();
    }
  });
}
sendmail();
function error() {
  alert("Please fill all the details");
}
function sendEmail() {
  var templateParams = {
    from_name: document.getElementById("form__name").value,
    mesg: document.getElementById("form__msg").value,
    from_email: document.getElementById("form__email").value,
  };
  emailjs.send("service_x1gjf3g", "template_3uwqmkh", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}