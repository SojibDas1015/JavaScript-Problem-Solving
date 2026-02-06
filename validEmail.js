function validEmail(email) {
    if (typeof email === 'string') {
        let flag = true;
        if (email.slice(0, 1) === '@') {
            flag = false;
        }
        for (const emai of email) {
            if (emai === '-' || emai === '_' || emai === '+' || emai === ' ') {
                return flag = false;
            }
        }
        for (let i = Math.floor(email.length/2-4); i <= Math.ceil(email.length/2+2); i++) {
            if(email[i] === '@')
            {
                flag = true;
                break;
            }
            else
            {
                flag = false;
                continue;
            }
        }
        let com = '';
        for (let i = email.length - 1; i >= email.length - 4; i--) {
            com = email[i] + com;
        }
        if (com !== '.com') {
            flag = false;
        }
        return flag;
    }
    else {
        return 'Invalid'
    }
}
const result = validEmail("sojibdas@gmail.com");
console.log(result);

