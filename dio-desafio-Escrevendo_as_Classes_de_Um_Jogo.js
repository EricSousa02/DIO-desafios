class heroi{
  constructor(nome,idade,tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo

  }

  atacar(){
    let ataque;

    if (this.tipo === "mago") {
        ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
        ataque = "usou espada";
    } else if (this.tipo === "monge") {
        ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
        ataque = "usou shuriken";
    } else {
        ataque = "personagem desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

let personagem = new heroi("carlos",30,"mago")
personagem.atacar()
