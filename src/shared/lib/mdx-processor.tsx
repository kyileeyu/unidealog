import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export interface MDXProcessorOptions {
  source: string;
  components?: Record<string, React.ComponentType<Record<string, unknown>>>;
}

export interface ProcessedMDX {
  content: React.ReactElement;
  frontmatter: Record<string, unknown>;
}

/**
 * Process MDX content with rehype plugins
 */
export async function processMDX({ source, components = {} }: MDXProcessorOptions): Promise<ProcessedMDX> {
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['heading-link'],
                ariaLabel: 'Link to section',
              },
            },
          ],
          [
            rehypeHighlight,
            {
              detect: true,
              ignoreMissing: true,
            },
          ],
        ],
      },
    },
  });

  return {
    content,
    frontmatter: frontmatter as Record<string, unknown>,
  };
}

/**
 * Custom MDX components for blog posts
 */
export const mdxComponents = {
  // Custom heading with auto-generated IDs
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mb-6 mt-8 first:mt-0" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mb-4 mt-8" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mb-3 mt-6" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-semibold mb-2 mt-4" {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-lg font-semibold mb-2 mt-4" {...props} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="text-base font-semibold mb-2 mt-4" {...props} />
  ),
  
  // Custom paragraph with better spacing
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7" {...props} />
  ),
  
  // Custom code blocks
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto text-sm" {...props} />
  ),
  
  // Inline code
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  
  // Custom blockquotes
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
  ),
  
  // Custom lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />
  ),
  
  // Custom links
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-primary hover:underline font-medium" 
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  
  // Custom tables
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse border border-border" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border border-border bg-muted px-3 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-border px-3 py-2" {...props} />
  ),
  
  // Custom horizontal rule
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-border" {...props} />
  ),
};
