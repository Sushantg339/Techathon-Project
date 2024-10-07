package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.Entity.*;
import com.invertis.FinanceManagement.Exceptions.BillException;
import com.invertis.FinanceManagement.Exceptions.UserException;
import com.invertis.FinanceManagement.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServiceImplementation implements userService {

    @Autowired
    private UserRepository uRepo;

    @Autowired
    private BillRepository bRepo;

    @Autowired
    private BudgetRepository bdRepo;
    @Autowired
    private TransactionRepository  tRepo;



    private Users uss;
    @Override
    public String addUser(Users user) {
        Users u=uRepo.findByEmail(user.getEmail());
        if(u!=null){
            throw new UserException("User Already Psent");
        }

        uss=uRepo.save(user);
        return "User SingedUp Successfully..";
    }

    @Override
    public String updateProfile( String firstName, String lastName, String email, String mobile) {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        if(firstName!=null){
            us.setFirst_name(firstName);
        }
        if(lastName!=null){
            us.setLast_name(lastName);
        }
        if(email!=null){
            us.setEmail(email);
        }if(mobile!=null){
            us.setMobileNumber(mobile);
        }
        uRepo.save(us);

        return "Profile Updated Successfully";
    }

    @Override
    public String updatePassword(String password) {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        us.setPassword(password);
        uRepo.save(us);
        return "Password updated successfully";
    }

    @Override
    public List<Transactions> getAllTransactions() {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }

        return us.getTransactions();
    }

    @Override
    public String addTransaction( Transactions transactions) {
        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        List<Transactions> tt = us.getTransactions();
        tt.add(transactions);
        us.setTransactions(tt);
        uRepo.save(us);
        return "Transaction added successfully";
    }

    @Override
    public String addBill( Bills bills) {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        List<Bills> bill=us.getBills();
        bill.add(bills);
        us.setBills(bill);
        uRepo.save(us);
        return "Bill added succesfully";
    }

    @Override
    public String removeBill( int billId) {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        Bills bill=bRepo.findById(billId).get();
        if(bill==null){
            throw new BillException("No bills present");
        }
        bRepo.delete(bill);
        return "Bill removed successfully";
    }

    @Override
    public String addBudget( Budget budget) {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        List<Budget> list = us.getBudgets();
        us.setBudgets(list);
        uRepo.save(us);
        return "Budget added successfully";
    }


}
