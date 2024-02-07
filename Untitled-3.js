// controle de notas de alunos

var nota1 = 7;
var nota2 = 5;

// verificando se o aluno passou

var mediaParaPassar = 6;
var alunoPassou = (nota1 + nota2) / 2 >= mediaParaPassar
var alunoReprovou = (nota1 + nota2) / 2 < mediaParaPassar

//exibindo resultado

console.log ("Nota 1:", nota1);
console.log ("Nota 2:", nota2);
console.log ("Nota para passar:", mediaParaPassar);

if (alunoPassou) {
    console.log ("Aluno passou!")  ;
} else if (alunoReprovou) {
    console.log ("Aluno Reprovou.");
} else {
    console.log ("Aluno em recuperação.");
}