import AddIcon from "@suid/icons-material/Add";
import Skeleton from "@suid/material/Skeleton";
import Typography from "@suid/material/Typography";
import { createEffect, createSignal, For, JSXElement, Show } from "solid-js";
import { FloatingButton } from "src/shared/components/button/FloatingButton";
import { CardWithPicture } from "src/shared/components/card/CardWithPicture";
import { Company } from "src/shared/interfaces/company";
import { CompaniesService } from "src/shared/services/api/companies";
import { CreateCompanyForm } from "./component/CreateCompanyForm";

export const Companies = (): JSXElement => {
  const [companies] = createSignal<Company[]>([]);

  createEffect(() => {
    const [, { mutate }] = CompaniesService.myCompanies();
    mutate(companies);
  });

  const [isModalOpen, setIsModalOpen] = createSignal(false);

  return (
    <>
      <Typography style={{ margin: "48px" }} variant="h2">
        Vos entreprises
      </Typography>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            gap: "16px",
            "flex-wrap": "wrap",
            "justify-content": "center",
            "align-items": "center",
          }}
        >
          <Show when={companies()} fallback={<Skeleton />}>
            <For each={companies()}>{(company: any) => <CardWithPicture {...company} />}</For>
          </Show>
        </div>
        <FloatingButton
          onClick={() => setIsModalOpen(true)}
          icon={<AddIcon sx={{ mr: 1 }} />}
          text={"Créer une entreprise"}
          color={"fade"}
        />
      </div>
      <CreateCompanyForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
