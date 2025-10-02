"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import { SITE_CONFIG } from "@/shared/config/site";
import { getUserAvatarUrl } from "../lib/utils";
import { User } from "../model/types";

interface UserAvatarProps {
  user?: Partial<User>;
  size?: number;
  className?: string;
}

export function UserAvatar({ user, size = 100, className }: UserAvatarProps) {
  const name = user?.name || SITE_CONFIG.author.name;
  const avatar = user?.avatar || SITE_CONFIG.author.avatar;

  const avatarUrl = user
    ? getUserAvatarUrl(user as User, size)
    : `https://github.com/${avatar}.png?size=${size}`;

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
