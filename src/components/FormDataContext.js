import React, { createContext, useState, useContext } from 'react';

export const FormDataContext = createContext(); // Ensure this is exported

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    reservation_date: '',
    guests: '',
    reservation_slot: '',
    occasion: '',
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
