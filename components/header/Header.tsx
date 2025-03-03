'use client'

import React from 'react'
import { useTheme } from "../../theme/ThemeProvider";
import { HeaderContainer } from './HeaderStyles';
import { useAuth } from "../../contexts/ContextAuth";
import ToggleThemeButton from "../header/toggleTheme/ToggleThemeButton"; // ajuste o caminho conforme necessário

export const Header = () => {
    const { toggleTheme, theme } = useTheme();
    const { user } = useAuth();
    const isDark = theme === "dark";

    return (
        <HeaderContainer>
            {/* O toggle só aparece se houver um usuário */}
            {user && (
                <ToggleThemeButton />
            )}
            {/* Outros elementos do header */}
        </HeaderContainer>
    );
};
