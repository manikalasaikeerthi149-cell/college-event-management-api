const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./routes/student.routes");
app.use("/students", studentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`College Event Management API Running on Port ${PORT}`);
});