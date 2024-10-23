
const form = document.getElementById('opiniao-form');

form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const opiniao = document.getElementById('opiniao').value;
            const pergunta = document.getElementById('pergunta').value;
            try {
                const response = await fetch('https://api.sheetmonkey.io/form/gf9JSRcunhG6MXadKAEsdk', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        opiniao: opiniao,
                        pergunta: pergunta
                    }),
                });

                if (response.ok) {
                    document.getElementById('mensagem-sucesso').style.display = 'block';
                    form.reset();
                } else {
                    alert('Ocorreu um erro ao enviar sua opinião.');
                }
            } catch (error) {
                alert('Erro de conexão, tente novamente.');
            }
        });
