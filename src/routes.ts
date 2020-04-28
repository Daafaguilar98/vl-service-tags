import { Router } from "express";
import { getTags } from "./controllers/tags_controller"

const routes = Router();

routes.get("/tags", getTags)

export default routes;