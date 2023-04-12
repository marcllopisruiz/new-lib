import styled from "styled-components";

type CardProps = {
  title: string;
  description: string;
};

const CardWrapper = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  margin: 5%;
  border-radius: 5px;
  h1 {
    font-weight: bold;
    font-size: 2rem;
  }
`;

const Card = ({ title, description }: CardProps) => {
  return (
    <CardWrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </CardWrapper>
  );
};

export default Card;
