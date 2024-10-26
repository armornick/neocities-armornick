
class RegexTester {
    
    constructor() {
        this._regex = null;
        this.$regexSrc   = document.querySelector('[name="regex-src"]');
        this.$regexFlags = document.querySelector('[name="regex-flags"]');
        this.$inputSrc   = document.querySelector('[name="input-src"]');
        this.$compilationStatus = document.querySelector('[data-regex-compiled]');
        this.$output = document.querySelector('#exec-output');
        this.$groupsOutput = document.querySelector('#groups-output');
        this.bindEvents();
    }
    
    bindEvents() {
        const handler = e => {
            this.updateRegex();
        };
        this.$regexSrc.addEventListener('input', handler);
        this.$regexFlags.addEventListener('input', handler);
        
        this.$inputSrc.addEventListener('input', e => {
            this.applyRegexOnInput();
        });
    }
    
    updateRegex() {
        try {
            const src = this.$regexSrc.value || '';
            const flags = this.$regexFlags.value || '';
            
            this._regex = new RegExp(src, flags);

            this.$compilationStatus.textContent = '✔️';
            this.$compilationStatus.setAttribute('aria-label', 'regular expression compiled');
            
            this.applyRegexOnInput();
        } catch (e) {
            console.log(e);
            this.$compilationStatus.textContent = '❌';
            this.$compilationStatus.setAttribute('aria-label', 'regular expression not compiled');
        }
    }
    
    applyRegexOnInput() {
        if (this._regex instanceof RegExp) {
            const input = this.$inputSrc.value || '';
            const result = this._regex.exec(input);
            
            this.$output.textContent = JSON.stringify(result, null, 2);
            this.$groupsOutput.textContent = JSON.stringify(result.groups, null, 2);
        }
    }
    
}

// bootstrap application
new RegexTester();

/* -----------------------------------------------------------------

BSD Zero Clause License

Copyright (C) 2024 by armornick

Permission to use, copy, modify, and/or distribute this software for any 
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY 
SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER 
RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, 
NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE 
USE OR PERFORMANCE OF THIS SOFTWARE.

 ------------------------------------------------------------------- */