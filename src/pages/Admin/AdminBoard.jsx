import styled from "styled-components";
const AdminBoardComp = styled.div`
  padding-top: 8%;
  .container {
    min-width: 1200px;
    background-color: var(--VIOLET);
    padding: 40px 30px;
    margin: 0;
    margin-left: 50px;
    h2 {
      margin-bottom: 30px;
    }
    .tableBox {
      width: 100%;
      padding-bottom: 10px;
      overflow-x: auto;
      table {
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        thead {
          tr {
            border-radius: 10px;
            th {
              color: #333;
              font-weight: 600;
              font-size: 1.2em;
              background-color: var(--GREY);
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
`;
const AdminBoard = () => {
  return (
    <>
      <AdminBoardComp>
        <div className="container">
          <h2>게시글 관리</h2>
          <div className="tableBox">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>작성자</th>
                  <th>게시글 제목</th>
                  <th>조회수</th>
                  <th>작성 날짜</th>
                  <th>대분류</th>
                  <th>소분류</th>
                  <th>수정</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* map으로 반복할 요소 */}
                {/* {dataList &&
                  dataList.map((data, index) => (
                    <MemoizedTr
                      key={data.id}
                      data={data}
                      index={index}
                      revise={revise}
                      setRevise={setRevise}
                      clickOk={clickOk}
                      clickDel={clickDel}
                      editId={editId}
                    />
                  ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </AdminBoardComp>
    </>
  );
};
export default AdminBoard;
