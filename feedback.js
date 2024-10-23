
const form = document.getElementById('opiniao-form');

form.addEventListener('submit', async function (e) {
            e.preventDefault();

         const formData = {
        opiniao: document.getElementById('opiniao').value,
        pergunta: document.getElementById('pergunta').value,
    };

    fetch('https://api.sheetmonkey.io/form/ig9CUs7w52dHRERb9qMuo3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
});

