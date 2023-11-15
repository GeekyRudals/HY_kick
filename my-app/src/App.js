import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import Ranking from "./component/rank/Ranking";
import Schedule from "./component/schedule/Schedule";
import Squad from "./component/Squad";
import Register from "./component/register/Register"
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import Team from './component/team_pages/Team';
import gaeballogo from './component/team_image/gaebal.jpg';
import cselogo from './component/dept_image/cse.jpg';
import Formation from './component/Formation';

function App() {
  return (
    <>
      <h1>HY_Kick</h1>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/register" element={<Register />} />
          //선봉리그
          <Route path="/gaebal" element={<Team teamName="개발" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/maepung" element={<Team teamName="메풍" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/junsa" element={<Team teamName="전사" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/socc3" element={<Team teamName="SOCC3" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/alssa" element={<Team teamName="알싸" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/hyus" element={<Team teamName="HYUS" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/ufc" element={<Team teamName="UFC" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          //공대리그
          <Route path="/shootang" element={<Team teamName="슈탱" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/ausoc" element={<Team teamName="AUSOC" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/hymse" element={<Team teamName="HYMSE" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/sinhwa" element={<Team teamName="신화" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/foryou" element={<Team teamName="포유" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/lala" element={<Team teamName="LALA" teamLogo={gaeballogo} deptLogo={cselogo}/>} />
          <Route path="/hyulshe" element={<Team teamName="혈쉬" teamLogo={gaeballogo} deptLogo={cselogo}/>} />

          <Route path="/formation" element={<Formation formation="3-5-2" players={['이름1', '이름2', '이름3', '이름4', '이름5', '이름6', '이름7', '이름8', '이름9', '이름10', '이름11']} />} />
        </Route>
      </Routes>
      
      <footer>HY_Kick</footer>
    </>
  );
}

export default App;
