import styled from "@emotion/styled";
import { Card, Col, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchRow from "../components/Search";
import { getMovies } from "../redux/movies/actions";

const { Meta } = Card;

const DateContainer = styled.div`
  padding-bottom: 20px;
`;

const MovieSearcherContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const NoMoviesTextContainer = styled.div`
  color: white;
`;

const Title = styled.h1`
  color: white;
`;

export const gutter = [
  { xs: 8, sm: 16, md: 24, lg: 32 },
  { xs: 8, sm: 16, md: 24, lg: 32 },
];

const MovieListItems = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState(undefined);
  const movies = useSelector((state) => {
    return state.MovieReducer.movies;
  });
  const loading = useSelector((state) => state.MovieReducer.loading);

  useEffect(() => {
    dispatch(getMovies({ title: searchTerm, date }));
  }, [date, dispatch, searchTerm]);

  const handleSearchTermChange = (e) => setSearchTerm(e.target.value);
  const movieCols = movies.map((movie) => (
    <Col key={movie.id} xs={24} sm={12} lg={8}>
      <Link to={`/movie/${movie.id}`}>
        <Card
          hoverable
          cover={
            <>
              <img src={movie.image} alt="movie-display" />
            </>
          }
        >
          <Meta title={movie.title} description={movie.description} />
        </Card>
      </Link>
    </Col>
  ));

  const handleDateChange = (e) => setDate(e.target.value);

  return (
    <MovieSearcherContainer>
      <Title>Browse the TOP 250 movies with these filters</Title>
      <SearchRow onChange={handleSearchTermChange} searchTerm={searchTerm} />
      <DateContainer>
        <Row gutter={gutter}>
          <Col span={8}>
            <input type="date" onChange={handleDateChange} value={date} />
          </Col>
        </Row>
      </DateContainer>
      {loading ? (
        <Skeleton />
      ) : (
        <Row gutter={gutter}>
          {movieCols.length > 0 ? (
            movieCols
          ) : (
            <Col>
              <NoMoviesTextContainer>
                No movies were found for the filters
              </NoMoviesTextContainer>
            </Col>
          )}
        </Row>
      )}
    </MovieSearcherContainer>
  );
};

export default MovieListItems;
