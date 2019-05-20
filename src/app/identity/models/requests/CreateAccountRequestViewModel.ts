import { GenderType } from '../GenderType';

export class CreateAccountRequestViewModel {

  firstName: string;
  lastName: string;
  email: string;
  gender: GenderType;
  password: string;
  passwordConfirmation: string;
}
