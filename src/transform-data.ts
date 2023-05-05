import { User, MyUser, AddressUser, AddressMyUser, BankUser, BankMyUser, CompanyUser, CompanyMyUser } from "./user.interface"

/**
 * 
 * @param obj { a: "1", b: "2" }
 * @param newKeys { a: "A", c: "C" }
 * @returns new object { A:"1", b:"2" }
 */
function renameKeys(obj: { [key: string]: any }, newKeys: { [key: string]: string }) {
    const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}

function transformAddress(address: AddressUser): AddressMyUser {
    return renameKeys(address, { state: 'stateCode'})
}

function transformBank(bank: BankUser): BankMyUser {
    return renameKeys(bank, { cardExpire: 'expirationDate', cardNumber: 'creditCard', cardType: 'type' })
}

function transformCompany(company: CompanyUser): CompanyMyUser {
    return {
        ...company,
        address: transformAddress(company.address)
    }
}

export default function transformUser(users: Array<User>): Array<MyUser> {
    return users.map(user => {
        const { domain, ip, macAddress, ein, ssn, userAgent, ...newUser } = user
        return {
            ...newUser,
            school: newUser.university,
            address: transformAddress(newUser.address),
            bank: transformBank(newUser.bank),
            company: transformCompany(newUser.company),
        }
    })
}

