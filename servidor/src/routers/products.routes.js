import {Router} from "express";
import * as productController from "../controllers/products.controller";

 const router =Router();

router.get('/',productController.getProducts);
router.get('/:id',productController.getProductById);
router.post('/',productController.createProduct);
router.put('/:id',productController.updateProductById);
router.delete('/:id',productController.deleteProductById);


export default router;