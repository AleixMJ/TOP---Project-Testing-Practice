export default function caesarCipher(text, key) {


    return text
        .split("")
        .map((letter) => {
            const currentCode = letter.charCodeAt(0);
            return String.fromCharCode(currentCode + key)
        })
        .join("")
}