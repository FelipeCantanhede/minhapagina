/* 
código javascript para meu projeto
autor: Felipe Cantanhede
data: 17/05/2025
*/

//Vamos garantir que não ocorra erro ao carregar a página e que o script só rode depois da página carregada
document.addEventListener('DOMContentLoaded', function(){
    //Vou selecionar meu botão pelo ID que coloquei nele #button1
    const botao = document.getElementById('button1');

    //É necessário adicionar um ouvinte para o clique do botão (button1)
    botao.addEventListener('click', function(){
        //Eis aqui a mensagem a ser exibida quando o botão foi clicado
        alert('Obrigado por visitar minha página, espero que volte em breve');
    });
});