import { useTheme } from "../../../theme/ThemeProvider";
import { ToggleContainer, ToggleCircle } from "./ToggleTheme";

export default function ToggleThemeButton() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <ToggleContainer onClick={toggleTheme} $isDark={isDark}>
            <ToggleCircle $isDark={isDark} />
        </ToggleContainer>
    );
}


