import React from "react";
import { Routes, Route } from "react-router-dom";
import RankingPage from "./pages/RankingPage";
import Schedule from "./component/schedule/Schedule";
import SquadMaker from "./component/Squadmaker";
import Register from "./component/register/Register"
import ResultPage from "./pages/ResultPage";
import KakaoLogin from "./component/login/KakaoLogin";
import Home from "./pages/HomePage";
import Team from './component/team_pages/Team';
import gaeballogo from './component/team_image/gaebal.jpg';
import cselogo from './component/dept_image/cse.jpg';
import Formation from './component/formation/Formation';
import Splash from "./pages/Splash";

import matches from "../src/component/matches.json"
import teams from "../src/component/teams.json"
import { useDispatch, useSelector } from "react-redux";
import { load_match } from "../src/redux/match";
import { load_ranking } from "../src/redux/ranking"
import Header from "./component/Header";

import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
export const TEAMS = gql`
  query {
    teams {
      team_id
      team_name
      wins
      draws
      losses
      department
      founding_year
      current_rank
      team_code
      league
      played
    }
  }
`;

function App() {
  const match = useSelector((state) => state.match.value);
  const ranking = useSelector((state) => state.ranking.value)
  const dispatch = useDispatch();
  dispatch(load_match(matches.match));
  dispatch(load_ranking(teams));
  const { loading, error, data } = useQuery(TEAMS);
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<KakaoLogin />} />
        <Route path="/rank" element={<RankingPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/squadmaker" element={<SquadMaker formation="포메이션" players={['민지우', '이름2', '이름3', '이름4', '이름5', '이름6', '이름7', '이름8', '이름9', '이름10', '이름11']} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result/:id" element={<ResultPage />} />
         {data && data.teams.map(team => (
          <Route
            key={team.team_id}
            path={`/team/${team.team_id}`}
            element={<Team team={team} teamLogo={team.team_id === 1 ? gaeballogo : cselogo} deptLogo={cselogo}/>}
          />
        ))}
        <Route path="/formation" element={<Formation formation="4-2-3-1" players={['이름1', '이름2', '이름3', '이름4', '이름5', '이름6', '이름7', '이름8', '이름9', '이름10', '이름11']} isResult={false} />} />
      </Routes>
    </>
  );
}

export default App;
