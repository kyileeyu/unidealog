import { Bio } from "@/entities/user";
import { User } from "@/entities/user/model/types";
import { Thread, ThreadCard } from "@/entities/thread";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Layout } from "@/widgets/layout";

interface AboutPageProps {
  siteTitle: string;
  author: string;
  githubUrl?: string;
  user: User;
  threads?: Thread[];
  skills?: string[];
  className?: string;
}

export function AboutPage({
  siteTitle,
  author,
  githubUrl,
  user,
  threads = [],
  skills = [],
  className,
}: AboutPageProps) {
  return (
    <Layout
      siteTitle={siteTitle}
      author={author}
      githubUrl={githubUrl}
      className={className}
    >
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Profile Header */}
        <section className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <Bio user={user} size="lg" />

              {/* Skills Tags */}
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Threads Section */}
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
