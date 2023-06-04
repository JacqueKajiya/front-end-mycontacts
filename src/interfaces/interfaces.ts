export interface IContactData{
    id: string,
    email: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string
}

export interface IContactUpdate{
    email?: string,
    name?: string,
    phone?: string
}

export interface IUsersResponse extends IContactData{
    users: IContactData[]
}

export interface IUserData extends IUserRequest{
    password: string
  }

export interface IUserRequest{
    name: string,
    email: string,
    phone: string,
}

export interface IUserDataResponse {
    id: string,
    name: string,
    email: string,
    phone: string,
}

