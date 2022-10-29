import { FileUpload } from "../input/FileUpload";
import { JSXElement } from "solid-js";

export interface FileInputStore {
  file: any;
  fileName: string;
  filePreview: any;
}

export const FileFormInput = (): JSXElement => {

  return (
    <div>
      <FileUpload style={{ width: "100%", "justify-content": "space-evenly" }} />
    </div>
  );
};
