export class Client {
    id_client?: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    birthdate?: Date;

    constructor(
        id_client: number = 0,
        firstName: string = '',
        lastName: string = '',
        gender: string = '',
        email: string = '',
        password: string = '',
        birthdate: Date = new Date()
    ){
        this.id_client = id_client;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
    }
}
