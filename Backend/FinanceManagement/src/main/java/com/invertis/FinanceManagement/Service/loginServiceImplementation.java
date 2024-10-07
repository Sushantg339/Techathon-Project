package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.DTO.LoginDTO;
import com.invertis.FinanceManagement.Entity.UserSession;
import com.invertis.FinanceManagement.Entity.Users;
import com.invertis.FinanceManagement.Exceptions.UserException;
import com.invertis.FinanceManagement.Repository.UserRepository;
import com.invertis.FinanceManagement.Repository.UserSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import static com.invertis.FinanceManagement.Service.StringGen.generateSessionKey;

@Service
public class loginServiceImplementation implements  loginService{



        @Autowired
        private UserSessionRepository usersession;

        @Autowired
        private UserRepository userRepo;

        @Override
        public String logOut(String key)throws UserException {
            UserSession us =  usersession.findBySessionId(key);
            if(us != null) {
                usersession.delete(us);
                return "Logged Out!";
            }else throw new UserException("Error Occured Unable to log out !");

        }

        @Override
        public String login(LoginDTO dto) throws UserException {
            Users user = userRepo.findByMobileNumber(dto.getMobile());

            if(user == null) {
                user=userRepo.findByEmail(dto.getEmail());
                throw new UserException("Please Enter a valid mobile number or email");
            }

            UserSession currentUserSession =usersession.findByUserId(user.getId());

                if(currentUserSession!=null ) {
                    throw new UserException("User already Logged In with this number");
                }

            if(user.getPassword().equals(dto.getPassword())) {
                String sessionKey = generateSessionKey(16);
                System.out.println(sessionKey);
                // Generate a session key of length 16
                UserSession uss = new UserSession(user.getId(), sessionKey, LocalDateTime.now());

                usersession.save(uss);
                return uss.toString();
            }
            else
                throw new UserException("Please Enter a valid password");

        }
}
