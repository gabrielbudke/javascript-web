// Importando módulo através do caminho relativo
const getModuloA = require('../../moduloA')
console.log(getModuloA.ola)
console.log(getModuloA.bemVindo)

const c = require('./pastaC')
console.log(c.ola2)
// Importando módulos internos do Node que já 
// vem instalado junto

/*
const http = require('http');
http.createServer((req, res) => {
    res.write('Bom noite!');
    res.end();
    
}).listen(8080)
*/




