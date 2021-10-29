const getDB = require("../utils/database").getDB

class Phone{

    constructor(fname,surname,company,phone,email){
        this.fname = fname;
        this.surname =surname;
        this.company = company;
        this.phone = phone;
        this.email= email;
    }

    save(){
        const db = getDB()
       return db.collection('phone').insertOne(this).then(result =>{
            console.log('Result',result)
        }).catch(err => {
            console.log('err',err)
        })
    }

    static fetchAll(){
        const db = getDB()
        return db.collection('phone').find().toArray().then(result => { console.log('Result',result) ; return result;}).catch(err=>{console.log(err)});
    }

}

module.exports = Phone