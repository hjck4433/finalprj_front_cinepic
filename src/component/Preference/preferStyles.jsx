import { styled } from "styled-components";

const PreferComp = styled.section`
  padding-bottom: 100px;
  .container {
    padding-top: 50px;
    h2 {
      margin-left: 10%;
      padding-bottom: 30px;
    }
    .searchSel {
      &.selDirector {
        margin-bottom: 50px;
      }
      h3 {
        margin-left: 10%;
        color: var(--RED);
        padding-bottom: 30px;
      }
      .searchBar {
        width: 80%;
        height: 210px;
        margin: 0 auto;
        padding-top: 50px;
        border: 1px solid var(--BLACK);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .search {
          display: flex;
          padding: 0 5px;
          justify-content: space-between;
          width: 300px;
          border-bottom: 1px solid var(--BLACK);
          cursor: pointer;
          text-align: center;
          input {
            border: none;
            outline: none;
            text-align: left;
            font-size: 1.1em;
          }
        }
        .selBox {
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;
          .sel {
            background-color: rgba(204, 204, 204, 0.5);
            border-radius: 50px;
            padding: 13px;
            margin-right: 20px;
            span:nth-child(1) {
              margin-right: 10px;
              font-weight: bold;
            }
            span:nth-child(2) {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export default PreferComp;
