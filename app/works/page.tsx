import type { Metadata } from "next";
import { getAllWorks } from "@/lib/works";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { WorkList } from "@/components/works/WorkList";

export const metadata: Metadata = {
  title: "品牌与市场作品",
  description: "技术品牌、产品传播、内容策划、行业活动与社区运营的代表案例。",
};

export default function WorksPage() {
  const works = getAllWorks();

  return (
    <>
      <PageHeader
        title="品牌与市场作品"
        description="围绕品牌定位、内容策划、行业活动与社区运营整理的代表案例。每项作品都说明我的职责和可核验的结果。"
      />
      <section className="py-14 sm:py-16">
        <Container narrow>
          <WorkList works={works} />
        </Container>
      </section>
    </>
  );
}
