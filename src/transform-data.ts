import { Users, myUser } from "./user.interface"

export default function transformAddress(users: Array<Users>)/*: myUser ??*/ {
    //const {id, firstName, lastName, maidenName, age, gender, email, phone, username, password, birthDate, image, bloodGroup, height, weight, eyeColor, hair, domain, ip, address, macAddress, university, bank, company, ein, ssn, userAgent} = users
    
    const newUser = users.map<myUser>(user => { //(user: Array<Users>): myUser ??
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            maidenName: user.maidenName,
            age: user.age,
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            username: user.username, 
            password: user.password,
            birthDate: user.birthDate,
            image: user.image,
            bloodGroup: user.bloodGroup,
            height: user.height,
            weight: user.weight,
            eyeColor: user.eyeColor,
            hair: user.hair,
            address: user.address,
            school: user.university,
            bank: {
                expirationDate: user.bank.cardExpire,
                creditCard: user.bank.cardNumber,
                type: user.bank.cardType,
                currency: user.bank.currency,
                iban: user.bank.iban
            },
            company: user.company
        }
    })
    return newUser
}

