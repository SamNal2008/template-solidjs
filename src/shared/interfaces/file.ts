import { MimeTypeEnum } from "../enums/mime-types";
import { ObjectEntity } from "./object-entity";

export interface FileEntity extends ObjectEntity {
  url: string;
  key: string;
  mimeType: MimeTypeEnum;
}
