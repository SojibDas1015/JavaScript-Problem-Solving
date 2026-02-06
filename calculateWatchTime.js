function calculateWatchTime(ar) {
    let totalSec = 0;
    for (const a of ar) {
        if (typeof a === 'number') {
            totalSec = totalSec + a;
        }
        else {
            return 'Invalid'
        }

    }
    let time = {}
    const minite = Math.floor(totalSec / 60);
    const secand = totalSec - minite * 60;
    const hour = Math.floor(minite / 60);
    const miniteF = minite - hour * 60;
    time.hours = hour;
    time.minites = miniteF;
    time.secands = secand;
    return time;

}
const ar = [100, 3800];
const result = calculateWatchTime(ar);
console.log(result);