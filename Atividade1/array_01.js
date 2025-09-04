 import PromptSync from "prompt-sync";
  const prompt = PromptSync()


  let array_1 = []
  let array_par =[]
  let array_impar=[]

   for( let i = 0;i<5;i++){
    
    array_1.push (Number (prompt ("Digite Números: ")))

    if(array_1[i] % 2 ===0){
        array_par.push(array_1[i])        
    }else{
        array_impar.push( array_1[i])

    }

   }
   
   console.log("Vetor de entrada: ",array_1)
   console.log("Vetor de Par: ",array_par)
   console.log("Vetor de Ímpar: ",array_impar)

  