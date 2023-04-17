const jwt = require('jsonwebtoken');
import config from "../config";
import client from "../database";

export async function verifyToken(req, res, next) {

    try {
        const bearerHeader = req.headers["authorization"];
        if (!bearerHeader) return res.sendStatus(401);
        req.token = bearerHeader.split(" ")[1];
        jwt.verify(req.token, config.SECRET, async (err, authData) => {
            if (err) {
                res.sendStatus(403); // Token inválido, no se permite el acceso
            } else {
                // Token válido, autorizado para acceder a los recursos protegidos
                try {
                    const result = await client.query('SELECT * FROM table_users WHERE id_user = $1', [authData.id]);
                    if (result.rows.length === 0) {
                        res.sendStatus(404); // Usuario no encontrado
                    } else {
                        req.userData = result.rows[0];
                        req.authData = authData;
                        next();
                    }
                } catch (error) {
                    console.error(error);
                    res.sendStatus(500); // Error del servidor
                }
            }
        });

    }
    catch (err) { console.log(err); }

}

export async function isAdmin(req, res, next) {
    if (req.userData.role != 'admin') return res.json({ "require": "Admin" });
    next();
}