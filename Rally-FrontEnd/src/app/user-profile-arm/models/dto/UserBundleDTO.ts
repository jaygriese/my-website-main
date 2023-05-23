import { RegisterDTO } from "./RegisterDTO";
import { UserInfoDTO } from "./UserInfoDTO";

export class UserBundleDTO {
    registerDTO: RegisterDTO;
    userInfoDTO: UserInfoDTO;

	constructor(registerDTO: RegisterDTO, userInfoDTO: UserInfoDTO){
        this.registerDTO = registerDTO,
        this.userInfoDTO = userInfoDTO
	}
}