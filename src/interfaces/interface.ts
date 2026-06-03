export interface FormInputInterface {
  name: string;
  age: number;
  email: string;
  gender: 'male' | 'female';
  terms: string;
}

export interface SubmittedFormData {
  name: string;
  age: number;
  email: string;
  gender: string;
}
