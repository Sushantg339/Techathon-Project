package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.DTO.LoginDTO;
import com.invertis.FinanceManagement.Entity.Users;
import com.invertis.FinanceManagement.Exceptions.UserException;
import com.invertis.FinanceManagement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import static com.invertis.FinanceManagement.Service.StringGen.generateSessionKey;

@Service
public class loginServiceImplementation implements  loginService{





        @Autowired
        private UserRepository userRepo;

        @Override
        public String logOut()throws UserException {

                return "Logged Out!";


        }

        @Override
        public String login(LoginDTO dto) throws UserException {
           Users user=userRepo.findByEmail(dto.getEmail());
                if(user==null)
                    throw new UserException("Please Enter a valid email address");
            if(user.getPassword().equals(dto.getPassword())) {
                String sessionKey = generateSessionKey(16);
                System.out.println(sessionKey);
                // Generate a session key of length 16

                return "Logged In Successfully";
            }
            else
                throw new UserException("Please Enter a valid password");

        }
}
