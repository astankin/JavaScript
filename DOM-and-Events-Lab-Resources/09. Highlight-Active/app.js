function focused() {
    function focused() {
        let inputElements = document.querySelectorAll('div div input');
        for (const elem of inputElements) {
            elem.addEventListener('focus', (e) => {
                e.currentTarget.parentElement.classList.add('focused');
            });
            
            elem.addEventListener('blur', (e) => {
                e.currentTarget.parentElement.classList.remove('focused')
            });
        }
    }
}

let sortedDict = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]));