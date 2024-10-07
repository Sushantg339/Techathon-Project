package com.invertis.FinanceManagement.Exceptions;

import jakarta.transaction.TransactionalException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.time.LocalDateTime;

@ControllerAdvice
public class globalExceptionHandler {

    @ExceptionHandler(UserException.class)
    public ResponseEntity<MyErrorDetails> userExceptionHandler(UserException ce, WebRequest req) {

        MyErrorDetails err = new MyErrorDetails();
        err.setTimestamp(LocalDateTime.now());
        err.setMessage(ce.getMessage());
        err.setDetails(req.getDescription(false));

        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BillException.class)
    public ResponseEntity<MyErrorDetails> billExceptionHandler(BillException ce, WebRequest req) {

        MyErrorDetails err = new MyErrorDetails();
        err.setTimestamp(LocalDateTime.now());
        err.setMessage(ce.getMessage());
        err.setDetails(req.getDescription(false));

        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(transactionException.class)
    public ResponseEntity<MyErrorDetails> transactionExceptionHandler(transactionException ce, WebRequest req) {

        MyErrorDetails err = new MyErrorDetails();
        err.setTimestamp(LocalDateTime.now());
        err.setMessage(ce.getMessage());
        err.setDetails(req.getDescription(false));

        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(budgetException.class)
    public ResponseEntity<MyErrorDetails> budgetExceptionHandler(budgetException ce, WebRequest req) {

        MyErrorDetails err = new MyErrorDetails();
        err.setTimestamp(LocalDateTime.now());
        err.setMessage(ce.getMessage());
        err.setDetails(req.getDescription(false));

        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<MyErrorDetails> anyExceptionHandler(Exception ie, WebRequest req) {

        MyErrorDetails err = new MyErrorDetails();
        err.setTimestamp(LocalDateTime.now());
        err.setMessage(ie.getMessage());
        err.setDetails(req.getDescription(false));

        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<MyErrorDetails> noHandlerFoundExceptionHandler(NoHandlerFoundException ie, WebRequest req) {

        MyErrorDetails err = new MyErrorDetails();
        err.setTimestamp(LocalDateTime.now());
        err.setMessage(ie.getMessage());
        err.setDetails(req.getDescription(false));

        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<MyErrorDetails> myInvalidDataExpHandler(MethodArgumentNotValidException me) {

        MyErrorDetails err = new MyErrorDetails();

        err.setTimestamp(LocalDateTime.now());
        err.setMessage("Validation Error");
        err.setDetails(me.getBindingResult().getFieldError().getDefaultMessage());


        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);


    }

}
