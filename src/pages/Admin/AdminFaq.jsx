import { styled } from "styled-components";
import Button from "../../util/Button";
import FaqTr from "../../component/Adminstrator/AdminFaq/FaqElement";

const AdminFaqComp = styled.div`
  padding-top: 8%;

  .container {
    margin: 0;
    margin-left: 50px;
    h2 {
      display: inline-block;
      margin-bottom: 50px;
      padding: 0 8px;
      padding-bottom: 14px;
      border-bottom: 3px solid var(--GREY);
    }

    .tableBox {
      background-color: var(--DARKGREY);
      width: 100%;
      padding: 40px 30px;
      /* padding-bottom: 10px; */
      overflow-x: auto;
      table {
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        margin-bottom: 30px;
        thead {
          tr {
            border-radius: 10px;
            th {
              color: var(--BLACK);
              font-size: 1.2em;
              font-weight: 600;
              background-color: var(--IVORY);
              padding: 20px;
              &:first-child {
                border-radius: 10px 0 0 10px;
              }
              &:last-child {
                border-radius: 0 10px 10px 0;
              }
            }
          }
        }
        tbody {
        }
      }
    }
  }
  .addbutton {
    display: flex;
    justify-content: end;
    border-top: 1px solid white;
    padding-top: 30px;
  }
`;

const AdminFaq = () => {
  return (
    <>
      <AdminFaqComp>
        <div className="container">
          <h2>FAQ 관리</h2>
          <div className="tableBox">
            <table>
              <thead className="">
                <tr>
                  <th>No.</th>
                  <th>제목</th>
                  <th>수정</th>
                  <th>삭제</th>
                </tr>
              </thead>
            </table>
            <div className="addbutton">
              <Button
                children={"추가"}
                fontSize=".8em"
                width="80px"
                height="30px"
                active={true}
              />
            </div>
          </div>
        </div>
      </AdminFaqComp>
    </>
  );
};

export default AdminFaq;
