const phone  = [];
module.exports = class Phone{

    constructor(fname,surname,company,phone,email){
        this.fname = fname;
        this.surname =surname;
        this.company = company;
        this.phone = phone;
        this.email= email;
    }

    save(){
        phone.push(this)
    }

    static fetchAll(){
        return phone;
    }

}