import { Bio } from "@/entities/user";
import { Thread, ThreadCard } from "@/entities/thread";
import { Card, CardContent } from "@/shared/ui/card";
import { Layout } from "@/widgets/layout";

interface AboutPageProps {
  threads?: Thread[];
  className?: string;
}

export function AboutPage({ threads = [], className }: AboutPageProps) {
  return (
    <Layout className={className}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <section className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <Bio size="lg" />
            </CardContent>
          </Card>
        </section>

        {threads.length > 0 && (
          <section>
            <div className="space-y-4">
              {threads.map((thread) => (
                <ThreadCard key={thread.id} thread={thread} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
