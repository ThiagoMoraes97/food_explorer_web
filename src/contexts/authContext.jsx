import { createContext, useEffect, useState } from "react"
import { api } from "../resources/api";

const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    async function signIn({email, password}){
        try {
            const response = await api.post("/sessions", {
                email,
                password
            });

            console.log(response.data.user);

           setUser(response.data.user);
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login");
            }
        }
    }

    async function signUp({name, email, password}){
        try {
            const response = await api.post("/users", {
                name,
                email,
                password
            });

            if(response.status === 201){
                alert("Usuário cadastrado com sucesso!");
            }

        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                console.error(error);
                alert("Não foi possível fazer cadastro");
            }
        }
    }

    return (
        <AuthContext.Provider value={{signIn, signUp, user}}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthProvider, AuthContext };
