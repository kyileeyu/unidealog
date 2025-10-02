'use client';

import { User } from '../model/types';
import { getUserAvatarUrl, getUserBioDescription } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { SITE_CONFIG } from '@/shared/config/site';
import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';

interface BioProps {
  showSocial?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Bio({ showSocial = true, size = 'md' }: BioProps) {
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

  const avatarSize = size === 'sm' ? 40 : size === 'md' ? 60 : 80;
  const avatarUrl = getUserAvatarUrl(user, avatarSize);
  const bioDescription = getUserBioDescription(user);

  const socialLinks = [
    {
      platform: 'github',
      url: user.social?.github,
      icon: Github,
      label: 'GitHub'
    },
    {
      platform: 'twitter',
      url: user.social?.twitter,
      icon: Twitter,
      label: 'Twitter'
    },
    {
      platform: 'linkedin',
      url: user.social?.linkedin,
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      platform: 'email',
      url: user.social?.email ? `mailto:${user.social.email}` : undefined,
      icon: Mail,
      label: 'Email'
    },
    {
      platform: 'website',
      url: user.social?.website,
      icon: Globe,
      label: 'Website'
    }
  ].filter(link => link.url);

  return (
    <div className="flex items-center space-x-4">
      <Avatar className={`${size === 'sm' ? 'h-10 w-10' : size === 'md' ? 'h-15 w-15' : 'h-20 w-20'}`}>
        <AvatarImage src={avatarUrl} alt={user.name} />
        <AvatarFallback>
          {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <h3 className={`font-semibold text-foreground ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'}`}>
            {user.name}
          </h3>
          {user.bio?.role && (
            <Badge variant="secondary" className="text-xs">
              {user.bio.role}
            </Badge>
          )}
        </div>

        {bioDescription && (
          <p className={`text-muted-foreground mt-1 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            {bioDescription}
          </p>
        )}

        {user.bio?.location && (
          <p className={`text-muted-foreground mt-1 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            📍 {user.bio.location}
          </p>
        )}

        {showSocial && socialLinks.length > 0 && (
          <div className="flex items-center space-x-2 mt-2">
            {socialLinks.map(({ platform, url, icon: Icon, label }) => (
              <Button
                key={platform}
                variant="ghost"
                size={size === 'sm' ? 'sm' : 'sm'}
                asChild
                className="h-8 w-8 p-0"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
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
