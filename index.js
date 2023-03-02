import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/get_data", (req, res) => {
  res.send("You hit my port number");
});

app.post("/get_data", (req, res) => {
  res.json({ name: "joe", babyIsComing: "Monday" });
});
app.listen(PORT, console.log(`listening on port ${PORT}`));
