import { Metadata } from "next";
import { NewsPageLayout } from "@/components/NewsPage/NewsPage";

export const metadata: Metadata = {
  title: 'Новости "Аземша и партнеры"',
  description:
    "Актуальные новости об аудите организаций и изменения в законодательстве. Следите за последними обновлениями и правовыми изменениями в сфере аудита",
};

export default function NewsPage() {
  return <NewsPageLayout />;
}
