import { NotFoundPage } from '@/page-components/not-found';
import { SITE_CONFIG } from '@/shared/config/site';

export default function NotFound() {
  return (
    <NotFoundPage
      siteTitle={SITE_CONFIG.name}
      author={SITE_CONFIG.author.name}
      githubUrl={SITE_CONFIG.author.socialLinks.github}
    />
  );
}
