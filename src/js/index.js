/*

    OBJETIVO - quando clicarmos na aba temos que mostrar
    o conteudo da aba que foi clicada peli usuário e 
    esconder o conteudo da aba anterior

    - Passo 1 - dar um jeito de pegar os elementos que 
    representam as abas no HTML.

    - Passo 2 - dar um jeito de identificar o clique no 
    elemento da aba

    - Passo 3 - quando o usuário clicar, desmarcar a aba 
    selecionada

    - Passo 4 - marcar a aba clicada como selecionado

    - passo 5 - esconder o conteúdo anterior
    
    - passo 6 - mostrar o conteúdo da aba selecionada

*/

// Passo 1 - dar um jeito de pegar os elementos que representamas as abas no HTML
const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
    // Passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {
        console.log("selecionado")
        if(aba.classList.contains("selecionado")){
            return;
        }
        
        // - Passo 3 - quando o usuário clicar, desmarcar a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")

        // - Passo 4 - marcar a aba clicada como selecionado
        aba.classList.add("selecionado")

        // - passo 5 - esconder o conteúdo anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado")

        // - passo 6 - mostrar o conteúdo da aba selecionada
        const idDoElementoDeInformacoesDaAba = 
        `informacao-${aba.id}`
        
        const informacaoASerMostrada = document.
        getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    })
})