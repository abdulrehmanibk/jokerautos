import React, { createContext, useState } from 'react';

export const NavIconContext = createContext();

// Custom Hook
// export const useNavIcon = () => useContext(NavIconContext);

// Context Provider
export const NavIconProvider = ({ children }) => {
    const [isResponsiveNav, setIsResponsiveNav] = useState(false);
    const handleNav = () => {
        setIsResponsiveNav(!isResponsiveNav);
    }


  return (
    <NavIconContext.Provider value={{ isResponsiveNav, setIsResponsiveNav, handleNav }}>
      {children}
    </NavIconContext.Provider>
  );
};
