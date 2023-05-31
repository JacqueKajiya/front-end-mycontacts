export interface IClientLogin{
    email: string;
    password: string
}

export interface IContactData{
    id: string,
    email: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string
}

export interface IUserData extends IContactData{
    password: string
  }

export interface IContactUpdate{
    email: string,
    name: string,
    phone: string
}