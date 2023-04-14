import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


app.use('/', (req, res) => {
    res.send('Hola!')
})

console.log(process.env.URL_PRUEBA)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`)
});
