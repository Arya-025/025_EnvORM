const express = require("express");
const app = express();
const port = 3000;
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

db.sequelize.sync().then((result) => {
    app.listen(port, () => {
        console.log(`Server stated`);
    })
})
.catch((err) => {
    console.log(err);
})