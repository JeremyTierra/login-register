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
        var hola =await client.query(`INSERT INTO table_users (id_user,name,password,email ) VALUES ('${uuidv4()}', '${name}','${hash}', '${email}') `);

        var token = jwt.sign({ foo: 'bar' },config.SECRET, {
            expiresIn: 86400
        });
        console.log("Usuario creado");
        res.statusCode = 200;
        res.json({hola});
    }
    catch (err) {
        console.log(err);
        res.send("ocurrio un error");
    }
}

export function signin(req, res) {

}