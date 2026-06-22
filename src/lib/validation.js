const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d\s().-]+$/;

export const isValidEmail = (value) => emailPattern.test(value.trim());

export const isValidPhone = (value) => {
  const trimmedValue = value.trim();
  const digits = trimmedValue.replace(/\D/g, "");

  return (
    phonePattern.test(trimmedValue) &&
    digits.length >= 7 &&
    digits.length <= 15
  );
};
