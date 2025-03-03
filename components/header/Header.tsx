'use client'

import React from 'react'
import { useTheme } from "../../theme/ThemeProvider";
import { HeaderContainer } from './HeaderStyles';
import ToggleThemeButton from './toggleTheme/ToggleThemeButton';

export const Header = () => {
    const { toggleTheme } = useTheme();
    return (
        <HeaderContainer style={{ textAlign: "center" }}>
            <ToggleThemeButton />
        </HeaderContainer>
    )
}
