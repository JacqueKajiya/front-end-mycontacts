export interface IContactData{
    id: string,
    email: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string
}

export interface IUsersResponse extends IContactData{
    users: IContactData[]
}

export interface IUserData extends IContactData{
    password: string
  }

export interface IContactUpdate{
    email: string,
    name: string,
    phone: string
}