import styled from '@emotion/styled';
import HeartButton from '../../components/postDetail/HeartButton';
import Participant from '../../components/postDetail/Participant';
import PostSummary from '../../components/postDetail/PostSummary';
import Rating from '../../components/postDetail/Rating';
import Tag from '../../components/common/Tag';
import SideInfo from '../../components/postDetail/SideInfo';
import CommentInput from '../../components/postDetail/postComment/CommentInput';
import Comment from '../../components/postDetail/postComment/Comment';
import usePostDetail from '../../hooks/usePostDetail';
import { GetServerSideProps, NextPage } from 'next';

interface PostDetailProps {
    id: string;
}

export const PostDetail: NextPage<PostDetailProps> = ({ id }) => {
    const { data: postDetail } = usePostDetail(id);

    return (
        <_PostDetailContainer>
            <HeartButton noticeId={id} />
            <_TitleBox>
                <PostSummary noticeId={id} />
                <SideInfo noticeId={id} />
            </_TitleBox>
            <_TagBox>
                {postDetail?.stacks.map((content, idx) => (
                    <Tag text={content} key={idx} />
                ))}
            </_TagBox>
            {!!postDetail?.nicknames.length && <Participant noticeId={id} />}
            {/*TODO. Content 추가*/}
            <Rating noticeId={id} />
            <CommentInput
                type="comment"
                placeholder="댓글을 입력해주세요."
                isCancel={false}
                onCancel={() => {}}
                noticeId={id}
            />
            {postDetail?.list?.map((item, idx) => (
                <Comment {...item} key={idx} />
            ))}
        </_PostDetailContainer>
    );
};

export const getServerSideProps: GetServerSideProps<{ id: string | string[] | undefined }> = async (
    ctx,
) => {
    const { params } = ctx;
    return {
        props: {
            id: params?.id,
        },
    };
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
