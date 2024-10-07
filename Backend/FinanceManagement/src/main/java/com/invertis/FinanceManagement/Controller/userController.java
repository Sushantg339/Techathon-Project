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
    public String logoutUserHandler() throws UserException {
        return logS.logOut();
    }

    @PutMapping("/updateUser")
    public ResponseEntity<String> updateUserHandler(@Valid  @RequestParam(required = false) String fname,@RequestParam(required = false) String lname,@RequestParam(required = false) String email,@RequestParam(required = false) String mobile){
        String a = uService.updateProfile(fname,lname,email,mobile);
        return new ResponseEntity<String>(a, HttpStatus.OK);
    }

    @PutMapping("/updatePassword")
    public ResponseEntity<String> updatePasswordHandler(@Valid @RequestParam(required = false) String password){
        String a = uService.updatePassword(password);
        return new ResponseEntity<String>(a, HttpStatus.OK);
    }

    @GetMapping("/getAllTransactions")
    public ResponseEntity<List<Transactions>> getAllTransHandler()	{
        List<Transactions> a=uService.getAllTransactions();
        return new ResponseEntity<List<Transactions>>(a, HttpStatus.OK);
    }

    @PostMapping("/addTransaction")
    public ResponseEntity<String> addTransHandler(@Valid @RequestBody Transactions transactions)	{
        String a=uService.addTransaction(transactions);
        return new ResponseEntity<>(a, HttpStatus.OK);
    }


    @PostMapping("/addBill")
    public ResponseEntity<String> addBillHandler(@Valid@RequestBody Bills transactions)	{
        String a=uService.addBill(transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @PostMapping("/removeBill")
    public ResponseEntity<String> removeBillHandler(@Valid @RequestParam int transactions)	{
        String a=uService.removeBill(transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }

    @PostMapping("/addBudget")
    public ResponseEntity<String> addBudgetHandler(@Valid@RequestBody Budget transactions)	{
        String a=uService.addBudget(transactions);
        return new ResponseEntity<>(a, HttpStatus.CREATED);
    }



}