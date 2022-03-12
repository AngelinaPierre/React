export default class Cliente{
    // criação das propriedadades
    #id: string
    #nome: string
    #idade: number

    // criação do objeto usando constructor
    constructor(nome:string, idade:number, id:string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    get id(){
        return this.#id
    }
}