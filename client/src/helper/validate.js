
/*Validate userName */

import toast from "react-hot-toast";
/*userName Validate */
export async function userNameValidate(values) {
    const errors = userNameVerify({}, values);
    return errors;
}
/*Password Vaildate */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}
/*RESET password validate */
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);
    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("password not match...!");
    }
    return errors;
}
/*Validate register form */
export async function registerValidation(values) {
    const errors = userNameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;

}
/*-------------------------------------------------------------------------------------------- */


/*Verify password */
function passwordVerify(errors = {}, values) {
    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = toast.error("Password Required...!");
    }
    else if (values.password.includes(" ")) {
        errors.password = toast.error("Wrong Password...!")
    }
    else if (values.password.length < 4) {
        errors.password = toast.error("password must be more than 4 characters long..!")
    }
    else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have special character")
    }
    return errors;
}
/*Verify userName */
function userNameVerify(errors = {}, values) {
    if (!values.userName) {
        errors.userName = toast.error("UserName Required...!");

    }
    else if (values.userName.includes(" ")) {
        errors.userName = toast.error("Invalid UserName....!")
    }
    return errors

}
/*Function Email Verify */
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email Required...!");
    }
    else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email...!");

    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid Email Address...!");
    }
    return error;
}