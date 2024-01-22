import { styled } from "styled-components";
import Button from "../../util/Button";
import FaqTr from "../../component/Adminstrator/AdminFaq/FaqElement";

const AdminFaqComp = styled.div`
  padding-top: 8%;

  .container {
    min-width: 1200px;
    background-color: var(--DARKGREY);
    padding: 40px 30px;
    margin: 0;
    margin-left: 50px;
    /* border: 1px solid green; */

    .tableBox {
      width: 100%;
      padding-bottom: 10px;
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
        <h2>FAQ 관리</h2>
        <div className="container">
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
