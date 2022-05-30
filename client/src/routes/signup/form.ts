import type { FormError } from '../../types/Form';
import { supabase } from '../../supabase/supabaseClient';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

function isValidString(value: any): boolean {
  return value != null && value !== "";
}

export async function isNameInUse(username: string, email: string): boolean {
  const user = await supabase
    .from('user')
    .select()
    .or(`email.eq.${email},username.eq.${username}`)
    .maybeSingle()
    if (user.data) return false;
    return true;
}

export async function createUser(userData) {
  const salt = await bcrypt.getSalt(10);
  const hash = await bcrypt.hash(userData.password, salt);
  const userId = randomUUID();
  const refreshToken = randomUUID();
  const newUser = { ...userData, userId, refreshToken };
  const { user, error }= await supabase.from('user').insert([
    newUser 
  ]);
  if (error) {
    return false;
  }

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