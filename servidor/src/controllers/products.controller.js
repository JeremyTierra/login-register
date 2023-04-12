import client from "../database";
export async function createProduct(req, res) {
    try {
        const { name, category, price, imgURL } = req.body;
        const resp = await client.query(`INSERT INTO products (name, category, price, "imgURL") VALUES ('${name}', '${category}', ${price}, '${imgURL}') RETURNING *;`);
        console.log("producto creado");
        res.json(resp.rows);
    }
    catch (err) { console.log(err); }
}
export async function getProducts(req, res) {
    const resp = await client.query("Select * from products")
    res.json(resp.rows);
}
export async function getProductById(req, res) {
    try {
        const resp = await client.query(`Select * from products Where id =${req.params.id}`)
        res.status(200).json(resp.rows);
    } catch (err) { res.send(err); };
}
export function updateProductById(req, res) {

    try {
        client.query(`UPDATE products SET name = '${req.body.name}', category = '${req.body.category}', price = ${req.body.price}, "imgURL" = '${req.body.imgURL}' WHERE id = ${req.params.id}`).then(() => { res.status(200).json("producto creado " + req.body) })

    } catch (err) {
        res.send(err);
    };

}
export function deleteProductById(req, res) {

  try {
    client.query(`DELETE FROM products
    WHERE id =${req.params.id};`).then(()=>res.send("Producto "+req.params.id + " eliminado"));

} catch (err) {
    res.send(err);
};
}
