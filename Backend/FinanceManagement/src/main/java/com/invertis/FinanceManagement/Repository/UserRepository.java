package com.invertis.FinanceManagement.Repository;

import com.invertis.FinanceManagement.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {
    public Users findByMobileNumber(String mobile);
    public Users findByEmail(String email);
}
