import PromptSync from "prompt-sync";
const prompt = PromptSync();

let solict = Number(prompt("Digite quantos termos você deseja visualizar? "))

let anterior = 0;
let atual = 1;

for(let i=1 ; i <=solict;i++ ){
    console.log(`${anterior}`)
    let proximo = anterior + atual
    anterior=atual
    atual=proximo

    
  
}


