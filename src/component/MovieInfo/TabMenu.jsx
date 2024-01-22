import { useState } from "react";
import styled from "styled-components";
import TabInfo from "./TabInfo";
import TabActor from "./TabActor";

const TabMenuComp = styled.section`
background-color: beige;
padding: 5% 0;
  .container {
    /* padding: 5% 0; */
    ul {
      display: flex;
      li {
        width: calc(100% / 4);
        border-bottom: 1px solid var(--ORANGE);
        text-align: center;
        padding: 2% 5%;
        cursor: pointer;
      }
      .focused {
        color: var(--ORANGE);  
      }
    }

  }
  
`;

const TabMenu = () => {
  const [currentTab, setTab] = useState(0);


  return (
    <>
      <TabMenuComp>
        <div className="container">
          <ul>
            <li onClick={() => {setTab(0)}} className={currentTab === 0 ? "focused" : ""}>주요 정보</li>
            <li onClick={() => {setTab(1)}} className={currentTab === 1 ? "focused" : ""}>감독 / 배우</li>
            <li onClick={() => {setTab(2)}} className={currentTab === 2 ? "focused" : ""}>스틸 컷</li>
            <li onClick={() => {setTab(3)}} className={currentTab === 3 ? "focused" : ""}>씨네포스트</li>
          </ul>
          {
            currentTab === 0 && <TabInfo/>
          }
          {
            currentTab === 1 && <TabActor/>
          }
        </div>
      </TabMenuComp>
    </>
  );
};
export default TabMenu;