export class Funcionario{
    constructor(){
        this._nome;
        this._salario;
        this._cpf;

        this._bonificacao = 1;
    }

    get senha(){
        return this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}