function sendThankYouEmail() {
  let responses = FormApp.getActiveForm().getResponses();

  let email = responses.pop().getItemResponses()[1].getResponse();

  let msg = "Thank you for submitting the form.";

  if (isValidEmail(email)) {
    MailApp.sendEmail(email, "Thank You", msg);
  }
}

function isValidEmail(email) {
  let emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailPattern.test(email);
}
