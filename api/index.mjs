import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./loadEnvironment.mjs";
import "express-async-errors";
import users from "./routes/users.mjs";
import session from "express-session";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(morgan("combined"));  when deploy, change it
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.use("/user", users);

app.use((err, _req, res, next) => {
  res.status(500).send("unexpected error occurred.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
