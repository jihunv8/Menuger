import styled from 'styled-components';

//import components
import PostViewer from '../common/PostViewer';
import DietColumnContainer from './DietColumnContainer';

const DietPostStyle = styled.div`
  > textarea {
    resize: none;
    display: block;
    width: 100%;
    padding: 10px;
    border: solid 1px #dadde6;
    border-radius: 5px;
    outline: none;
    cursor: default;
    margin-top: 20px;

    &:first-of-type {
      min-height: 60px;
    }

    &:last-of-type {
      min-height: 300px;
    }
  }
`;

const DietPost = ({ title, dietColumnList, subtitle, content, comments }) => {
  return (
    <PostViewer title={title} comments={comments}>
      <DietPostStyle>
        <DietColumnContainer dietColumnList={dietColumnList} readonly />
        <textarea value={subtitle} readOnly></textarea>
        <textarea value={content} readOnly></textarea>
      </DietPostStyle>
    </PostViewer>
  );
};

export default DietPost;