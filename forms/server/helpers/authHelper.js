const bcrypt = require('bcrypt')
const saltValue = 10

const encryptPassword = (pass) => {
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(saltValue,(err, salt)=>{
            if(err) reject(err)

            bcrypt.hash(pass, salt, (err, hash)=>{
                if(err) reject(err)
                resolve(hash)
            })
        })
    })
}

const comparePassword = (pass ,hash) => {
    return new Promise((resolve,reject)=>{
        bcrypt.compare(pass, hash, (err, result)=>{
            if(err) reject(err)
            resolve(result)
        })
    })
}

module.exports = { encryptPassword, comparePassword }