// Criar um programa que calcula média
// das notas entre os alunos e enviar
// mensagem do cálculo da média. 

const aluno01 = "John";
const nota1 = 2

const aluno02 = "Azevedo";
const nota2 = 10

const aluno03 = "Wesley";
const nota3 = 1


const media = (nota1 + nota2 + nota3)/3


//Se a média for maior que 5, parabenizar a turma.

if (media > 5) {
    console.log(`Sua média é ${media}. Parabéns lindao`)
} else {
    console.log("Sua média é menor que 5")
}