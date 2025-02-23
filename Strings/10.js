function generateId(length) {
    let str = ""
    for(let i = 0; i< length; i++)
    {let flag1 = Math.random()
    if (flag1 < 0.5) {
        str += String.fromCharCode(Math.floor(Math.random()*10) + 48)
    } else {
        let flag2 = Math.random()
        if(flag2 < 0.5) {
            str += String.fromCharCode(Math.floor(Math.random()*26) + 97)
        } else {
            str += String.fromCharCode(Math.floor(Math.random()*26) + 65)
        }
    }}
    return str
}

module.exports = generateId