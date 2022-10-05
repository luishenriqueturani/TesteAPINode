const express = require(`express`)


const app = express()


app.get(`/teste`, (req, res) =>{
    return res.json({
        message: "teste get"
    })
});



app.listen(55555, () => console.log(`rodando na porta 55555`))


