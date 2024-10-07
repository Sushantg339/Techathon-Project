package com.invertis.FinanceManagement.Controller;

import com.invertis.FinanceManagement.DTO.LoginDTO;
import com.invertis.FinanceManagement.Entity.Bills;
import com.invertis.FinanceManagement.Entity.Budget;
import com.invertis.FinanceManagement.Entity.Transactions;
import com.invertis.FinanceManagement.Entity.Users;
import com.invertis.FinanceManagement.Exceptions.UserException;
import com.invertis.FinanceManagement.Service.loginService;
import com.invertis.FinanceManagement.Service.userService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class userController {

    @Autowired
    private userService uService;
    @Autowired
    private loginService logS;

    @PostMapping("/registerUser")
    public ResponseEntity<String> createUserHandler(@Valid @RequestBody Users user)	{
        String a = uService.addUser(user);
        return new ResponseEntity<String>(a, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> logInUserHandler(@Valid @RequestBody LoginDTO dto) throws UserException {
        String result = logS.login(dto);
        return new ResponseEntity<String>(result,HttpStatus.OK );
    }

    @PostMapping("/logout")
    public String logoutUserHandler(@Valid @RequestParam String sessionid) throws UserException {
        return logS.logOut(sessionid);
    }

    @PutMapping("/updateUser")
    public ResponseEntity<String> updateUserHandler(@Valid @RequestParam String sessionid, @RequestParam(required = false) String fname,@RequestParam(required = false) String lname,@RequestParam(required = false) String email,@RequestParam(required = false) String mobile){
        String a = uService.updateProfile(fname,lname,email,mobile,sessionid);
        return new ResponseEntity<String>(a, HttpStatus.OK);
    }

    @PutMapping("/updatePassword")
    public ResponseEntity<String> updatePasswordHandler(@Valid @RequestParam String sessionid,@RequestParam(required = false) String password){
        String a = uService.updatePassword(sessionid,password);
        return new ResponseEntity<String>(a, HttpStatus.OK);
    }

    @GetMapping("/getAllTransactions")
    public ResponseEntity<List<Transactions>> getAllTransHandler(@Valid @RequestParam String sessionid)	{
        List<Transactions> a=uService.getAllTransactions(sessionid);
        return new ResponseEntity<List<Transactions>>(a, HttpStatus.CREATED);
    }

    @PostMapping("/addTransaction")
    public ResponseEntity<String> addTransHandler(@Valid @RequestParam String sessionid,@RequestBody Transactions transactions)	{
        String a=uService.addTransaction(sessionid,transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }


    @PostMapping("/addBill")
    public ResponseEntity<String> addBillHandler(@Valid @RequestParam String sessionid,@RequestBody Bills transactions)	{
        String a=uService.addBill(sessionid,transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @PostMapping("/removeBill")
    public ResponseEntity<String> removeBillHandler(@Valid @RequestParam String sessionid,@RequestParam int transactions)	{
        String a=uService.removeBill(sessionid,transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @PostMapping("/addBudget")
    public ResponseEntity<String> addBudgetHandler(@Valid @RequestParam String sessionid,@RequestBody Budget transactions)	{
        String a=uService.addBudget(sessionid,transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }



}