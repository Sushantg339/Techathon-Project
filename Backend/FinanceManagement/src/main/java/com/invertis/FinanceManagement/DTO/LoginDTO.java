package com.invertis.FinanceManagement.DTO;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LoginDTO {
    public String email;
    public String password;
}
