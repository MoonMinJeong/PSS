import styled from '@emotion/styled';
import HeartButton from '../../components/postDetail/HeartButton';
import Participant from '../../components/postDetail/Participant';
import PostSummary from '../../components/postDetail/PostSummary';
import Rating from '../../components/postDetail/Rating';
import Tag from '../../components/common/Tag';
import SideInfo from '../../components/postDetail/SideInfo';
import CommentInput from '../../components/postDetail/postComment/CommentInput';
import Comment from '../../components/postDetail/postComment/Comment';

export const PostDetail = () => {
    return (
        <_PostDetailContainer>
            <HeartButton count={25} />
            <_TitleBox>
                <PostSummary title="프소서가 어떤 프로젝트냐면요" writerName="문정민" />
                <SideInfo rating={3.5} viewCount={1000} />
            </_TitleBox>
            {/*TODO. BigTag 컴포넌트 만들어서 수정*/}
            <_TagBox>
                <Tag text="JAVA" />
                <Tag text="React" />
            </_TagBox>
            <Participant />
            {/*TODO. Content 추가*/}
            <Rating />
            <CommentInput
                count={12}
                placeholder="댓글을 입력해주세요."
                isCancel={false}
                onCancel={() => {}}
            />
            <Comment content="이게 뭐냐면 바로 댓글이에요. 댓글이라고요 ㅋ" />
        </_PostDetailContainer>
    );
};

const _PostDetailContainer = styled.div`
    position: relative;
    margin: 0 20%;
`;

const _TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const _TagBox = styled.div`
    display: flex;
    margin: 20px 0 32px;
    gap: 4px;
`;

export default PostDetail;
