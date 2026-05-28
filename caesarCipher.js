export default function caesarCipher(text, key) {


    return text
        .split("")
        .map((letter) => {
            const currentCode = letter.charCodeAt(0);
            let shiftedCode = currentCode + key;

            if (currentCode >= 65 && currentCode <= 90) {
                if (shiftedCode > 90) {
                    shiftedCode = ((shiftedCode - 65) % 26) + 65;
                }
                return String.fromCharCode(shiftedCode)
            }

            else if (currentCode >= 97 && currentCode <= 122) {
                if (shiftedCode > 122) {
                    shiftedCode = ((shiftedCode - 97) % 26) + 97;
                }
                return String.fromCharCode(shiftedCode)
            }
            
            else {
                return letter;
            }
        })
        .join("")
}