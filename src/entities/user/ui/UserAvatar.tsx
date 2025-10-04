"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import { SITE_CONFIG } from "@/shared/config/site";

interface UserAvatarProps {
  size?: number;
  className?: string;
}

export function UserAvatar({ size = 100, className }: UserAvatarProps) {
  const { name, avatar } = SITE_CONFIG.author;
  const avatarUrl = size ? `${avatar}?size=${size}` : avatar;

  const fallbackInitials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar className={className}>
      <AvatarImage src={avatarUrl} alt={name} />
      <AvatarFallback>{fallbackInitials}</AvatarFallback>
    </Avatar>
  );
}
