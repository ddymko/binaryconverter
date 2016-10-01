(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var modifier;
        var numb, bina, octa, hexa;
        var dec = document.getElementById('dec');
        var bin = document.getElementById('bin');
        var oct = document.getElementById('oct');
        var hex = document.getElementById('hex');

        // Validates the inputs
        dec.addEventListener('keydown', function(e) {
            if (!validateDec(e.keyCode) && !validateBindings(e)) e.preventDefault();
        });

        // Converts the values, clears input boxes otherwise
        dec.addEventListener('keyup', function(e) {
            if (isEmpty(this.value))
                clear();
            else if (!allowTabbing(e)) {
                convert(this.value);
                bin.value = bina;
                oct.value = octa;
                hex.value = hexa;
            }
        });

        // Validates the inputs
        bin.addEventListener('keydown', function(e) {
            if (!validateBin(e.keyCode) && !validateBindings(e)) e.preventDefault();
        });

        // Converts the values, clears input boxes otherwise
        bin.addEventListener('keyup', function(e) {
            if (isEmpty(this.value))
                clear();
            else if (!allowTabbing(e)) {
                convert(this.value);
                dec.value = numb;
                oct.value = octa;
                hex.value = hexa;
            }
        });

        // Validates the inputs
        oct.addEventListener('keydown', function(e) {
            if (!validateOct(e.keyCode) && !validateBindings(e)) e.preventDefault();
        });

        // Converts the values, clears input boxes otherwise
        oct.addEventListener('keyup', function(e) {
            if (isEmpty(this.value))
                clear();
            else if (!allowTabbing(e)) {
                convert(this.value);
                bin.value = bina;
                dec.value = numb;
                hex.value = hexa;
            }
        });

        // Validates the inputs
        hex.addEventListener('keydown', function(e) {
            if (!validateHex(e.keyCode) && !validateBindings(e)) e.preventDefault();
        });

        // Converts the values, clears input boxes otherwise
        hex.addEventListener('keyup', function(e) {
            if (isEmpty(this.value))
                clear();
            else if (!allowTabbing(e)) {
                convert(parseInt(this.value, 16));
                bin.value = bina;
                dec.value = numb;
                oct.value = octa;
            }
        });

        // Power the conversions to the respective format
        function convert(val) {
            numb = new Number(val);
            bina = numb.toString(2);
            octa = numb.toString(8);
            hexa = numb.toString(16).toUpperCase();
        }

        // Checks if the value is empty
        function isEmpty(value) {
            return value === '';
        }

        // Clears out the text boxes when the user deletes an entry
        function clear() {
            dec.value = '';
            bin.value = '';
            hex.value = '';
            oct.value = '';
        }

        // Validates the inputs for decimal boxes
        function validateDec(keyCode) {
            return ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) ? true : false;
        }

        // Validates the inputs for binary boxes
        function validateBin(keyCode) {
            return (keyCode === 48 || keyCode === 49 || keyCode === 96 || keyCode === 97) ? true : false;
        }

        // Validates the inputs for octal boxes
        function validateOct(keyCode) {
            return ((keyCode >= 48 && keyCode <= 55) || (keyCode >= 96 && keyCode <= 103)) ? true : false;
        }

        // Validates the inputs for hexadecimal boxes
        function validateHex(keyCode) {
            return ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || (keyCode >= 65 && keyCode <= 70)) ? true : false;
        }

        // Validates when various bindings are used for ease of use, outlined below
        function validateBindings(ev) {
            if (ev.keyCode === 8) // Backspace key
                return true;
            if (ev.keyCode === 9) // Tab key
                return true;
            if (ev.keyCode === 46) // Delete key
                return true;
            if (ev.keyCode === 65 && ev.metaKey === true) // Cmd + A
                return true;
            if (ev.keyCode === 65 && ev.ctrlKey === true) // Ctrl + A
                return true;
            if (ev.keyCode >= 37 && ev.keyCode <= 40) // Arrow keys
                return true;
        }

        // Allows for the use to tab and shift tab through the results
        function allowTabbing(ev) {
            console.log(ev.keyCode + ', Shift:' + ev.shiftKey);
            if (ev.keyCode === 9 || ev.shiftKey && ev.keyCode === 9 || ev.keyCode === 16)
                return true;
        }
    });
})();
