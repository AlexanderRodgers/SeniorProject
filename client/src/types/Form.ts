import type { ValidatorFn } from "$lib/components/Form/Validators"

export type Form = {
  [inputName: string]: {
    validators: ValidatorFn[];
  };
};