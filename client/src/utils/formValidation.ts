export const phoneNumberValidation = (number: string): boolean => {
    const regEx = /^\+[1-9]\d{10,14}$/;

    return regEx.test(number);
};