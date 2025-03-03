import styled from "styled-components";

interface ToggleProps {
    $isDark: boolean;
}

export const ToggleContainer = styled.button<ToggleProps>`
  background: ${({ theme }) => theme.colors.border};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  position: relative; /* necessário para posicionar o círculo */
  padding: 5px;
  width: 60px;
  height: 30px;
  transition: background 0.3s ease;
`;

export const ToggleCircle = styled.div<ToggleProps>`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: transform 0.3s ease;
  transform: ${({ $isDark }) => ($isDark ? "translateX(30px)" : "translateX(0)")};
`;