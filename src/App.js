import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import MoviePage from "./components/MovieHomePage";
import MovieListItems from "./components/MovieListItem";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <AppContainer className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MovieListItems />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="*" element={<MovieListItems />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
