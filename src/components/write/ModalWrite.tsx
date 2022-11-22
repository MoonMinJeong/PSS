import styled from '@emotion/styled';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Camera } from '../../assets';
import { uploadImage } from '../../apis/image';
import { PostRequest } from '../../models/notice/request';
import { useRouter } from 'next/router';
import { writePost } from '../../apis/notice';

interface PropsType {
    setModal: (modal: boolean) => void;
    modal: boolean;
    Introduct: PostRequest;
    setIntroduct: Dispatch<SetStateAction<PostRequest>>;
}

function ModalWrite({ setModal, Introduct, setIntroduct, modal }: PropsType) {
    const ModalOff = () => setModal(false);
    const router = useRouter();

    const FileImgChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) return;

        const Filer = new FileReader();
        const IMG = e.target.files[0];
        let url = '';
        Filer.onloadend = () => {
            url = URL.createObjectURL(IMG);
            setIntroduct(() => ({ ...Introduct, image_url: url }));
        };

        const Form = new FormData();
        Form.set('files', IMG);

        try {
            uploadImage(Form).then((data) => {
                const img = data.data.images[0];
                setIntroduct({ ...Introduct, image_url: img });
            });
        } catch (e) {
            URL.revokeObjectURL(url);
            setIntroduct({ ...Introduct, image_url: '' });
        }
    };

    const PostSummit = () => writePost(Introduct).then(() => router.push('/'));

    return modal ? (
        <_Wrapper>
            <_SummitTemple>
                <_ShortIntro>
                    <_ImgUploader
                        type="file"
                        id="uploader"
                        onChange={FileImgChange}
                        accept=".gif, .jpg, .png, .svg"
                    />
                    <_ImgBox htmlFor="uploader" border={!!Introduct.image_url}>
                        {Introduct.image_url ? (
                            <Image
                                src={Introduct.image_url}
                                alt="file_error"
                                width={600}
                                height={325}
                                objectFit="cover"
                            />
                        ) : (
                            <Image src={Camera} width={20} height={20} />
                        )}
                    </_ImgBox>
                </_ShortIntro>
                <_OptionButton summit={true} onClick={PostSummit}>
                    작성하기
                </_OptionButton>
                <_OptionButton summit={false} onClick={ModalOff}>
                    취소
                </_OptionButton>
            </_SummitTemple>
        </_Wrapper>
    ) : (
        <></>
    );
}

const _Wrapper = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    width: 50%;
    height: 100%;
`;

const _SummitTemple = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 120px;
    background-color: ${({ theme }) => theme.color.white};
`;

const _OptionButton = styled.button<{ summit: boolean }>`
    outline: 0;
    border: 1px solid ${({ summit, theme }) => theme.color[summit ? 'main' : 'systemRed']};
    background-color: ${({ summit, theme }) => theme.color[summit ? 'main' : 'systemRed']};
    color: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 25px;
    margin: 10px;
    float: right;
`;

const _ShortIntro = styled.div`
    height: 600px;
    margin: 60px 0 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const _ImgBox = styled.label<{ border: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 325px;
    border: 1px solid ${({ theme, border }) => theme.color[border ? 'white' : 'black']};
    background-color: ${({ theme, border }) => theme.color[border ? 'white' : 'gray300']};
`;

const _ImgUploader = styled.input`
    display: none;
`;

export default ModalWrite;
