var express = require("express");
var app = express();
const PORT = 4000;


app.use(express.static("public"));

app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});

