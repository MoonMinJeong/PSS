import styled from '@emotion/styled';
import Participant from '../../components/postDetail/Participant';
import PostSummary from '../../components/postDetail/PostSummary';
import Tag from '../../components/common/Tag';
import { GetServerSideProps, NextPage } from 'next';
import MDViewer from '../../components/write/Editor/SetViewer';
import { useQuery } from 'react-query';
import { getMemoirPost } from '../../apis/notice';

interface PostDetailProps {
    id: string;
}

export const ShowReview: NextPage<PostDetailProps> = ({ id }) => {
    const { data: postDetail } = useQuery(['getReview', id], () => getMemoirPost(id));

    return (
        <_PostDetailContainer>
            <_TitleBox>{postDetail && <PostSummary postDetail={postDetail} />}</_TitleBox>
            <_TagBox>
                {postDetail?.stacks.map((content, idx) => (
                    <Tag text={content} key={idx} />
                ))}
            </_TagBox>
            {!!postDetail?.nicknames.length && <Participant postDetail={postDetail} />}
            <MDViewer content={postDetail?.content || ''}></MDViewer>
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
    margin: 80px 20% 0 20%;
    > pre {
        margin-bottom: 40px;
    }
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

export default ShowReview;
