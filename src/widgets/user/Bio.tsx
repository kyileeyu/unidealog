"use client";

import { User, UserAvatar } from "@/entities/user";
import { Badge } from "@/shared/ui/badge";
import { SITE_CONFIG } from "@/shared/config/site";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface BioProps {
  showSocial?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Bio({ showSocial = true, size = "md" }: BioProps) {
  const user: User = {
    id: SITE_CONFIG.author.id,
    name: SITE_CONFIG.author.name,
    email: SITE_CONFIG.author.email,
    avatar: SITE_CONFIG.author.avatar,
    bio: {
      description: [...SITE_CONFIG.author.bio.description],
      location: SITE_CONFIG.author.bio.location,
    },
    social: {
      github: SITE_CONFIG.author.socialLinks.github,
      linkedin: SITE_CONFIG.author.socialLinks.linkedin,
    },
  };

  const socialLinks = [
    {
      platform: "github",
      url: user.social?.github,
      icon: Github,
      label: "GitHub",
    },
    {
      platform: "twitter",
      url: user.social?.twitter,
      icon: Twitter,
      label: "Twitter",
    },
    {
      platform: "linkedin",
      url: user.social?.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: user.social?.email ? `mailto:${user.social.email}` : undefined,
      icon: Mail,
      label: "Email",
    },
    {
      platform: "website",
      url: user.social?.website,
      icon: Globe,
      label: "Website",
    },
  ].filter((link) => link.url);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {user.name}
          </h1>
          {user.bio?.description.map((desc, index) => (
            <p key={index} className="text-base text-muted-foreground">
              {desc}
            </p>
          ))}
        </div>
        <UserAvatar user={user} size={400} className="h-28 w-28" />
      </div>

      <div className="space-y-4">
        <div className="space-y-2 space-x-2">
          {SITE_CONFIG.author.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs px-4 py-1">
              {skill}
            </Badge>
          ))}
        </div>

        {showSocial && socialLinks.length > 0 && (
          <div className="flex items-center space-x-2 mt-2">
            {socialLinks.map(({ platform, url, icon: Icon, label }) => (
              <Button
                key={platform}
                variant="ghost"
                size={size === "sm" ? "sm" : "sm"}
                asChild
                className="h-8 w-8 p-0">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
