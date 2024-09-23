const express = require('express');
const userRouters = require("./routes/users.js");
const commentRouters = require("./routes/comments.js");

const app = express();

app.use('/users', userRouters);
app.use('/comments', commentRouters)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
