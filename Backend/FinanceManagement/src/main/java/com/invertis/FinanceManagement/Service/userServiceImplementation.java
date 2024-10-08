package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.Entity.*;
import com.invertis.FinanceManagement.Enums.Status;
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
    public Users getUser(){
        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
        return us;
    }

    @Override
    public String updateProfile(Users user) {

        System.out.println(user);
        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }
            us.setFirst_name(user.getFirst_name());
            us.setLast_name(user.getLast_name());
            us.setEmail(user.getEmail());
            us.setMobileNumber(user.getMobileNumber());

        System.out.println(us);
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
    public List<Bills> getAllBills(){
        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }

        return us.getBills();
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
    public String removeBill(String billName, int amount) {

        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }


        Bills bill = us.getBills().stream()
                    .filter(b -> b.getBill_Name().equals(billName) && b.getBill_Amount() == amount)
                    .findFirst()
                    .orElseThrow(() -> new BillException("No bill found with the specified name and amount"));


       List<Bills> bills= us.getBills();
       bills.remove(bill);
       us.setBills(bills);
       uRepo.save(us);
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

    @Override
    public String updateBill(String billName, int amount) {
        Users us=uRepo.findById(uss.getId()).orElse(null);
        if(us==null) {
            throw new UserException("No User found with  UserId : "+uss.getId() +". Please register first !");

        }


        Bills bill = us.getBills().stream()
                .filter(b -> b.getBill_Name().equals(billName) && b.getBill_Amount() == amount)
                .findFirst()
                .orElseThrow(() -> new BillException("No bill found with the specified name and amount"));

        List<Bills> bills= us.getBills();
        bills.remove(bill);


        bill.setBill_Status(Status.valueOf("PAID"));
        bills.add(bill);
        us.setBills(bills);
        uRepo.save(us);
        return "Bill updated successfully";
    }


}
