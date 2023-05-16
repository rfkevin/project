export function loginValidation(values) {
    const errors = {};

    // verifie if email is valide and have a value
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //verifie password

    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 8) {
        errors.password = "password must be at least 8 character"
    }

    return errors
}

//re
export async function registerValidation(values) {
    const errors = {};
    // email validation
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    // password validation
    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 8) {
        errors.password = "password must be at least 8 character"
    }

    // cpassword validation

    if (!values.cpassword) {
        errors.cpassword = "Required"
    } else if (values.cpassword !== values.password) {
        errors.cpassword = "password dont match"
    }

    if (!values.userName) {
        errors.userName = "Required"
    } else if (values.userName.length < 5) {
        errors.userName = "userName must be at least 5 character"
    }

    if (!values.fullName) {
        errors.fullName = "Required"
    } else if (values.fullName.length < 5) {
        errors.fullName = "fullName must be at least 8 character"
    }

    return errors




}