import { styled } from "styled-components";
import MonthlyChart from "../../component/Chart/MonthlyChart";
import MemTr from "../../component/Adminstrator/AdminBoard/MemTableElement";
import MemberApi from "../../api/MemberApi";
import { useEffect, useState } from "react";
import Modal from "../../util/Modal";
import useTokenAxios from "../../hooks/useTokenAxios";
import PaginationUtil from "../../util/Pagination/Pagination";
import LoginTypeChart from "../../component/Chart/LoginTypeChart";

const AdminMemberComp = styled.div`
  padding-top: 60px;
  .container {
    min-width: 1200px;
    padding: 40px 30px;
    border-radius: 5px;
    margin-left: 50px;
    h2 {
      margin-bottom: 50px;
      font-size: 1.7em;
      font-weight: 600;
      // 밑줄
      display: inline-block;
      padding: 0 5px;
      padding-bottom: 14px;
      border-bottom: 3px solid var(--GREY);
    }
    .chartBox {
      display: flex;
      margin-bottom: 30px;
    }
    .tableBox {
      width: 100%;
      padding-bottom: 10px;
      overflow-x: auto;
      text-align: center;
      table {
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow-x: scroll;

        thead {
          tr {
            border-radius: 5px;
            th {
              /* border: 1px solid blue; */
              color: var(--BLACK);
              font-weight: 600;
              font-size: 1em;
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
          tr {
            td {
              /* border: 1px solid red; */
              padding: 10px;
              vertical-align: middle;
              font-size: 0.9rem;
              &.center {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
`;
const AdminMember = () => {
  // const [page, setPage] = useState(0);
  // const [memData, setMemData] = useState([]);
  const [editId, setEditId] = useState("");
  const memData = [
    {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      alias: "햄스터는 햄햄",
      name: "햄토리",
      email: "hamham1234@gmail.com",
      phone: "010-8888-8888",
      iskakao: "연동완료",
      membership: "미가입",
      joinDate: "2023.12.12",
      withdraw: "회원",
      addr: "서울시 강남구 역삼동",
    },
    {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      alias: "햄스터는 햄햄",
      name: "햄토리",
      email: "hamham1234@gmail.com",
      phone: "010-8888-8888",
      iskakao: "연동완료",
      membership: "미가입",
      joinDate: "2023.12.12",
      withdraw: "회원",
      addr: "서울시 강남구 역삼동",
    },
    {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      alias: "햄스터는 햄햄",
      name: "햄토리",
      email: "hamham1234@gmail.com",
      phone: "010-8888-8888",
      iskakao: "연동완료",
      membership: "미가입",
      joinDate: "2023.12.12",
      withdraw: "회원",
      addr: "서울시 강남구 역삼동",
    },
  ];

  return (
    <>
      <AdminMemberComp>
        <div className="container">
          <h2>회원 정보 관리</h2>
          <div className="chartBox">
            <MonthlyChart />
            <LoginTypeChart />
          </div>
          <div className="tableBox">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>유저</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                  <th>카카오연동</th>
                  <th>멤버십</th>
                  <th>등록날짜</th>
                  <th>탈퇴정보</th>
                  <th>주소</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* map으로 반복할 요소 */}
                {memData &&
                  memData.map((data, index) => (
                    <MemTr
                      key={data.email}
                      data={data}
                      index={index}
                      setId={setEditId}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminMemberComp>
    </>
  );
};
export default AdminMember;
