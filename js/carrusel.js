document.querySelectorAll('.fotografo-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const carrusel = document.getElementById('carrusel');
        const carruselInner = document.getElementById('carrusel-inner');
        
        const fotografoFotos = [
            ['Dejanira_ft01.jpg', 'Dejanira_ft02.jpg', 'Dejanira_ft03.jpg', 'Dejanira_ft04.jpg', 'Dejanira_ft05.jpg'],
            ['Mariana_ft01.jpg', 'Mariana_ft02.jpg', 'Mariana_ft03.jpg', 'Mariana_ft04.jpg', 'Mariana_ft05.jpg'],
            ['Keysi_ft01.jpg', 'Keysi_ft02.jpg', 'Keysi_ft03.jpg', 'Keysi_ft04.jpg', 'Keysi_ft05.jpg'],
            ['Ana_ft01.jpg', 'Ana_ft02.jpg', 'Ana_ft03.jpg', 'Ana_ft04.jpg', 'Ana_ft05.jpg'],
            ['Solange_ft01.jpg', 'Solange_ft02.jpg', 'Solange_ft03.jpg', 'Solange_ft04.jpg', 'Solange_ft05.jpg']
        ];

        carruselInner.innerHTML = '';
        fotografoFotos[index].forEach(foto => {
            const imgElement = document.createElement('img');
            imgElement.src = `img/fotos/${foto}`;
            imgElement.addEventListener('click', () => {
                window.location.href = `img/fotos/${foto}`;
            });
            carruselInner.appendChild(imgElement);
        });

        carrusel.style.display = 'block';
    });
});

document.getElementById('carrusel').addEventListener('click', (e) => {
    if (e.target === document.getElementById('carrusel')) {
        document.getElementById('carrusel').style.display = 'none';
    }
});
