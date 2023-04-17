import {Router} from "express";
import * as productController from "../controllers/products.controller";
import {authJwt} from "../middlewares/index"
 const router =Router();

router.get('/',productController.getProducts);
router.get('/:id',productController.getProductById);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin],productController.createProduct);
router.put('/:id',[authJwt.verifyToken,authJwt.isAdmin],productController.updateProductById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin],productController.deleteProductById);


export default router;