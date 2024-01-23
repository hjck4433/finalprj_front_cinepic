import styled from "styled-components";
import BarChart from "../../component/Chart/BarChart";
import { useState, useEffect } from "react";
import Tr from "../../component/Adminstrator/AdminBoard/TableElement";

const AdminBoardComp = styled.div`
  padding-top: 8%;
  .container {
    min-width: 1200px;
    padding: 40px 30px;
    margin: 0;
    margin-left: 50px;
    h2 {
      margin-bottom: 30px;
    }
    .chartBox {
      margin-bottom: 30px;
    }
    .tableBox {
      width: 100%;
      padding: 50px 30px;
      overflow-x: auto;
      background-color: var(--GREY);
      text-align: center;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      /* vertical-align: middle; */
      /* margin: 0 auto; */
      table {
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        padding: 10px;
        thead {
          tr {
            border-radius: 10px;

            th {
              color: #333;
              font-weight: 600;
              font-size: 1.1em;
              background-color: white;
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
          td {
            padding: 10px;
            color: var(--BLACK);
          }
        }
      }
    }
  }
`;
const AdminBoard = () => {
  const [categoryActive, setCategoryActive] = useState(true);
  const [gatherActive, setGatherActive] = useState(true);
  const dataList = [
    {
      alias: "시니",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title: "청룡의 해 드래곤 길들이기 함께봐요! 용띠 환영 :)",
      count: 120,
      regDate: "2024.2.3",
      category: "씨네크루",
      gatherType: "온라인",
    },
    {
      alias: "시니",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title: "청룡의 해 드래곤 길들이기 함께봐요! 용띠 환영 :)",
      count: 120,
      regDate: "2024.2.3",
      category: "씨네크루",
      gatherType: "온라인",
    },
    {
      alias: "시니",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title: "청룡의 해 드래곤 길들이기 함께봐요! 용띠 환영 :)",
      count: 120,
      regDate: "2024.2.3",
      category: "씨네크루",
      gatherType: "온라인",
    },
    {
      alias: "시니",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title: "청룡의 해 드래곤 길들이기 함께봐요! 용띠 환영 :)",
      count: 120,
      regDate: "2024.2.3",
      category: "씨네크루",
      gatherType: "온라인",
    },
  ];
  return (
    <>
      <AdminBoardComp>
        <div className="container">
          <h2>게시글 관리</h2>
          <div className="chartBox">
            <BarChart />
          </div>
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
                {dataList &&
                  dataList.map((data, index) => (
                    <Tr key={data.title} data={data} index={index} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminBoardComp>
    </>
  );
};
export default AdminBoard;
