let block = document.getElementById('text-container');
document.getElementById('replace').addEventListener('click', () => {
        block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
        });