import { Bio } from "@/entities/user";
import { User } from "@/entities/user/model/types";
import { Thread } from "@/entities/thread/lib/threads";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">웰-컴!</p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <Card>
            <CardContent className="pt-6">
              <Bio user={user} size="lg" />
            </CardContent>
          </Card>
        </section>

        {/* Skills Section - 프로필에 Badge로 표시 */}
        {skills.length > 0 && (
          <section className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Threads Section - 추후 구현 */}
        {threads.length > 0 && (
          <section>
            <div className="space-y-4">
              {threads.map((thread) => (
                <Card key={thread.id}>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {thread.author}
                    </p>
                    <p className="whitespace-pre-wrap">{thread.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
