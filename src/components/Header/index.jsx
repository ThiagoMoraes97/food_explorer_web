import { Container, Logo } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import { PiSignOut  } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import orderButtonSvg from "../../assets/orderButon.svg";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import logoSvg from "/logo.svg";

export function Header(){

    const { user, signOut } = useAuth();
    const [order, setOrder] = useState(0);

    return(
        <Container>
            <div className="header_content">
                <Logo>
                    <img src={logoSvg} alt="Logo do Food Explorer" />
                    <div className="logo_info">
                        <h2>food explorer</h2>
                        {user?.role === "admin" ? <small>admin</small> : null}
                        {console.log(user)}
                    </div>
                </Logo>

                <Input icon={IoSearch} placeholder="Busque por pratos ou ingredientes" />

                <Button 
                    icon={user?.role === "admin" ? null : orderButtonSvg} title={ user?.role === "admin" ? "Novo prato" : `Pedidos (${order})`} 
                />

                <button onClick={signOut}>
                    <PiSignOut />
                </button>
            </div>
        </Container>
    )
}