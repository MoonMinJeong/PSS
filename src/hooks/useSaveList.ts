import { useEffect, useState } from 'react';
import { deletePost } from '../apis/notice';
import { getSavePost } from '../apis/profile';
import { GetPostResponce } from '../models/profile/responce';

export const useSaveList = () => {
    const [saveNotice, setNotice] = useState<GetPostResponce>({
        notice_list: [],
        profile_image: '',
        nickname: '',
        email: '',
        notice_count: 0,
    });

    useEffect(() => {
        getSavePost().then((data) => setNotice(data.data));
    }, []);

    const clientRemove = (notice_Id: string) => {
        deletePost(notice_Id).then(() => {
            const Notices = [...saveNotice.notice_list].filter((e) => e.notice_id !== notice_Id);
            setNotice({ ...saveNotice, notice_list: Notices });
        });
    };
    return { saveNotice, clientRemove } as const;
};
