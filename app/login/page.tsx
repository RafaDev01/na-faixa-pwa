// app/login/page.tsx
"use client";

import axios from "axios";
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

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Verifica se os campos estão preenchidos
        if (!email.trim() || !password.trim()) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                email,
                senha: password,
            });

            if (response.data.success) {
                router.push("/dashboard"); // Redireciona se estiver tudo certo
            } else {
                alert("Credenciais inválidas.");
            }
        } catch (error) {
            alert("Erro ao tentar fazer login. Tente novamente.");
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
            </Card>
        </Container>
    );
}
