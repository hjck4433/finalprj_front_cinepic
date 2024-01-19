import { styled } from "styled-components";

const PreferComp = styled.section`
  padding-bottom: 50px;
  @media screen and (max-width: 560px) {
    padding-bottom: 20px;
  }
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
        font-weight: 600;
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
            padding: 5px;
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
    .genderSel {
      padding-top: 50px;
      h3 {
        color: var(--RED);
        margin-left: 10%;
        padding-bottom: 30px;
        font-weight: 600;
      }

      .form_toggle {
        width: 80%;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid var(--BLACK);
        display: flex;
        justify-content: center;
        align-items: center;
        .form_radio_btn {
          width: 18%;
          height: 47px;
          border: 1px solid var(--GREY);
          border-radius: 10px;
          margin-left: 5%;
        }
        .form_radio_btn input[type="radio"] {
          display: none;
        }
        .form_radio_btn label {
          display: block;
          border-radius: 10px;
          margin: 0 auto;
          text-align: center;
          line-height: 45px;
        }
        /* Checked */
        .form_radio_btn input[type="radio"]:checked + label {
          color: var(--RED);
          border: 1px solid var(--RED);
        }
        /* Hover */
        .form_radio_btn label:hover {
          color: var(--RED);
          border: 1px solid var(--RED);
          cursor: pointer;
        }

        /* Disabled */
        .form_radio_btn input[type="radio"] + label {
          color: var(--grey);
        }
      }
    }
    .selectGenre {
      padding-top: 50px;
      h3 {
        color: var(--RED);
        margin-left: 10%;
        padding-bottom: 30px;
        font-weight: 600;
      }
      .genre {
        width: 80%;
        height: 350px;
        margin: 0 auto;
        padding: 5% 3%;
        text-align: center;
        justify-content: center;
        border: 1px solid var(--BLACK);
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        grid-template-rows: 15% 15% 15%;
        gap: 30px;
        @media screen and (max-width: 560px) {
          height: 550px;
          display: grid;
          grid-template-columns: 45% 45%;
          grid-template-rows: 10%;
          gap: 15px;
        }
        .form_checkbox_btn {
          height: 47px;
          border: 1px solid var(--GREY);
          border-radius: 10px;
        }
        .form_checkbox_btn input[type="checkbox"] {
          display: none;
        }
        .form_checkbox_btn label {
          display: block;
          border-radius: 10px;
          margin: 0 auto;
          text-align: center;
          line-height: 45px;
        }
        /* Checked */
        .form_checkbox_btn input[type="checkbox"]:checked + label {
          color: var(--RED);
          border: 1px solid var(--RED);
        }
        /* Hover */
        .form_checkbox_btn label:hover {
          color: var(--RED);
          border: 1px solid var(--RED);
          cursor: pointer;
        }

        /* Disabled */
        .form_checkbox_btn input[type="checkbox"] + label {
          color: var(--grey);
        }
      }
    }
    .buttonBox {
      text-align: center;
      button {
        margin: 40px;
        @media screen and (max-width: 560px) {
          width: 25%;
          height: 40px;
        }
      }
    }
  }
`;

export default PreferComp;
