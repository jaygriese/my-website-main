export class RegisterDTO {
    userName: string;
	userEmail: string;
	password: string;
    verifyPassword: string;

	constructor(userName: string, userEmail: string, password: string, verifyPassword: string){
		this.userName = userName;
		this.userEmail = userEmail;
		this.password = password;
        this.verifyPassword = verifyPassword;
	}
}