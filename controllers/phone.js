const Phone =  require("../models/phone")

module.exports = {

 getPhone: async(req, res, next) => {

   let result = await Phone.fetchAll()
    console.log('phone',result)
    res.render('index',{phone:result})
   
},

savePhone: (req, res, next) => {
  
    const phone  = new Phone(req.body.fname, req.body.surname, req.body.company, req.body.phone, req.body.email)
    phone.save().then(result => {
        console.log('Pass',result)
    });
    res.json({status:"200",data:req.body})
}

}