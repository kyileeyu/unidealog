import { User } from './types';

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
