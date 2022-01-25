
let contactFormBtn = document.getElementById("contact-form-button")
let contactForm = document.getElementById("contact-form")
let formSubmissionSubject = document.getElementById("form-submission-subject")

contactFormBtn.addEventListener("click", event => {
    console.log("button clicked")

    let userName = document.forms["contact-form"].elements["name"].value

    formSubmissionSubject.value = `KlimbOut Website Submission - ${userName}`

})

