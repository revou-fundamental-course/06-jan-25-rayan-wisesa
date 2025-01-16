// Prompt Minta Nama

const userGreeting = document.getElementById("user-greeting");

let userName = localStorage.getItem("userName");

if (userName) {
    userName = prompt("Masukkan nama anda: ");
    if (userName) {
        localStorage.setItem("userName", userName);
    } else {
        userName = "Pengunjung";
    }
} 

userGreeting.textContent = userName;

// Form 

document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();

    const nama = document.querySelector("input[name='nama']").value.trim();
    const tanggal = document.querySelector("input[name='tanggal']").value.trim();
    const kelamin = document.querySelector("input[name='kelamin']:checked");
    const pesan = document.querySelector("textarea[name='pesan']").value.trim();

    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    let isValid = true;

    if (nama === "") {
        addErrorMessage("Masukkan nama.", "input[name='nama']");
        isValid = false;
    }

    if (tanggal === "") {
        addErrorMessage("Masukkan tanggal lahir.", "input[name='tanggal']");
        isValid = false;
    }

    if (!kelamin) {
        addErrorMessage("Masukkan jenis kelamin.", ".radiobutton");
        isValid = false;
    }

    if (pesan === "") {
        addErrorMessage("Masukkan pesan.", "textarea[name='pesan']");
        isValid = false;
    }

    if (isValid) {
        const output = document.getElementById("output");
        output.innerHTML = `
        

            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
            <p><strong>Jenis Kelamin:</strong> ${kelamin.value}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        `;
    }
});

function addErrorMessage(message, selector) {
    const element = document.querySelector(selector);
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.style.marginTop = "5px";
    error.textContent = message;
    element.parentElement.appendChild(error);
}

// Slideshow Gallery

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}