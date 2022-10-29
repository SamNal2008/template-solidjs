import { Accessor, JSXElement, Setter } from "solid-js";
import * as Yup from "yup";
import { ModalWithForm } from "../../../shared/components/modal/ModalWithForm";
import { environment } from "../../../shared/utils/environment";

export const CreateCompanyForm = (props: { isModalOpen: Accessor<boolean>; setIsModalOpen: Setter<boolean> }): JSXElement => {
  const onSubmit = (form: any): void => {
    console.log(form.values);
  };

  return (
    <ModalWithForm
      img={`${environment.filePath}/company.png`}
      formInfos={[
        {
          initialValue: "",
          name: "name",
          label: "Nom de votre entreprise",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "phoneNumber",
          label: "Numéro de téléphone",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "description",
          label: "Description",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "website",
          label: "Site de votre entreprise",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire").url("Ce site internet n'est pas valide"),
        },
        {
          initialValue: "",
          name: "country",
          label: "Pays",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "city",
          label: "Ville",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "fullAddress",
          label: "Adresse complète",
          type: "text",
          validation: Yup.string().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "postalCode",
          label: "Code postal",
          type: "text",
          validation: Yup.number().required("Ce champs est obligatoire"),
        },
        {
          initialValue: "",
          name: "picture",
          label: "file",
          type: "file",
          validation: Yup.number().required("Ce champs est obligatoire"),
        },
      ]}
      onCancelClick={() => props.setIsModalOpen(false)}
      onConfirmationClick={onSubmit}
      title="Créer une entreprise"
      open={props.isModalOpen}
      setOpen={props.setIsModalOpen}
    />
  );
};
