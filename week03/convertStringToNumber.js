function convertStringToNumber(string,x = 10){
    let code = string.split("")
    let number = 0
    for(let i=0;i<code.length;i++){
        number = number * x
        number += code[i].codePointAt(0) - '0'.codePointAt(0)
    }
    return number
}
convertStringToNumber('100')