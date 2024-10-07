package com.invertis.FinanceManagement.Service;
import java.security.SecureRandom;
public class StringGen {
        private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        private static final SecureRandom random = new SecureRandom();

        // Method to generate a random session key of specified length
        public static String generateSessionKey(int length) {
            StringBuilder sessionKey = new StringBuilder(length);
            for (int i = 0; i < length; i++) {
                int index = random.nextInt(CHARACTERS.length());
                sessionKey.append(CHARACTERS.charAt(index));
            }
            return sessionKey.toString();
        }

}
