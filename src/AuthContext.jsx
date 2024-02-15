import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);
export function GetAuth() {
    return useContext(AuthContext);
}

const AuthContextUpdate = createContext(null);
export function UpdateAuth() {
    return useContext(AuthContextUpdate);
}

export function AuthProvider({ children }) {
    const [authState, setAuthState] = useState("Login");

    return (
        <AuthContext.Provider value={authState}>
            <AuthContextUpdate.Provider value={(newAuthState) => setAuthState(newAuthState)}>
                {children}
            </AuthContextUpdate.Provider>
        </AuthContext.Provider>
    );
}