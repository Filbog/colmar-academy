function change(string) {
    function change(string) {
        const alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();
        string = string.toLowerCase().split('');
        let binaryArray = [];
        alphabet.forEach(el => {
            if (string.indexOf(el) != -1) {
                binaryArray.push('1')
            } else { binaryArray.push('0') }
        });
        console.log(binaryArray.join(''))
        return binaryArray
    }
}