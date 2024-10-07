package com.invertis.FinanceManagement.Entity;

import com.invertis.FinanceManagement.Enums.TransactionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@RequiredArgsConstructor
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer transactionId;
    private String personName;
    private double amount;
    @Enumerated(EnumType.STRING)
    private TransactionType type;
    private LocalDate date;

}
