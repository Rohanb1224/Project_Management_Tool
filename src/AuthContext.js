import React, { createContext, useState } from 'react';

// Create the authentication context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  // Function to update the user ID
  const updateUserEmail = (newEmail) => {
    setEmail(newEmail);
    console.log(newEmail);
  };

  return (
    <AuthContext.Provider value={{ email,updateUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
