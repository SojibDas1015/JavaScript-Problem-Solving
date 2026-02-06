function electionResult(ar) {
    if (Array.isArray(ar) === true) {
        let mango = 0;
        let banana = 0;
        for (const a of ar) {
            if (a === 'mango') {
                mango++;
            }
            else if (a === 'banana') {
                banana++;
            }

        }
        if (mango > banana) {
            return 'Mango';
        }
        else if (mango === banana) {
            return 'Draw';
        }
        else {
            return 'Banana';
        }
    }
    else {
        console.log('Invalid');
    }
}
const ar = ['mango', 'BananA', 'na vote', 'na vote'];
const result = electionResult(ar);
console.log(result);