import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container narrow>
      <div className="py-32 text-center">
        <h1 className="text-2xl font-medium text-foreground">页面未找到</h1>
        <p className="mt-4 text-muted">你要访问的内容可能已移动或不存在。</p>
        <Link
          href="/"
          className="mt-8 inline-block text-accent hover:underline"
        >
          返回首页
        </Link>
      </div>
    </Container>
  );
}
