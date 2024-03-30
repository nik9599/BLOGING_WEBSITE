// user.js
import bcrypt from "bcrypt";
import { validate } from 'email-validator';

class UserData {
  constructor(username, email, name, password) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  checkPassword() {
    // Check for at least one character
    const hasCharacter = /[a-zA-Z]/.test(this.password);

    // Check for at least one number
    const hasNumber = /\d/.test(this.password);

    // Check for at least one special character
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      this.password
    );

    // Return true if all conditions are met
    return hasCharacter && hasNumber && hasSpecialChar;
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getUsername() {
    return this.username;
  }

  emailValidator() {
    return validate(this.email);
  }


}

export default UserData;
