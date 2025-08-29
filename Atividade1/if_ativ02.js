import PromptSync from "prompt-sync"
const pront = PromptSync()

let consumoKWH = Number (pront(`Digite o consumo em Kwh :`))
let  atrasado=  (pront(`Informe sua conta estar em atraso? S/N:`))
let valor
let valor_atrasado

if(consumoKWH<=100 ){

    valor =consumoKWH*1.20

}else if(consumoKWH>100){


    valor=consumoKWH*1.70

} 
if(atrasado.toUpperCase()==='S'){
    valor_atrasado= (valor*0.05)+valor
    console.log("O valor de sua conta sera: ",valor_atrasado)

}else {
    console.log("A conta esta em dia! PARABÉNS ")
    console.log("O valor de sua conta sera: ",valor)
}