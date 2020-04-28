import express from "express";
import routes from "./src/routes";

require('dotenv').config()

const app = express();

app.set("PORT", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes)

app.listen(app.get("PORT"), () => {
    console.log(`Server is running in port ${app.get("PORT")}`)
})

export default app;