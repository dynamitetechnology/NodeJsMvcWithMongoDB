const getDB = require("../utils/database").getDB

class Phone {

    constructor(fname, surname, company, phone, email) {
        this.fname = fname;
        this.surname = surname;
        this.company = company;
        this.phone = phone;
        this.email = email;
    }

    save() {
        const db = getDB()
        return db.collection('phone').insertOne(this).then(result => {
            console.log('Result', result)
        }).catch(err => {
            console.log('err', err)
        })
    }

  static fetchAll() {
        const db = getDB()
        const promise = new Promise((resolve, reject) => {
            db.collection('phone').find().sort({fname:'desc'}).toArray().then(result => {
              //  console.log('Result', result);
                return  resolve(result);
            }).catch(err => {
                console.log(err)
                return reject(err)
            });
        });
        return promise;
    }
}

module.exports = Phone