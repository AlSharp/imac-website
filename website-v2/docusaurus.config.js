module.exports={
  "title": "IMAC",
  "tagline": "IntelLiDrives Multi-Axis Motion and Automation Controller with Visual Programming",
  "url": "https://AlSharp.github.io/website-v2/",
  "baseUrl": "/",
  "staticDirectories": ['static'],
  "organizationName": "AlSharp",
  "projectName": "imac-website",
  "trailingSlash": false,
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://alsharp.github.io/imac-website-scripts/edit_external_links.js"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "users": [
      {
        "caption": "IntelLiDrives, Inc.",
        "image": "img/intellidrives.png",
        "infoLink": "http://www.intellidrives.com",
        "pinned": true
      }
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "docs",
          "sidebarPath": "sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "..\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "IMAC",
      "logo": {
        "src": "img/favicon.png"
      },
      "items": [
        {
          "href": "https://imacdemolive.ngrok.io",
          "label": "Try it now!",
          "position": "left"
        },
        {
          "to": "docs/tutorial_1",
          "label": "Tutorial videos",
          "position": "left"
        },
        {
          "to": "docs/intro",
          "label": "Manual",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
      ]
    },
    "image": "img/favicon.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 IntelLiDrives, Inc",
      "logo": {
        "src": "img/favicon.png"
      }
    },
    "prism": {
      "additionalLanguages": ['csharp']
    },
    "metadata": [
      {
        name: "keywords",
        content: "motion control, motor controller, low code, no code, visual programming language"
      }
    ]
  }
}