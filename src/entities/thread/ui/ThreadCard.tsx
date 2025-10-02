import { Thread } from "@/entities/thread/lib/threads";
import { formatTimeAgo } from "@/shared/lib/utils";
import { Card, CardContent } from "@/shared/ui/card";

interface ThreadCardProps {
  thread: Thread;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-3">
          <span className="text-sm font-medium">{thread.author}</span>
          <span className="text-sm text-muted-foreground mx-2">·</span>
          <span className="text-sm text-muted-foreground">
            {formatTimeAgo(thread.timestamp)}
          </span>
        </div>
        <p className="whitespace-pre-wrap text-sm leading-relaxed">
          {thread.content}
        </p>
      </CardContent>
    </Card>
  );
}
