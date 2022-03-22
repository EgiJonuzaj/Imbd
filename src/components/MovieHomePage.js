import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Image, Typography, Descriptions } from "antd";

const { Title } = Typography;
const MoviePage = () => {
  const { id } = useParams();

  const movieSelecotr = useSelector((state) =>
    state.MovieReducer.movies.find((x) => x.id === id)
  );
  console.log(id, "id");
  console.log(movieSelecotr, "movie ");
  return (
    <>
    <div style={{marginLeft: 130}}>
      <Image
        width={300}
        style={{ marginLeft: "130%", marginTop: 40 }}
        src={movieSelecotr.image}
      />
      <Title style={{ marginLeft: "25%" }} level={2}>
        {movieSelecotr.title}
      </Title>
      </div>
      
        <Descriptions style={{  backgroundColor: "white" }} title="Movie Info">
          <Descriptions.Item label="Desciption">
            {movieSelecotr.desciption}
          </Descriptions.Item>
          <Descriptions.Item label="Runtime">
            {movieSelecotr.runtimeStr}
          </Descriptions.Item>
          <Descriptions.Item label="Genres">
            {movieSelecotr.genres}
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            {movieSelecotr.imDbRating}
          </Descriptions.Item>
          <Descriptions.Item label="Stars">
            {movieSelecotr.stars}
          </Descriptions.Item>
        </Descriptions>
    </>
  );
};
export default MoviePage;
