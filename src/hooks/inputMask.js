export function formatPhoneNumber(value) {
    if (!value) return value;
  
    const phoneNumber = value.replace(/[^\d]/g, "");
  
    if (phoneNumber[0] !== "0") {
      return "0" + phoneNumber;
    }
  
    const phoneNumberLength = phoneNumber.length;
  
    if (phoneNumberLength < 4) return phoneNumber;
  
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 1)}(${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    }
  
    if (phoneNumberLength < 10) {
      return `${phoneNumber.slice(0, 1)}(${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
    }
  
    return `${phoneNumber.slice(0, 1)}(${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
  }
  