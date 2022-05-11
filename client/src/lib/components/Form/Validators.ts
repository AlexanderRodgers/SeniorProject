export interface ValidatorResult {
  [validatorName: string]: {
    error: boolean;
    message?: string;
  };
}

export type Error = {
  required: boolean;
  message: string;
}

export type FormError = { 
  [inputName: string]: ValidatorResult 
}; 

export type ValidatorFn = (value: any) => ValidatorResult;

function requiredInput(value: any): ValidatorResult {
  if (value === '' || value == null) {
    return {
      required: {
        error: true,
        message: 'This field is required.'
      }
    };
  }
}

export const Validators = {
  requiredInput,
}