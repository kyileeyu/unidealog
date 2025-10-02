import { Thread } from "@/entities/thread/lib/threads";
import { formatTimeAgo } from "@/shared/lib/utils";
import { Card, CardContent } from "@/shared/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import { SITE_CONFIG } from "@/shared/config/site";

interface ThreadCardProps {
  thread: Thread;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  const avatarUrl = `https://github.com/${
    process.env.NEXT_PUBLIC_GITHUB_USERNAME || "kyileeyu"
  }.png?size=100`;

  return (
    <Card>
      <CardContent>
        <div className="flex gap-3">
          <Avatar className="h-8 w-8 flex-shrink-0">
            <AvatarImage src={avatarUrl} alt={SITE_CONFIG.author.name} />
            <AvatarFallback>
              {SITE_CONFIG.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <span className="text-sm font-medium">{thread.title}</span>
              <span className="text-sm text-muted-foreground mx-2">·</span>
              <span className="text-sm text-muted-foreground">
                {formatTimeAgo(thread.timestamp)}
              </span>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed">
              {thread.content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
