import styled from "@emotion/styled";
import { Col, Input, Row } from "antd";
import { gutter } from "./MovieListItem";

const SearchRowContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SearchRow = ({ onChange, searchTerm }) => {
  return (
    <SearchRowContainer>
      <Row gutter={gutter}>
        <Col span={8}>
          <Input.Search
            placeholder="Search"
            value={searchTerm}
            onChange={onChange}
          />
        </Col>
      </Row>
    </SearchRowContainer>
  );
};
export default SearchRow;
