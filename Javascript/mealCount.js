/**
 * Function that takes in an object and counts the attributes using a foreach loop.
 */

let potLuck = {
    sam: 'pho',
    michael: 'soup',
    diana: 'pinapple-turnover',
    franklin: 'chili',
    timothy: 'chips',
    dylan: 'sandwiches',
    toni: 'beer',
    sandra: 'salad'
}

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    console.log(length);
};

ObjectLength(potLuck);
