interface BaseAddress {
  address:     string;
  city:        string;
  coordinates: Coordinates;
  postalCode:  string;
}

export interface AddressUser extends BaseAddress {
  state:       string;
}

export interface AddressMyUser extends BaseAddress {
  stateCode:   string;
}

interface BaseBank {
  currency:   string;
  iban:       string;
}

export interface BankUser extends BaseBank {
  cardExpire: string;
  cardNumber: string;
  cardType:   string;
}

export interface BankMyUser extends BaseBank {
  expirationDate: string;
  creditCard:     string;
  type:           string;
}

interface Hair {
  color: string;
  type:  string;
}

interface CompanyBase {
  department: string;
  name:       string;
  title:      string;
}

export interface CompanyUser extends CompanyBase {
  address:    AddressUser;
}

export interface CompanyMyUser extends CompanyBase {
  address:    AddressMyUser;
}

interface Coordinates {
  lat: number;
  lng: number;
}

export interface User {
  id:         number;
  firstName:  string;
  lastName:   string;
  maidenName: string;
  age:        number;
  gender:     string;
  email:      string;
  phone:      string;
  username:   string;
  password:   string;
  birthDate:  string;
  image:      string;
  bloodGroup: string;
  height:     number;
  weight:     number;
  eyeColor:   string;
  hair:       Hair;
  domain:     string;
  ip:         string;
  address:    AddressUser;
  macAddress: string;
  university: string;
  bank:       BankUser;
  company:    CompanyUser;
  ein:        string;
  ssn:        string;
  userAgent:  string;
}

export interface MyUser {
  id:         number;
  firstName:  string;
  lastName:   string;
  maidenName: string;
  age:        number;
  gender:     string;
  email:      string;
  phone:      string;
  username:   string;
  password:   string;
  birthDate:  string;
  image:      string;
  bloodGroup: string;
  height:     number;
  weight:     number;
  eyeColor:   string;
  hair:       Hair;
  address:    AddressMyUser;
  school:     string;
  bank:       BankMyUser;
  company:    CompanyMyUser;
}



