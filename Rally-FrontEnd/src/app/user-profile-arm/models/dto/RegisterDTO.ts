export class RegisterDTO {
    userName: string;
	password: string;
    verifyPassword: string;

	constructor(userName: string, password: string, verifyPassword: string){
		this.userName = userName;
		this.password = password;
        this.verifyPassword = verifyPassword;
	}
}