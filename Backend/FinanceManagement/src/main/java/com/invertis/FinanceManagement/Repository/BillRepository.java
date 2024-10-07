package com.invertis.FinanceManagement.Repository;

import com.invertis.FinanceManagement.Entity.Bills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bills , Integer> {
}
