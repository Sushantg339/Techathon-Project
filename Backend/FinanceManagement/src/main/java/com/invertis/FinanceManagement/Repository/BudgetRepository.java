package com.invertis.FinanceManagement.Repository;

import com.invertis.FinanceManagement.Entity.Budget;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Integer> {
}
