// Fazer as brisa td 

const alunos3C =[ 
{
    nome: "John",
    nota: 5.5
}, 
{ 
    nome: "Wesley",
    nota: 8.0   
},
{
    nome: "Azevedo",
    nota: 10.0
}
]

const alunos3A =[ 
{
    nome: "Gustavo",
    nota: 7.0
},
{
    nome: "Beatriz",
    nota: 10.0
},
{
    nome: "Cezika",
    nota: 2.0
}
]

function calcularMedia(alunoss){
    const media = (alunoss[0].nota + alunoss[1].nota + alunoss[2].nota) / 3
    return media
}

const media1 = calcularMedia(alunos3A)
const media2 = calcularMedia(alunos3C)

function aparecerMensagem(media, Turma){
// Se a media for maior que 5 aparecer parabéns    
    if (media > 5) {
        console.log(`A média da turma ${Turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A turma ${Turma}Foi abaixo da média`)
    }
}
aparecerMensagem(media1, "TurmaA")
aparecerMensagem(media2, "TurmaB")