import express, { response } from "express";
import routes from "./routes/appointments.routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(" Server started on port 3333 (http://localhost:3333)");
});
