package com.invertis.FinanceManagement.Exceptions;

public class budgetException extends RuntimeException{
    public budgetException() {
    }

    public budgetException(String message) {
        super(message);
    }
}
