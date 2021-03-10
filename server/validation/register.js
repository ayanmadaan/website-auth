const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "This is a required field";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "This is a required field";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "This is a required field";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};