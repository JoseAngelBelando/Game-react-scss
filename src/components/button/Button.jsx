import { ButtonStyled } from './button.styles'; // Importa los estilos

const Button = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;