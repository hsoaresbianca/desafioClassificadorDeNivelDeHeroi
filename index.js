const inicioTexto = "O Herói de nome "
const fimTexto = " está no nível: "

let nomeHeroi = "Batman"; // criar html para que o usuário posso modificar este nome
let xpHeroi = 3800; // criar html para que o usuário possa modificar este valor

//Se XP for menor do que 1.000 = Ferro
if (xpHeroi <= 1000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Ferro");
}
//Se XP for entre 1.001 e 2.000 = Bronze
else if (xpHeroi > 1000 && xpHeroi <= 2000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Bronze");
}
//Se XP for entre 2.001 e 5.000 = Prata
else if (xpHeroi > 2000 && xpHeroi <= 5000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Prata");
}
//Se XP for entre 5.001 e 6.000 = Ouro
else if (xpHeroi > 5000 && xpHeroi <= 6000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Ouro");
}
//Se XP for entre 6.001 e 7.000 = Platina
else if (xpHeroi > 6000 && xpHeroi <= 7000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Platina");
}
//Se XP for entre 7.001 e 8.000 = Ascendente
else if (xpHeroi > 7000 && xpHeroi <= 8000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Ascendente");
}
//Se XP for entre 9.001 e 10.000= Imortal
else if (xpHeroi > 9000 && xpHeroi <= 10000){
    console.log(inicioTexto + nomeHeroi + fimTexto + "Imortal");
}
//Se XP for maior ou igual a 10.001 = Radiante
else {
    console.log(inicioTexto + nomeHeroi + fimTexto + "Radiante");
}