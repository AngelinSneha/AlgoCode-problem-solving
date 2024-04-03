const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const Turndown = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new Turndown();

  // convert markdown to html
  const convertedHtml = marked.parse(markdownContent);
 
  //   removes any malicious html code
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });
 
  //    convert html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
  
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
