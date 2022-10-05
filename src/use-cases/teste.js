const app = require(`./app`)

app.get(`/teste2`, (req, res) =>{
    return res.json({
        message: "teste get 2"
    })
});