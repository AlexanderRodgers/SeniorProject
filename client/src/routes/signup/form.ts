import type { FormError } from '../../types/Form';

function isValidString(value: any): boolean {
  return value != null && value !== "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getValueFromInput(value: HTMLInputElement): any {

}

function checkInput(input: HTMLInputElement): FormError {
  const error: FormError = {};
  if (input.required && !isValidString(input.value)) {
    console.log('name', input.name);
    if (!isValidString(input.name)) {
      throw 'Input must have a valid name!';
    }
    error[input.name] = [{
      required: true,
      message: 'This input is required.'
    }]; 
  }
  return error;
}

export const onSubmit = (e) => {
  const errors: FormError = {};
  console.log('event', e);
  for (let formTag of e.target) {
    console.log(formTag.dataset);
    if (formTag.tagName === 'INPUT') {
      checkInput(formTag);
    }
  }
  console.log('form Data', e.target[0]);
  const formData: FormData = new FormData(e.target);
 
}