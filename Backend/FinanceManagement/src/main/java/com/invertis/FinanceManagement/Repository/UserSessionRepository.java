package com.invertis.FinanceManagement.Repository;

import com.invertis.FinanceManagement.Entity.UserSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSessionRepository extends JpaRepository<UserSession,Integer> {
    public UserSession findBySessionId(String key);
    public UserSession findByUserId(Integer Id);
}
