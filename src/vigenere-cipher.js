class VigenereCipheringMachine {
    constructor(type = true){
        this.type = type

    }
    encrypt(message, key) {
        if (!message || !key) throw new Error('Error');
        let result = [];
        let symbol_code;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let mas_of_mes = this.rowToMas(message);
        let all_key = this.longkey(message, key);
        for (let i = 0; i < all_key.length; i++)
        {
            if (typeof all_key[i] == 'number')
            {
                
                symbol_code = all_key[i] + mas_of_mes[i];
                
                if (symbol_code >= 26) symbol_code = symbol_code - 26;

                result.push(String.fromCodePoint(symbol_code + 65));
            }
            else 
            {
                result.push(all_key[i]);
            }
        }
        return (this.type) ? result.join('') : result.reverse().join('') 
        
        
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error('Error');
        let result = [];
        let symbol_code;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let mas_of_mes = this.rowToMas(message);
        let all_key = this.longkey(message, key);
        for (let i = 0; i < all_key.length; i++)
        {
            if (typeof all_key[i] == 'number')
            {
                
                symbol_code =  mas_of_mes[i] - all_key[i];
                
                if (symbol_code < 0) symbol_code =  26 - Math.abs( symbol_code);

                result.push(String.fromCodePoint(symbol_code + 65));
            }
            else 
            {
                result.push(all_key[i]);
            }
        }
        return (this.type) ? result.join('') : result.reverse().join('') 
    }

    testSymbol(symb){
        let regex = /^[A-Z]$/i;
        return regex.test(symb)

    }

    rowToMas(message){
        let mas_of_number_symbol = []
        for(let i = 0; i < message.length; i++)
        {
            if (this.testSymbol(message[i]))
            {
                mas_of_number_symbol.push(message[i].codePointAt() - 65)
            }
            else
            {
                mas_of_number_symbol.push(message[i])
            }
        }
        return mas_of_number_symbol
    }

    longkey(message, key)
    {
        let index = 0
        let longkey = []
        for (let i = 0; i < message.length; i++)
        {
            if (!this.testSymbol(message[i]))
            {
                longkey.push(message[i]);
            }
            else
            {
                longkey.push(key[index]);
                index++;
            }
            if (index > key.length - 1) index = 0;
        }
        return this.rowToMas(longkey);
    }
}

module.exports = VigenereCipheringMachine;
