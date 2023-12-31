function sendEmail() {
  let excel = SpreadsheetApp.getActiveSpreadsheet();

  let sheet = excel.getSheetByName("first_sheet");

  let lastRow = sheet.getLastRow();

  let secondLastColumn = sheet.getLastColumn() - 1;

  let range = sheet.getRange(2, 2, lastRow - 1, secondLastColumn);

  let values = range.getValues();

  for (let i = 0; i < values.length; i++) {
    let status;
    let [name, email, salary] = values[i];

    if (!email) {
      status = "No Email Provided";
    } else {
      try {
        let msg = buildMessage(name, salary);

        MailApp.sendEmail(email, "Salary for Month of May", msg);
        status = "Success";
      } catch (err) {
        console.log(err);
        status = "Failed";
      }
    }

    let cell = sheet.getRange(i + 2, 4);
    cell.setValue(status);
  }
}

const buildMessage = (name, salary) => {
  return `Hello ${name}, your salary for the month of May has been credited. Salary:${salary}`;
};
