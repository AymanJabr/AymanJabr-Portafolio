const themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme != null) {
  setTheme(theme);
}

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", () => {
    let mode = themeDots[i].id;
    console.log("Option clicked");
    setTheme(mode);
  });
}

function setTheme(mode) {
  let linkHref = document.getElementById("theme-style");

  switch (mode) {
    case "light-mode":
      linkHref.href = "./default.css";
      break;
    case "blue-mode":
      linkHref.href = "./blue.css";
      break;
    case "green-mode":
      linkHref.href = "./green.css";
      break;
    case "purple-mode":
      linkHref.href = "./purple.css";
      break;
  }

  localStorage.setItem("theme", mode);
}

let name = document.getElementById("email_name");
let email = document.getElementById("email_email");
let subject = document.getElementById("email_subject");
let message = document.getElementById("email_message");

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(!name.value || !email.value || !subject.value ||!message.value){
    alert("Please make sure that all the fields are entered")
  }
  else if (!email.value.includes("@")){
    alert("Please enter a valid email address")
  }
  else{
    
    $.ajax({
      url: "https://formspree.io/xnqgeooz",
      method: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({
        email: email.value,
        message: message.value,
        subject: subject.value,
        name: name.value
      }) 
    });

    name.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""
    
    alert("Email has been successfully sent, and will be reviewed within 2 business days.")

  }


  
});
