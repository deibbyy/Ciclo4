const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = {};

const app = express();
app.use("/graphql", graphqlHTTP({
    graphiql:true, 
    schema:schema
}))




app.get('/',(req, res) =>{
    res.json({
        message:"Hola, desarrollo web"
    })
})

app.listen(3001, () =>console.log("Iniciando server en el puerto 3001..."));