document.addEventListener('DOMContentLoaded', function() {
    const registrarBtn = document.getElementById('registrar');
    const nomeTextarea = document.getElementById('nome');
    const registros = [];

    registrarBtn.addEventListener('click', function() {
        const nome = nomeTextarea.value.trim();
        if (nome) {
            registros.push(nome);
            alert('Nome registrado: ' + nome);
            nomeTextarea.value = '';
            // Você pode salvar registros em localStorage se quiser persistência
            // localStorage.setItem('registros', JSON.stringify(registros));
        } else {
            alert('Por favor, digite um nome.');
        }
    });
});