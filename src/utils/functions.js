function replacePlusPhoneNumber(number) {
  if (!number) {
    return;
  }
  return number.replace("+", "");
}

export { replacePlusPhoneNumber };
