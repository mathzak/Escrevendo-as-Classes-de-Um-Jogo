// É declarado o vetor de heróis em formato JSON
const heroisData = [
    { "nome": "Gandalf", "idade": 82, "tipo": "mago", "ataque": "usou magia" },
    { "nome": "Aquiles", "idade": 26, "tipo": "guerreiro", "ataque": "usou espada" },
    { "nome": "Wong", "idade": 45, "tipo": "monge", "ataque": "usou artes marciais" },
    { "nome": "Itachi", "idade": 21, "tipo": "ninja", "ataque": "usou shuriken" }
];

//É criado a classe com os construtores solicitados
class Heroi {
    constructor({ nome, idade, tipo, ataque }) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

// É criado o método atacar com uma estrutura de decisão
    atacar() {
        let mensagemAtaque;
        switch (this.tipo) {
            case "mago":
                mensagemAtaque = "usou magia";
                break;
            case "guerreiro":
                mensagemAtaque = "usou espada";
                break;
            case "monge":
                mensagemAtaque = "usou artes marciais";
                break;
            case "ninja":
                mensagemAtaque = "usou shuriken";
                break;
            default:
                mensagemAtaque = "atacou";
                break;
        }
   
//Após ser satisfeita a condição é exibida a mensagem com o tipo do heroi e o ataque utilizado        
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${mensagemAtaque}`);
    }
}

// são criadas instâncias de heróis a partir do json heroisData
const herois = heroisData.map(heroData => new Heroi(heroData));

// Percorre os elementos do vetor heróis e faz a chamada do método atacar para cada um deles
for (const heroi of herois) {
    heroi.atacar();
}
