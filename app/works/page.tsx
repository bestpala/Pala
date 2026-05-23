import type { Metadata } from "next";
import { getAllWorks } from "@/lib/works";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { WorkList } from "@/components/works/WorkList";

export const metadata: Metadata = {
  title: "作品",
  description: "大会、社区、内容、研究与合作的代表作档案。",
};

export default function WorksPage() {
  const works = getAllWorks();

  return (
    <>
      <PageHeader
        title="作品"
        description="过往项目、活动、内容、社区产品与研究报告——按时间沉淀的行业档案。"
      />
      <section className="py-14 sm:py-16">
        <Container narrow>
          <WorkList works={works} />
        </Container>
      </section>
    </>
  );
}
