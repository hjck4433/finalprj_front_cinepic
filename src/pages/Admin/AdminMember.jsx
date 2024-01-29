import { styled } from "styled-components";
import MonthlyChart from "../../component/Chart/MonthlyChart";
import MemTr from "../../component/Adminstrator/AdminBoard/MemTr";
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
  // 페이지네이션 관련
  const [totalPage, setTotalPage] = useState(5);
  const [page, setPage] = useState(1);
  const [memData, setMemData] = useState([]);
  const [editId, setEditId] = useState("");

  // 멤버정보 불러오기
  const adminMemList = async (page) => {
    const rsp = await MemberApi.memberPage(page);
    if (rsp.data !== null) {
      setMemData(rsp.data);
    }
  };
  const getAdminMemList = useTokenAxios(() => adminMemList(page));
  const getFirstPage = useTokenAxios(() => adminMemList(1));

  const fetchPageList = async () => {
    setPage(1);
    const res = await MemberApi.getTotalPage();
    if (res.data !== null) {
      setTotalPage(res.data);
      getFirstPage();
    }
  };
  const getTotalPage = useTokenAxios(fetchPageList);

  useEffect(() => {
    getAdminMemList();
  }, [page]);

  useEffect(() => {
    getTotalPage();
  }, []);

  // 삭제 모달
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
  };

  const deleteMem = async () => {
    const res = await MemberApi.deleteMem(editId);
    if (res.data) {
      // console.log("회원 삭제 성공");
      closeModal();
      getTotalPage(); // 멤버 삭제하고 나면 멤버리스트 다시 불러(리스트 부를 때 토큰 필요)
    }
  };
  const memDelete = useTokenAxios(deleteMem);

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
                      deleteModal={() => {
                        handleModal("삭제", "삭제하시겠습니까?", true);
                      }}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <PaginationUtil
            totalPage={totalPage}
            limit={10}
            page={page}
            setPage={setPage}
          />
        </div>
        <Modal
          open={openModal}
          close={closeModal}
          header={modalHeader}
          children={modalMsg}
          type={modalType}
          confirm={() => {
            memDelete();
          }}
        />
      </AdminMemberComp>
    </>
  );
};
export default AdminMember;
