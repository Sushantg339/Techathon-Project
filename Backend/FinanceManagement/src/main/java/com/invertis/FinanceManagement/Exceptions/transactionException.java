package com.invertis.FinanceManagement.Exceptions;

public class transactionException extends RuntimeException{
    public transactionException(String message) {
        super(message);
    }

    public transactionException() {
    }
}
