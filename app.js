var express = require('express');
var app			= express();

//routing on /
app.get("/",function (req,res) {
	res.send("Helloo...Kem cho, Khaana Khaake Jaana Hnn. Jai shree Krishna.");
})


//listen
app.listen(2000,function () {
	console.log("server started");
})
