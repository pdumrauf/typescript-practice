interface Hair {
  color: string,
  type: string
}

interface Address {
  address: string,
  city: string,
  coordinates:{
     lat: number,
     lng: number
  },
  postalCode: string,
  state: string
}

interface BankDetails {
  cardExpire: string,
  cardNumber: string | number,
  cardType: string,
  currency: string,
  iban: string
}

interface Company {
  address: Address,
  department: string,
  name: string,
  title: string
}

export interface Users {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: string,
  email: string,
  phone: number,
  username: string, 
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight:number,
  eyeColor: string,
  hair: Hair,
  domain: string,
  ip: string,
  address: Address
  macAddress: string,
  university: string,
  bank: BankDetails,
  company: Company,
  ein: string | number,
  ssn: string | number,
  userAgent: string
}


interface BankDetailsMyUser {
  expirationDate: string,
  creditCard:string | number,
  type: string,
  currency: string,
  iban: string
}

export interface myUser {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: string,
  email: string,
  phone: number,
  username: string, 
  password: string,
  birthDate: string,
  image: string,
  bloodGroup: string,
  height: number,
  weight:number,
  eyeColor: string,
  hair: Hair,
  address: Address,
  school: string,
  bank: BankDetailsMyUser
  company: Company
}

