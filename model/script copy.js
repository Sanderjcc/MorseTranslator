const enterButton = document.querySelector('input#enterButton')
enterButton.addEventListener('click', send)

const morseAlphaNum = {a:'.-', b:'-...', c:'-.-.', d:'-..', e:'.', f:'..-.' , g:'--.', h:'....', i:'..', j:'.---', k:'-.-' , l:'.-..' , m:'--', n:'-.', o:'---', p:'.--.', q:'--.-', r:'.-.', s:'...', t:'-', u:'..-', v:'...-', w:'.--', x:'-..-', y:'-.--', z:'--..', 0: '-----', 1:'.----', 2:'..---', 3:'...--', 4:'....-', 5:'.....', 6:'-....', 7:'--...', 8:'---..', 9:'----.'}
const outputText = document.createElement('p')
const output = document.querySelector('div#output')

function isLetter(string){
    if(string.value.trim()[0] == '-' || string.value.trim()[0] == '.'){
        return false
    } else {
        return true
    }
}

function send() {
    const textCode = document.querySelector('input#textCode')
    outputText.innerText = ''

    if (textCode.value.length == 0){
        alert('ERROR! - Empty fild')

    } else {
        if (isLetter(textCode)){ // if the input is a Letter
            for (const index in textCode.value){
                for (const key in morseAlphaNum) {
                    if (textCode.value[index].toLowerCase() == key){
                        outputText.innerText += ` ${morseAlphaNum[key]}`
                        break

                    } else if (textCode.value[index] == ' '){
                        outputText.innerText += ' / '
                        break
                    }
                }
            }

        }else{ // if the input is a code
            let letter = String()
            let word = []
            console.log('após declarar' + word)
            for(const index in textCode.value){
                if (textCode.value[index] != ' '){
                    letter += textCode.value[index]
                }
                if (textCode.value[index] == ' ' || index == textCode.value.length -1){
                    word.push(letter)
                    letter = ''
                } 
            }

            for (const index in word){
                for (const key in morseAlphaNum){
                    if (word[index] == morseAlphaNum[key]){
                        outputText.innerText += key
                        break

                    } else if (word[index] == '/'){
                        outputText.innerText += ' '
                        break
                    }
                }
            }
            console.log('antes de mostrar' + word)
            console.log(outputText.innerText)  
        }   
           
        if (outputText.innerText.length == 0){
            alert('unidentified value')
            textCode.value = ''
            textCode.focus()

        } else {
            output.appendChild(outputText)  
            textCode.value = ''
            textCode.focus()
        }
    }
}
