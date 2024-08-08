let idadeMinima = 7;
let idadeAluno = 10;
let primeiroAno = 7;
let segundoAno = 8;
let terceiroAno = 9;

if(idadeAluno> idadeMinima){
    console.log("Matricula realizada com Sucesso")
} else{
    console.log("Desculpe Você ainda não pode se matricular")
}

if (idadeAluno> primeiroAno && idadeAluno < terceiroAno){
    console.log("Você está no segundo ano ")
} else if (idadeAluno == primeiroAno){
    console.log("Você está no primeiro ano")
} else if(idadeAluno == terceiroAno){
    console.log("Você está no terceiro ano")
}