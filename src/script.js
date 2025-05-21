function errorDate(date, elementId) {
  let label = document.getElementById(elementId);

  if (date > label.firstElementChild.nextElementSibling.max) {
    label.firstElementChild.classList.add("errorDate");
    label.lastElementChild.classList.remove("hidden")
    label.lastElementChild.classList.add("show")
  } else {
    label.firstElementChild.classList.remove("errorDate");
    label.lastElementChild.classList.add("hidden")
    label.lastElementChild.classList.remove("show")
  }
}

function errorYear(year) {
  let inputYear = document.getElementById("year");

  if (year > inputYear.max || year < inputYear.min) {
    inputYear.previousElementSibling.classList.add("errorDate")
    inputYear.nextElementSibling.nextElementSibling.classList.add("show")
    inputYear.nextElementSibling.nextElementSibling.classList.remove("hidden")
  } else {
    inputYear.nextElementSibling.nextElementSibling.classList.add("hidden");
    inputYear.nextElementSibling.nextElementSibling.classList.remove("show");
    inputYear.previousElementSibling.classList.remove("errorDate");
  }

}

function isValidDate(year, month, day) {
  errorDate(day, "labelDay")
  errorDate(month, "labelMonth")
  errorYear(year)

  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

}



function calculateAge(birthYear, birthMonth, birthDay) {

  if (!isValidDate(birthYear, birthMonth, birthDay)) {
    errorValidDate(birthDay, "labelDay")
    errorValidDate(birthMonth, "labelMonth")
    errorValidDate(birthYear, "labelYear")
    if (birthDay > 0) {
      let labelDay = document.getElementById("labelDay");
      labelDay.lastElementChild.classList.remove("hidden")
      labelDay.lastElementChild.classList.add("show")
    }
    return console.log("La fecha ingresada no es válida.");
  }

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  const currentDate = new Date();

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    ageDays += previousMonth.getDate();
    ageMonths--;
  }

  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  let yearsResult = document.getElementById("yearsResult")
  let monthResult = document.getElementById("monthResult")
  let daysResult = document.getElementById("daysResult")

  yearsResult.innerText = ageYears;
  monthResult.innerText = ageMonths;
  daysResult.innerText = ageDays;
}

function showAge() {
  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  calculateAge(year, month, day)

  toggleEmptyField(day, "labelDay")
  toggleEmptyField(month, "labelMonth")
  toggleEmptyField(year, "labelYear")
}

function toggleEmptyField(value, elementId) {
  let label = document.getElementById(elementId);

  if (!value) {
    label.firstElementChild.classList.add("empty")
    label.firstElementChild.nextElementSibling.classList.add("error")
    label.lastElementChild.previousElementSibling.classList.add("show");
    label.lastElementChild.previousElementSibling.classList.remove("hidden");
  } else {
    label.firstElementChild.classList.remove("empty")
    label.firstElementChild.nextElementSibling.classList.remove("error")
    label.lastElementChild.previousElementSibling.classList.add("hidden");
    label.lastElementChild.previousElementSibling.classList.remove("show");

  }
}

function errorValidDate(isInvalid, elementId) {
  let label = document.getElementById(elementId);

  if (isInvalid) {
    label.firstElementChild.classList.add("errorDate")
    label.firstElementChild.nextElementSibling.classList.add("errorInput")
  } else {
    label.firstElementChild.classList.remove("errorDate");
    label.firstElementChild.nextElementSibling.classList.remove("errorInput");
  }
}
// let inputs = document.getElementsByTagName("label");

// Array.from(inputs).forEach(input => {
//   console.log(input);
// })

