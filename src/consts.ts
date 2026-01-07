import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Fatinul",
  DESCRIPTION: "Welcome to Fatinul, my portfolio and blog that are based on Astro Sphere.",
  AUTHOR: "Fatinul",
}

// Experience Page
export const EXPERIENCE: Page = {
  TITLE: "Experience",
  DESCRIPTION: "Places I have worked and studied.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experience", 
    HREF: "/experience", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "fatinul.dev@gmail.com",
    HREF: "mailto:fatinul.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Check my repo - fatinul",
    HREF: "https://github.com/fatinul/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Connect with - fatinul",
    HREF: "https://www.linkedin.com/in/fatinul/",
  },
]

