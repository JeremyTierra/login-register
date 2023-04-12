import app from './app'
const PUERTO =5000;
app.listen(PUERTO,()=>{
    console.log("Servidor ejecutandose en el puerto " + PUERTO);
});