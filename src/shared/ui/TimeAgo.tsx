"use client";

import { formatTimeAgo } from "@/shared/lib/utils";
import { useEffect, useState } from "react";

interface TimeAgoProps {
  timestamp: string | Date;
  className?: string;
}

export function TimeAgo({ timestamp, className }: TimeAgoProps) {
  const timestampStr =
    timestamp instanceof Date ? timestamp.toISOString() : timestamp;

  const [시간전, set시간전] = useState(() => formatTimeAgo(timestampStr));

  useEffect(() => {
    const 시간업데이트 = () => {
      set시간전(formatTimeAgo(timestampStr));
    };

    const interval = setInterval(시간업데이트, 60000);

    return () => clearInterval(interval);
  }, [timestampStr]);

  return <span className={className}>{시간전}</span>;
}
