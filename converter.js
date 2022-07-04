/**
 * @param {number} Input Number to be translated to it's abbreviation
 * @returns {string} string
 */

export function numAbbrev(Input){
    if (typeof Input !== 'number') throw new TypeError(`Expected a number but received ${typeof Input} instead`)

    var NumToString = Input.toString();
    const CheckForDecimal = NumToString.includes('.');
    const LengthOfNumber = CheckForDecimal ? NumToString.split('.')[0].length : NumToString.length;

    if (LengthOfNumber <= 3 || LengthOfNumber >= 16) throw new RangeError(`Must be within range of 1k to 999tn`);

    const Num = CheckForDecimal ? Math.round(parseFloat( Input )) : Input;

    const thousands = Math.pow(10,3);
    const millions = Math.pow(thousands,2);
    const billions = Math.pow(thousands,3);
    const trillions = Math.pow(thousands,4);

    var arr = []; 

    if (LengthOfNumber > 3 && LengthOfNumber < 7) arr.push( (Num / thousands), 'k' );
    if (LengthOfNumber > 6 && LengthOfNumber < 10) arr.push( (Num / millions), 'm' );
    if (LengthOfNumber > 9 && LengthOfNumber < 13) arr.push( (Num / billions), 'bn' );
    if (LengthOfNumber > 12 && LengthOfNumber < 16) arr.push( (Num / trillions), 'tn' );

    NumToString = arr[0].toString();

    if (NumToString.includes('.')){
        arr[0] = parseFloat(NumToString = arr[0].toFixed(1));
        if (NumToString.split('.')[1].startsWith(0)) arr[0] = Math.floor(arr[0]);
    }

    return arr.join('');
}