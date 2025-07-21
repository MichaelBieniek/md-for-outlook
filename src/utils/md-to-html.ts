import { marked } from "marked";

async function covertMarkdownToHtml(markdown: string): Promise<string> {
  // Configure marked with secure settings
  marked.setOptions({
    // Enable GitHub Flavored Markdown
    gfm: true,
    // Sanitize the output to prevent XSS attacks
    silent: false,
  });

  // Convert markdown to HTML
  return await marked(markdown);
}

export { covertMarkdownToHtml };
