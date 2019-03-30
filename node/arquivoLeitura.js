// fs -> file system
// módulo que le arquivo. Vem previamente instalado no Node 
const fs = require('fs');

/* '__dirname' é uma constante que esta presente
 em todos os arquivos/módulos do node que representa
 o diretório atual. */
const caminho = __dirname + '/arquivo.json';

// sincrono...
// lê o arquivo de modo síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrona...
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
     const config = JSON.parse(conteudo);
     console.log(`${config.db.host}:${config.db.port}`);
});

// Lê o arquivo JSON e já o transforma em objeto
// Executa de forma sincrona
const config = require('./arquivo.json');
console.log(config.db);

// leitura de uma pasta pelo fs
// readdir -> lê o diretório
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos); // retorna um array
});