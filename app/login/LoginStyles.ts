// styles/LoginStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 1rem;
`;

export const InputGroup = styled.div`
  margin-top: 1rem;
`;

export const Label = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const LinkText = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SecondaryLink = styled(LinkText)`
  color: #ff9800;
`;
