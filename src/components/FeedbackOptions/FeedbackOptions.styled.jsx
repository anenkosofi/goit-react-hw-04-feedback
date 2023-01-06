import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin: 0 auto;
  }
`;

const Button = styled.button`
  padding: 15px 20px;

  width: 140px;

  font-size: 22px;
  text-transform: capitalize;

  color: #ffffff;
  background: linear-gradient(#fe3b5a, #fd7914);
  border: none;
  border-radius: 10px;

  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    animation: pulse 1s;
    box-shadow: 0 0 0 30px transparent;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 tomato;
    }
  }
`;

export { ButtonContainer, Button };
