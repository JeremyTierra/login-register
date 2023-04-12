import  express  from "express";
import morgan from "morgan";
import productsRoutes from "./routers/products.routes";
import authRoutes from "./routers/auth.routes";
import "./database";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.get("/",(req,res)=>{
res.send("Welcome");
});

app.use("/api/products",productsRoutes);
app.use("/api/auth",authRoutes);

export default app;