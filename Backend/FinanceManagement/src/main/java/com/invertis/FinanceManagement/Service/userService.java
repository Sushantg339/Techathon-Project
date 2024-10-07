package com.invertis.FinanceManagement.Service;

import com.invertis.FinanceManagement.Entity.Bills;
import com.invertis.FinanceManagement.Entity.Budget;
import com.invertis.FinanceManagement.Entity.Transactions;
import com.invertis.FinanceManagement.Entity.Users;

import java.util.List;

public interface userService {
    public String addUser(Users user);
    public String updateProfile(String firstName,String lastName,String email,String mobile,String sessionId);
    public String updatePassword(String id, String password);
    public List<Transactions> getAllTransactions(String id);
    public String addTransaction(String id,Transactions transactions);
    public String addBill(String id, Bills bills);
    public String removeBill(String id, int billId);

    public String addBudget(String id, Budget budget);

}
