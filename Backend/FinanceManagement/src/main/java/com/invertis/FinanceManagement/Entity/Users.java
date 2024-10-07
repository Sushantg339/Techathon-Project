package com.invertis.FinanceManagement.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String first_name;

    private String last_name;

    private String email;
    private String mobileNumber;


    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Bills> bills= new ArrayList<>();

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    private List<Transactions> transactions=new ArrayList<>();

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    private List<Budget> budgets=new ArrayList<>();

}
