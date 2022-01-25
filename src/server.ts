import express from "express";


const app = express();

/**
 * GET      => Buscar uma informação
 * POST     => Criar/inserir uma informação 
 * PUT      => Alterar uma informação
 * DELETE   => Deletar uma informação
 * PATCH    => Alterar uma informação especifica
 */

// GET
app.get('/teste', (request, response) => {
    // request => entrando
    // responde => saindo
    return response.send("Olá NLW");
});

//POST
app.post('/teste-post', (request, response) =>{
    return response.send("Post");
});


// http://localhost:3000
app.listen(3000, () => console.log('Server is Runnig'));

