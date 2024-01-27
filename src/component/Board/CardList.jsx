import styled from "styled-components";
import Card from "./Card";

const CardListComp = styled.section`
  .container {
  }
`;

const CardList = ({ data }) => {
  return (
    <>
      <CardListComp>
        <div className="container">
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
        </div>
      </CardListComp>
    </>
  );
};
export default CardList;
