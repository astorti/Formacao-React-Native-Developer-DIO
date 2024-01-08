
let levelSecurity: string = ''
let weakPass: string = "abcdefghijklmnopqrstuvxz"
let normalPass: string = "abcdefghijklmnopqrstuvxz0123456789"
let strongPass: string = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ!@#$.0123456789"
let passwordLenght: number = 0
let characters: string = ''

export default function generatePass() {
    let password: string = ''

    if (levelSecurity === 'weak') {
        characters = weakPass         
        passwordLenght = 4
    } else if (levelSecurity === 'normal'){
        characters = normalPass         
        passwordLenght = 6
    } else {
        characters = strongPass         
        passwordLenght = 8
    }
    
    for (let index = 0; index < passwordLenght; index++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}

export const handleSelectLevelSecurity = (level: string) => {
    levelSecurity = level
}