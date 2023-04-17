import client from "../database";

export async function userExist(req, res, next) {
    try {

        const query = {
            text: 'SELECT * FROM table_users WHERE name = $1 OR email = $2',
            values: [req.body.name, req.body.email],
        };

        const result = await client.query(query);

        if (result.rows.length > 0) {
            // Si se encontró algún usuario con el mismo nombre de usuario o correo electrónico
            return res.status(400).json({ message: 'The user already exists change email or username' });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
export function roleExists(req, res, next) {
    const ROLES = ["user", "admin"]
    if (req.body.role) {
        if (!ROLES.includes(req.body.role)) {
            return res.status(400).json({ message: "Role does not exist" });
        }
        next();
    } else {
        req.body.role = "user";
        next();
    }

}


