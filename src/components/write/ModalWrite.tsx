import styled from '@emotion/styled';
import Image from 'next/image';
import { IntroductType } from '../../pages/write';
import { ChangeEvent, useState } from 'react';
import { Camera } from '../../assets';

interface PropsType {
    setModal: (modal: boolean) => void;
    modal: boolean;
    Introduct: IntroductType;
    setIntroduct: (Introduct: IntroductType) => void;
}

function ModalWrite({ setModal, Introduct, setIntroduct, modal }: PropsType) {
    const [url, seturl] = useState<string>('');
    const ModalOff = () => setModal(false);

    const ShortIntroChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setIntroduct({ ...Introduct, shortIntro: e.target.value.slice(0, 150) });

    const FileImgChange = (e: ChangeEvent<HTMLInputElement>) => {
        const Filer = new FileReader();
        Filer.onloadend = () => Filer.result && seturl(Filer.result.toString());
        if (e.target.files) {
            Filer.readAsDataURL(e.target.files[0]);
            setIntroduct({ ...Introduct, mainImg: e.target.files[0] });
        }
    };

    return (
        modal && (
            <_Wrapper>
                <_SummitTemple>
                    <_ShortIntro>
                        <_ImgUploader
                            type="file"
                            id="uploader"
                            onChange={FileImgChange}
                            accept=".gif, .jpg, .png, .svg"
                        />
                        <_ImgBox htmlFor="uploader" border={!!Introduct.mainImg}>
                            {Introduct.mainImg ? (
                                <Image
                                    src={
                                        typeof Introduct.mainImg === 'string'
                                            ? Introduct.mainImg
                                            : url
                                    }
                                    alt="file_error"
                                    width={600}
                                    height={325}
                                    objectFit="cover"
                                />
                            ) : (
                                <Image src={Camera} width={20} height={20} />
                            )}
                        </_ImgBox>
                        <_Content
                            value={Introduct.shortIntro}
                            onChange={ShortIntroChange}
                            placeholder="자신의 게시물을 짧게 설명해 주세요."
                        />
                        <_ContentLength>{`${Introduct.shortIntro.length} / 150`}</_ContentLength>
                    </_ShortIntro>
                    <_OptionButton summit={true}>작성하기</_OptionButton>
                    <_OptionButton summit={false} onClick={ModalOff}>
                        취소
                    </_OptionButton>
                </_SummitTemple>
            </_Wrapper> 
        )
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

const _Content = styled.textarea`
    width: 550px;
    height: 200px;
    padding: 15px 15px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.color.main};
    border-radius: 10px;
    resize: none;
`;

const _ContentLength = styled.div`
    color: ${({ theme }) => theme.color.main};
`;

const _ImgBox = styled.label<{ border: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 325px;
    border: 1px solid ${({ theme, border }) => theme.color[border ? 'white' : 'black']};
    background-color: ${({ theme, border }) => theme.color[border ? 'white' : 'gray500']};
`;

const _ImgUploader = styled.input`
    display: none;
`;

export default ModalWrite;
