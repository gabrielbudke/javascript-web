const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// Axios é um client http
// Ele faz requisições para obter informações de
// algo que está remoto.

const chineses = funcionario => funcionario.pais == 'China';
const mulher = funcionario => funcionario.genero == 'F';
const salario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

const axios = require('axios');

// Obtendo informações
// axios está fazendo uma requisição em cima da url
// para obter o conteúdo
axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios);

    // Desafio obter mulher chinesa com menor salario
    const func = funcionarios.filter(chineses).filter(mulher).reduce(salario); 
    console.log(func);
})


