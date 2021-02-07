export class Client {
    id_client?: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    joiningDate?: Date;
    phoneNumber?: number;
    role?: string

    constructor(
        id_client: number = 0,
        firstName: string = '',
        lastName: string = '',
        gender: string = '',
        email: string = '',
        password: string = '',
        phoneNumber: number = 0,
        role: string = ''
    ){
        this.id_client = id_client;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.joiningDate = new Date();
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}
