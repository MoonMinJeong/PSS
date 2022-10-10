import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { EditorType } from '.';

function MDEditor({ Introduct, setIntroduct }: EditorType) {
    return <Editor initialValue={Introduct.content} />;
}

export default MDEditor;
