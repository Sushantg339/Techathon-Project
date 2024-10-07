package com.invertis.FinanceManagement.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data

public class UserSession {
    
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Id
        private Integer userSessionId;
        private Integer userId;
        private String sessionId;
        private LocalDateTime sessiontime;

    public UserSession() {
    }

    public UserSession( Integer userId, String sessionId, LocalDateTime sessiontime) {

        this.userId = userId;
        this.sessionId = sessionId;
        this.sessiontime = sessiontime;
    }
}
