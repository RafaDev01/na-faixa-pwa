// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Container,
    Card,
    Title,
    Form,
    InputGroup,
    Label,
    Input,
    Button,
    LinkText,
    SecondaryLink,
} from "./LoginStyles";

import { useTheme } from "../../theme/ThemeProvider";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { toggleTheme } = useTheme();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "teste@email.com" && password === "123456") {
            router.push("/dashboard");
        } else {
            alert("Credenciais inválidas");
        }
    };

    return (
        <Container>
            <Card>
                <Title>Login</Title>
                <Form onSubmit={handleLogin}>
                    <InputGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <Button type="submit">Entrar</Button>
                </Form>
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <LinkText href="#">Esqueci minha senha</LinkText>
                </div>
                <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
                    <SecondaryLink href="/register">Criar conta</SecondaryLink>
                </div>
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <Button type="button" onClick={toggleTheme}>
                        Trocar Tema
                    </Button>
                </div>
            </Card>
        </Container>
    );
}
