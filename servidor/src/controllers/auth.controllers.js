import client from "../database";
import { v4 as uuidv4 } from 'uuid';
import config from "../config";
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

export async function signup(req, res) {
    try {
        const { name, email, password } = req.body;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        let id =uuidv4();
        await client.query('INSERT INTO table_users (id_user, name, password, email) VALUES ($1, $2, $3, $4)', [id, name, hash, email]);
        var token = jwt.sign({ id: id }, config.SECRET, {
            expiresIn: 86400
        });
        console.log("Usuario creado");
        res.statusCode = 200;
        res.json({ "token": token })
    }
    catch (err) {
        console.log(err);
        res.send("ocurrio un error");
    }
}

export async function signin(req, res) {
    let usuario = await client.query('SELECT * FROM table_users WHERE email = $1;', [req.body.email]);
    let comparacion = await bcrypt.compare(req.body.password, usuario.rows[0].password);
    if (!comparacion) return res.status(401).json({ error: 'Unauthorized' });


    var token = jwt.sign({ id: usuario.rows[0].id_user }, config.SECRET, {
        expiresIn: 86400
    });
    res.json({"token":token});
}