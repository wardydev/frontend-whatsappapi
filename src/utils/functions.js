function replacePlusPhoneNumber(number) {
  if (!number) {
    return;
  }
  return number.replace("+", "");
}

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

export { replacePlusPhoneNumber, formatDate };
