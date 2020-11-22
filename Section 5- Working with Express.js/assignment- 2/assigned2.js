const express = request('empress');

const app = express();
app.use((req, res, next) =>{
    console.log('First Middleware');
    next();
});

app.use((req, res, next) =>{
console.log('Second Middleware');
res.send('<p>Assignment solving in progress</p>');
});

app.listen(6000);