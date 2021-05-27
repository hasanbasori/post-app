import styled from "@emotion/styled";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: khaki;
  height: 30px;
  width: 100px;
  cursor: pointer;
  color: ${(props) => (props.primary ? "red" : "green")};
`;

function Button(props) {
  return (
    <StyledButton onClick={props.onClick} primary={props.primary} {...props}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
