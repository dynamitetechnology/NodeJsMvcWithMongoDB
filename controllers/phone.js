const Phone =  require("../models/phone")

module.exports = {

 getPhone: (req, res, next) => {

    Phone.fetchAll().then(result => {
       // console.log('phone',result)
        res.render('index')
    });
   
},

savePhone: (req, res, next) => {
  
    const phone  = new Phone(req.body.fname, req.body.surname, req.body.company, req.body.phone, req.body.email)
    phone.save().then(result => {
        console.log('Pass',result)
    });
    res.json({status:"200",data:req.body})
}

}