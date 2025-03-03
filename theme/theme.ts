// theme.ts
export const lightTheme = {
    colors: {
        background: "#F5F5F5",    // Fundo geral claro
        cardBackground: "#FFFFFF",// Fundo de cards e painéis
        text: "#333333",          // Texto escuro para boa legibilidade
        primary: "#007BFF",       // Azul - cor principal (botões, links)
        secondary: "#FF9800",     // Laranja - destaques e CTAs secundários
        accent: "#28A745",        // Verde - indicações positivas/exitosas
        error: "#DC3545",         // Vermelho - alertas ou erros
        border: "#DDDDDD",        // Bordas sutis para separar seções
    },
};

export const darkTheme = {
    colors: {
        background: "#121212",    // Fundo escuro
        cardBackground: "#1E1E1E",// Fundo de cards e painéis em tom escuro
        text: "#E0E0E0",          // Texto claro para contraste no fundo escuro
        primary: "#007BFF",       // Azul continua sendo a cor principal para consistência
        secondary: "#FF9800",     // Laranja para destaques
        accent: "#28A745",        // Verde para indicações positivas
        error: "#DC3545",         // Vermelho para erros/alertas
        border: "#333333",        // Bordas com tom intermediário para o dark
    },
};
