function isBestFriend(friend1, friend2){
    // console.log(typeof friend1)
    if(typeof friend1 === 'object' && typeof friend2 === 'object' && Array.isArray(friend1) === false && Array.isArray(friend2) === false)
    {
        if(friend1.roll === friend2.bestFriend && friend2.roll === friend1.bestFriend)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        console.log('Invalid');
    }
}
const friend1 = {name: 'hashem', roll: 1, bestFriend: 1};
const friend2 = {name: 'kashem', roll: 1, bestFriend: 1};
const result = isBestFriend(friend1, friend2);
console.log(result);