import express from "express";
import cors from "cors";

const TOKEN = "1234abcdSafeSecureAndUnguessableTokenxyz";
const ACCEPTED_EMAIL = "myemail@mydomain.com";
const ACCEPTED_PASSWORD = "supersecurepassword";

const app = express();

app.listen(3001, () => {
  console.log("listening on 3001");
});

app.use("*", cors());

app.use("/api/*", (req, res, next) => {
  const bearer = req.get("Authorization");
  if (bearer !== `Bearer ${TOKEN}`) {
    return res
      .status(401)
      .json({ error: "Missing or wrong authorization bearer." });
  }
  next();
});

app.post("/login", express.json(), (req, res) => {
  if (req.get("content-type") !== "application/json") {
    return res
      .status(400)
      .json({ error: "Missing or incorrect content-type header" });
  }

  if (
    req.body?.email !== ACCEPTED_EMAIL ||
    req.body?.password !== ACCEPTED_PASSWORD
  )
    return res
      .status(401)
      .json({ error: "Incorrect or missing email and password." });

  res.status(200).send({ token: TOKEN });
});

app.get("/api/graph", (_, res) => {
  res.status(200).json({
    graphData: {
      x: 123,
      y: "abc",
    },
  });
});
