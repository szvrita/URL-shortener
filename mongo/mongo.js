var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//mongoose.connect("mongodb://138.68.188.190/longUrl");

var myUrlsSchema = new Schema({
    url: String,
    localUrl: {type: String, default: function() {
        return "localhost:8000/link/" + Math.floor(Math.random()*9000) + 1000
    }}
});

var generModel = mongoose.model("gener", myUrlsSchema);



module.exports = {
    gener: generModel
};
