function enviarPedido() {
    const numero = "5511993906604";
    const itens = document.querySelectorAll('input[name="item"]:checked');

    if (itens.length === 0) {
        alert("Veja se você selecionou os produtos.");
        return;
    }

    let mensagem = "Olá, gostaria de pedir:\n";

    itens.forEach((item) => {
        mensagem += `- ${item.value}\n`;
    });

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
