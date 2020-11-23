import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { apiActions } from "./modules/api";

import { PollPanel } from "./components/PollPanel";
import { PollDescriptionList } from "./components/PollItemList";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 720px) 1fr;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(apiActions.loadPollsResult.request());
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <StyledContainer>
      <div></div>
      <div>
        <PollPanel />
        <PollDescriptionList />
      </div>
      <div></div>
    </StyledContainer>
  );
}

export default App;
