import { Thread } from "@/entities/thread/lib/threads";
import { formatTimeAgo } from "@/shared/lib/utils";
import { Card, CardContent } from "@/shared/ui/card";
import { UserAvatar } from "@/entities/user";

interface ThreadCardProps {
  thread: Thread;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex gap-3">
          <UserAvatar size={100} className="h-8 w-8 flex-shrink-0" />
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
