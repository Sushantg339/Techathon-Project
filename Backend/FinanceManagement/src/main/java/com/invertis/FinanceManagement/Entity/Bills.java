package com.invertis.FinanceManagement.Entity;

import com.invertis.FinanceManagement.Enums.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@RequiredArgsConstructor
public class Bills {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer bill_Id;
    private String bill_Name;
    private Integer bill_Amount;
    private LocalDate date;
    @Enumerated(EnumType.STRING)
    private Status bill_Status;
}
