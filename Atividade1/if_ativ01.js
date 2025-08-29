import PromptSync from "prompt-sync"
const pront = PromptSync()

let velocidade = Number( pront('Digite a velocidade permitida na via: '))
let velocidade_media = Number(pront ('Digite a velocidade media do Veiculo: '))

let valor_max = (velocidade*0.10) +velocidade

if(velocidade_media > velocidade && velocidade_media<valor_max){

    console.log(`Atenção: acima do permitido, multa leve!`)
}else if(velocidade_media>valor_max){

    console.log(`Atenção: acima do permitido, multa grave!`)

}else console.log(`Velocidade dentro do limite`)