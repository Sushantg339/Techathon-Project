package com.invertis.FinanceManagement.Exceptions;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class MyErrorDetails {
    private LocalDateTime timestamp;
    private String message;
    private String details;


}
