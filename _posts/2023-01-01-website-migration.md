---
layout: single
title: "Always Learning: Website Migration"
date: "2023-01-01"
categories: 
  - "professional-development"
---

The best way to learn how to do something is to try to do it.

I decided recently that I wanted to learn more about different static site generators, starting with [Jekyll](https://jekyllrb.com/docs/), a popular SSG. I selected [the Minimal Mistakes theme](https://github.com/mmistakes/minimal-mistakes) and [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) for hosting and deployment.

I exported my existing content from Wordpress to an XML file, using the existing export tool in Wordpress. Then, I used [Wordpress Export to Markdown on the command line](https://github.com/lonekorean/wordpress-export-to-markdown) to convert the XML content to separate Markdown files with YAML headers formatted appropriately for Jekyll to process the content.

I followed the instructions in [the Minimal Mistakes Quick Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/) to configure the top nav bar and to add front matter configurations to the main config file. 

I will likely add different collections (I have one for poems, now), search, and a contact page later. I might add a CICD pipeline with tests. Once I am certain I have all of the content moved over from the Wordpress site, I will likely change the custom domain to this content and shut down the Wordpress site.

Why am I doing this? I have multiple reasons:

- It seems silly to pay for site hosting when I rarely update my site--and when I do, it's usually posts, not interactive content.
- I wanted to see how site migration worked in this particular circumstance (Wordpress -> GitHub Pages using Jekyll engine).
- I want to test out different kinds of plugins and functionalities and be able to see how it all works (Wordpress with a theme obfuscates a lot of this).

Check out my content at https://github.com/Angelles/angelles.github.io.