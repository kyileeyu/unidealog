import { Bio } from "@/entities/user";
import { User } from "@/entities/user/model/types";
import { Thread, ThreadCard } from "@/entities/thread";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Layout } from "@/widgets/layout";
import { SITE_CONFIG } from "@/shared/config/site";

interface AboutPageProps {
  threads?: Thread[];
  className?: string;
}

export function AboutPage({
  threads = [],
  className,
}: AboutPageProps) {
  const user: User = {
    id: SITE_CONFIG.author.id,
    name: SITE_CONFIG.author.name,
    email: SITE_CONFIG.author.email,
    avatar: SITE_CONFIG.author.avatar,
    bio: {
      role: SITE_CONFIG.author.bio.role,
      description: [...SITE_CONFIG.author.bio.description],
      location: SITE_CONFIG.author.bio.location,
    },
    social: {
      github: SITE_CONFIG.author.socialLinks.github,
      linkedin: SITE_CONFIG.author.socialLinks.linkedin,
    },
  };

  return (
    <Layout
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
      className={className}
    >
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <section className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <Bio user={user} size="lg" />

              {SITE_CONFIG.author.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {SITE_CONFIG.author.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
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
