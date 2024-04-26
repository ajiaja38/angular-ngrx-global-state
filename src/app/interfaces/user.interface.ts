export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IAddres;
  phone: string;
  website: string;
  company: ICompany;
}

interface IAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  long: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
