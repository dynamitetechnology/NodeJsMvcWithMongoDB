const path =  require("path")
const express  =  require("express")
const bodyParser = require("body-parser")
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const phoneRoute = require("./routes/phone")

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/',phoneRoute)


app.listen(3000, () => {
    console.log('listening on *:3000');
  });