import { User } from '../model/types';

/**
 * Get user avatar URL
 */
export function getUserAvatarUrl(user: User, size: number = 40): string {
  if (user.avatar) {
    // If it's a full URL, return as is
    if (user.avatar.startsWith('http')) {
      return user.avatar;
    }
    // If it's a relative path, construct the full path
    return `/assets/avatars/${user.avatar}`;
  }

  // Fallback to GitHub avatar if GitHub URL is available
  if (user.social?.github) {
    const username = user.social.github.split('/').pop();
    return `https://github.com/${username}.png?size=${size}`;
  }

  // Fallback to Gravatar or default avatar
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&size=${size}&background=6366f1&color=ffffff`;
}

/**
 * Get user display name
 */
export function getUserDisplayName(user: User): string {
  return user.name || 'Anonymous';
}

/**
 * Get user bio description as a single string
 */
export function getUserBioDescription(user: User): string {
  if (!user.bio?.description) {
    return '';
  }

  if (Array.isArray(user.bio.description)) {
    return user.bio.description.join(' • ');
  }

  return user.bio.description;
}

/**
 * Validate user social links
 */
export function validateSocialLinks(social: Record<string, string>): boolean {
  const urlPattern = /^https?:\/\/.+/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  for (const [platform, url] of Object.entries(social)) {
    if (!url) continue;

    if (platform === 'email') {
      if (!emailPattern.test(url)) {
        return false;
      }
    } else {
      if (!urlPattern.test(url)) {
        return false;
      }
    }
  }

  return true;
}
