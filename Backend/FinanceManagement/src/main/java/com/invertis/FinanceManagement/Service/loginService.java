package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.DTO.LoginDTO;

public interface loginService {
    public String login(LoginDTO dto);
    public String logOut(String key);
}
