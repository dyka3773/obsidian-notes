import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "My Obsidian Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: { 
      provider: 'google', 
      tagId: 'G-21037M996S' 
    },
    locale: "en-US",
    baseUrl: "dyka3773.github.io/obsidian-notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lexend",
        body: "Roboto",
        code: "Courier Prime",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",
          lightgray: "#E4E4E4",
          gray: "#CCCCCC",
          darkgray: "#222222",
          dark: "#222222",
          secondary: "#8F6AF5",
          tertiary: "#71E052",
          highlight: "rgba(143, 106, 245, 0.15)",
          textHighlight: "#B8F0A9",
        },
        darkMode: {
          light: "#1E1E1E",
          lightgray: "#262626",
          gray: "#515151",
          darkgray: "#DADADA",
          dark: "#ebebec",
          secondary: "#8A5CF5",
          tertiary: "#E09E52",
          highlight: "rgba(138, 92, 245, 0.15)",
          textHighlight: "#715432",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        maxDepth: 6,
        minEntries: 2
      }),
      // Plugin.HardLineBreaks(),
      Plugin.CrawlLinks({ 
        markdownLinkResolution: "shortest" ,
        prettyLinks: true,
        externalLinksIcon: true
      }),
      Plugin.Description({
        replaceExternalLinks: true
      }),
    ],
    filters: [],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage()
    ],
  },
}

export default config