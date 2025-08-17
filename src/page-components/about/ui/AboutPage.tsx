import { Bio } from "@/entities/user";
import { User } from "@/entities/user/model/types";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Layout } from "@/widgets/layout";

interface AboutPageProps {
  siteTitle: string;
  author: string;
  githubUrl?: string;
  user: User;
  projects?: Project[];
  skills?: string[];
  timeline?: TimelineItem[];
  className?: string;
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  links?: {
    github?: string;
    demo?: string;
    post?: string;
  };
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: "work" | "hobby" | "project" | "achievement";
}

export function AboutPage({
  siteTitle,
  author,
  githubUrl,
  user,
  projects = [],
  skills = [],
  timeline = [],
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

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">🛠</span>
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">🚀</span>
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.links && (
                        <div className="flex gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              GitHub
                            </a>
                          )}
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Demo
                            </a>
                          )}
                          {project.links.post && (
                            <a
                              href={project.links.post}
                              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              Post
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Timeline Section */}
        {timeline.length > 0 && (
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="mr-2">📅</span>
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground">
                            {item.date}
                          </span>
                          <Badge
                            variant={
                              item.type === "work"
                                ? "default"
                                : item.type === "hobby"
                                ? "secondary"
                                : item.type === "project"
                                ? "outline"
                                : "destructive"
                            }
                            className="text-xs"
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Contact Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2">💬</span>
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                이야기를 나누고 싶으시다면 편하게 연락주세요!
              </p>
              <div className="flex items-center space-x-4">
                {user.email && (
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Email
                  </a>
                )}
                {/* {user.social?.github && (
                  <a
                    href={user.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                )}
                {user.social?.linkedin && (
                  <a
                    href={user.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    LinkedIn
                  </a>
                )} */}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
