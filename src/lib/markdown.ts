import fs from "fs";
import path from "path";

// Parse frontmatter from markdown content
export function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n?/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const frontmatterString = match[1];
  const frontmatter: Record<string, string> = {};

  frontmatterString.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      let value = valueParts.join(":").trim();
      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key.trim()] = value;
    }
  });

  // Remove frontmatter block from content
  const contentWithoutFrontmatter = content.slice(match[0].length).trim();

  return { frontmatter, content: contentWithoutFrontmatter };
}

// Get all posts from a content directory
export function getPosts(dir: string) {
  const postsDir = path.join(process.cwd(), "src/content", dir);

  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  return files.map((file) => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { frontmatter } = parseFrontmatter(content);
    const slug = file.replace(".md", "");

    return {
      slug,
      frontmatter,
      content,
    };
  });
}

// Get a single post by slug
export function getPost(dir: string, slug: string) {
  const filePath = path.join(process.cwd(), "src/content", dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const { frontmatter } = parseFrontmatter(content);

  return {
    slug,
    frontmatter,
    content,
  };
}
