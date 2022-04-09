//Gerar um número aleatório entre 1 e 100
let numeroAleatorio= Math.floor(Math.random() * 100) + 1

//Gravar o número do turno que o jogador está. Iniciar em 1
//Dar ao jogador uma forma de adivinhar o número
let enviarpalpite= document.querySelector("#enviarpalpite")
let turno= 1

function conferirPalpite() {
   
   let palpite= document.querySelector("#palpite")
   let palpiteAnterior= Number(palpite.value)
   //Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
   
   pTurnos.innerHTML+= ` ${palpiteAnterior}`
   /* Depois, verificar se o palpite está correto.
   
      !!!Se estiver correto:!!!
         1º Escrever mensagem de parabéns.
         2º Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
         3º Mostrar controle que permita ao jogador reiniciar o jogo.
    
      !!!Se o palpite estiver errado e o jogador ainda tem turnos sobrando:!!!
         1º Dizer ao jogador que ele está errado.
         2º Permitir que ele insira outra resposta.
         3º Incrementar o número do turno em 1.
    */
   let rPalpite= document.querySelector("#rPalpite")
   let playAgain= document.querySelector("#playAgain")
   
   if (Number(palpite.value) === numeroAleatorio) {
      rPalpite.innerText= "Parabéns! você ganhou!"
      rPalpite.style.background= "green"
      palpite.disabled= true
      enviarpalpite.disabled= true
      playAgain.hidden= false
   } else {
      rPalpite.innerText= "Está errado!"
      palpite.disabled= false
      turno++
         if (Number(palpite.value) < numeroAleatorio) {
            //seu numero esta baixo
            rPalpite.innerText+= " seu número esta baixo!"
         } else {
            //seu numero esta alto
            rPalpite.innerText+= " seu número esta alto"
         }
   }
   
   /* !!!Se o jogador está errado mas não tem turnos sobrando:!!!
      1º Dizer ao jogador que o jogo acabou.
      2º Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
      3º Mostrar controle que permita ao jogador reiniciar o jogo.
   */
   if (turno > 10) {
      rPalpite.innerText= "Fim de jogo!"
      rPalpite.style.background= "red"
      palpite.disabled= true
      document.appendChild(tryAgain)
   }
   
   //Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.
   playAgain.addEventListener("click", () => {
      numeroAleatorio= ""
      palpite.disabled= false
      palpite.value= ""
      enviarpalpite.disabled= false
      pTurnos.innerHTML= ""
      rPalpite.innerText= ""
      playAgain.hidden= true
      turno= 1
   })
}