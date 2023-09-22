var v = 46
var d = 12
var saldoVitorias = v - d
var nivel;


function calculadora(vitorias , derrotas) {

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;


}

calculadora(v , d)
nivel && saldoVitorias ? console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`) : console.log("") 

