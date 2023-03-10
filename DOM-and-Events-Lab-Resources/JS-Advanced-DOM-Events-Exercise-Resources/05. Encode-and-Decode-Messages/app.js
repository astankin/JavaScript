function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let decodeBtn = document.querySelectorAll('button')[1];
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', encode);

    let textAreas = document.querySelectorAll('textarea');

    function encode(e) {
        let textEncode = textAreas[0].value;
        let textDecode = textAreas[1].value;
        let result = '';
        if (e.currentTarget.textContent.includes("Encode")) {
            for (const char of textEncode) {
                result += String.fromCharCode(char.charCodeAt(0) + 1);
            }
    
        }else if (e.currentTarget.textContent.includes("Decode")) {
            for (const char of textDecode) {
                result += String.fromCharCode(char.charCodeAt(0) - 1);
            }
        }
        textAreas[1].value = result;
        textAreas[0].value = '';

    }

}