package org.rally.backend.userprofilearm.model.dto;

public class UserBundleDTO {
    RegisterDTO registerDTO;
    UserInfoDTO userInfoDTO;

    public RegisterDTO getRegisterDTO() {
        return registerDTO;
    }

    public void setRegisterDTO(RegisterDTO registerDTO) {
        this.registerDTO = registerDTO;
    }

    public UserInfoDTO getUserInfoDTO() {
        return userInfoDTO;
    }

    public void setUserInfoDTO(UserInfoDTO userInfoDTO) {
        this.userInfoDTO = userInfoDTO;
    }
}
