
function isValidDate(year, month, day) {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function calculateAge(birthYear, birthMonth, birthDay) {
  if (!isValidDate(birthYear, birthMonth, birthDay)) {
    return "La fecha ingresada no es válida.";
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

}