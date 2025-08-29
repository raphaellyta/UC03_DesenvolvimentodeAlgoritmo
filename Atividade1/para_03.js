import PromptSync from "prompt-sync"
const prompt = PromptSync()


let numero = (Number("Digite um número Inteiro: "))

let contador_divisores = 0

for(let i = 1; i <= numero; i++) {
    if(numero % i===0)
        console.log(i)
      contador_divisores ++

}

if(contador ===2){
    console.log(`O número ${numero} é Primo`)

}else{
    console.log(`O numero ${numero} não é Primo`)
}

