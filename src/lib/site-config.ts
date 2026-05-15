export const siteConfig = {
  name: "Dylan Scoble",
  url: "https://example.com",
  description: "A static site built with Next.js",
  author: "Dylan Scoble",

  hero: {
    title: "Dylan Scoble",
    description: "Full-stack developer building things that matter",
    backgroundImage: "/images/site/Background.png",
    badges: ["Brand Identity", "Print & Posters", "Social Media"],
    buttons: {
      primary: "View Work",
      secondary: "Contact Me",
    },
  },

  about: {
    bio: [
      "Hi, I'm [Your Name]. I'm a [your role] passionate about [your interests]. I specialize in [your specialties] and love building things that [what you aim to achieve].",
      "When I'm not coding, you can find me [hobbies/interests]. I'm always excited to connect with like-minded people and work on interesting projects.",
    ],
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
  },

  contact: {
    intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    links: [
      { label: "Email",    href: "mailto:your.email@example.com" },
      { label: "GitHub",   href: "https://github.com/yourusername" },
      { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
      { label: "Twitter",  href: "https://twitter.com/yourusername" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
