export default function caesarCipher(text, key) {


    return text
        .split("")
        .map((letter) => {
            const currentCode = letter.charCodeAt(0);

            if (currentCode >= 65 && currentCode <= 90) {
            
                return String.fromCharCode(currentCode + key)
            }

            else if (currentCode >= 97 && currentCode <= 122) {
                return String.fromCharCode(currentCode + key)
            }
            
            else {
                return letter;
            }
        })
        .join("")
}