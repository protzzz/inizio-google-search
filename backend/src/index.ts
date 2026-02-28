import express from "express";
import dotenv from "dotenv";
import searchGoogleRouter from "./routes/search.google";
import searchSerperRouter from "./routes/search.serper";
import path from "node:path";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const frontendPath = path.join(__dirname, "../../frontend");

app.use(express.json());
// app.use("/api", searchGoogleRouter);
app.use("/api", searchSerperRouter);

app.get("/", (req, res) => {
  // res.send("Backend is running");
  res.sendFile(path.join(frontendPath, "index.php"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
