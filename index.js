import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("1226");
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("1233");

const cliente = new Cliente("Gabryel", 1595365329, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1226");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1226");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);