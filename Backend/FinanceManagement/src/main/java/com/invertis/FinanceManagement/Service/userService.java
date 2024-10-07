package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.Entity.Bills;
import com.invertis.FinanceManagement.Entity.Budget;
import com.invertis.FinanceManagement.Entity.Transactions;
import com.invertis.FinanceManagement.Entity.Users;

import java.util.List;

public interface userService {
    public String addUser(Users user);
    public String updateProfile(String firstName,String lastName,String email,String mobile);
    public String updatePassword( String password);
    public List<Transactions> getAllTransactions();

    List<Bills> getAllBills();

    public String addTransaction(Transactions transactions);
    public String addBill( Bills bills);
    public String removeBill( String billName, int amount);

    public String addBudget( Budget budget);

}
