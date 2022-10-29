import { createEffect, JSXElement } from "solid-js";
import { createStore } from "solid-js/store";
import { FileInputStore } from "../form/FileFormInput";
import UploadFileIcon from "@suid/icons-material/UploadFile";
import { FloatingButton } from "../button/FloatingButton";

export const FileUpload = (props?: { style?: any; class?: string }): JSXElement => {
  const [fileInfos, setFileInfos] = createStore<FileInputStore>({
    file: null,
    fileName: "",
    filePreview: null,
  });

  const onUploadFile = (e: any): void => {
    setFileInfos({
      file: e.currentTarget.files[0],
      fileName: e.currentTarget.value,
      filePreview: URL.createObjectURL(e.currentTarget.files[0]),
    });
  };

  createEffect(() => console.log(fileInfos.file));

  return (
    <FloatingButton {...props} component="label" color="secondary" icon={<UploadFileIcon />} text="Ajouter votre photo">
      <input
        id="input-file"
        accept=".png, .jpg, .jpeg, .gif"
        style={{ display: "none" }}
        hidden
        onChange={onUploadFile}
        type="file"
      />
    </FloatingButton>
  );
};
