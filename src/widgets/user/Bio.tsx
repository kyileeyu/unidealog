"use client";

import { UserAvatar } from "./UserAvatar";
import { Badge } from "@/shared/ui/badge";
import { SITE_CONFIG } from "@/shared/config/site";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface BioProps {
  showSocial?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Bio({ showSocial = true, size = "md" }: BioProps) {
  const { name, bio, socialLinks } = SITE_CONFIG.author;

  const socialLinksArray = [
    {
      platform: "github",
      url: socialLinks.github,
      icon: Github,
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: socialLinks.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
  ].filter((link) => link.url);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-2">{name}</h1>
          {bio.description.map((desc, index) => (
            <p key={index} className="text-base text-muted-foreground">
              {desc}
            </p>
          ))}
        </div>
        <UserAvatar size={400} className="h-28 w-28" />
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

        {showSocial && socialLinksArray.length > 0 && (
          <div className="flex items-center space-x-2 mt-2">
            {socialLinksArray.map(({ platform, url, icon: Icon, label }) => (
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
