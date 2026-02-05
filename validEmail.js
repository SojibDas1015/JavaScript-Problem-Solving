function validEmail(email) {
    if (typeof email === 'string') {
        let flag = true;
        for (const emai of email) {
            if (emai === '-' || emai === '_' || emai === '+' || emai === ' ') {
                flag = false;
            }
        }
        let com = '';
        for (let i = email.length - 1; i >= email.length - 4; i--) {
            com = email[i] + com;
        }
        if (com !== '.com') {
            flag = false;
        }
        if (email.slice(0, 1) === '@') {
            flag = false;
        }
        return flag;
    }
    else
    {
        return 'Invalid'
    }
}
const result = validEmail("sojibdas@gmail.com");
console.log(result);

