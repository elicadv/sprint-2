import bd from '../database/bd.js'

export default class Dica{
    constructor(dica){
        this.dica = dica
        this.dataCriacao = new Date()
    }

    // metodo para insercao da tarefa no banco de dados
    inserirDica = (dica)=>{
        bd.dica.push(dica)
    }

    // metodo para pegar todas tarefas do banco de dados
    pegarDica = ()=>{
        return bd.dica
    }

}