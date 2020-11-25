const usu = require('./usu.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const aluno_HS = require('./aluno_hardskills.routes');
const prof = require('./prof.routes');

module.exports = app => {
    app.use('/grupou/usu', usu);
    app.use('/grupou/questao', questao);
    app.use('/grupou/hardskill', hardskill);
    app.use('/grupou/aluno_hardskills', aluno_HS);
    app.use('/grupou/prof', prof);
}

