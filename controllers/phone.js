const Phone =  require("../models/phone")

exports.getPhone = (req, res, next) => {

    const phone =  Phone.fetchAll();
    console.log('phone',phone)
    res.render('index')
}

exports.savePhone = (req, res, next) => {
  
    const phone  = new Phone(req.body.fname,req.body.surname,req.body.company,req.body.phone,req.body.email)
    phone.save();
    res.json({status:"200",data:req.body})
}