---
layout: single
title: "Technical Writing, GitHub, GitLab, and Automation"
date: "2023-06-29"
categories: 
  - "professional-development"
---

I recently attended a webinar about docs as code. The webinar covered using GitHub for documentation, GitHub Actions, and GitLab pipelines and LLMs. In this blog post, I'll cover my thoughts about what was discussed in the webinar.

## Benefits of using GitHub and GitLab

I am familiar with using GitLab for documentation, and this site is hosted on GitHub and uses GitHub Pages. Suffice to say, I believe both sites are excellent for hosting documentation websites, as well as other sites produced with static site generators. Some of the benefits to using GitHub/GitLab include (but are not limited to) the following:
- The workflows are well-documented. Most commands are well-documented as well.
- Both sites allow multiple writers to work on the same files or different files at the same time.
- It is easy to see who changed what and when (and to roll back changes).
- The cost is reasonable.

### GitHub Actions, GitLab pipelines, and efficiency

What interested me most about the webinar was exploring GitHub Actions in a documentation context. 

Writing the actual documentation content requires a lot of effort. At the very least, it involves the following activities:
- Gathering and validating information
- Writing
- Formatting
- Revising
- Editing
- Proofreading
- Creating and refining any diagrams or other images
All of these tasks take time, mental effort, and skill. 

Actually publishing the content and ushering it through an approval workflow requires more time and effort. In addition, managing timelines and due dates and tracking approvals requires project management skills--but that's another post entirely. 

To get the approved and formatted content from GitHub or GitLab published on a website, technical writers must execute a series of commands or steps. Using GitHub Actions or GitLab CI/CD pipelines to automate any of the following tasks would save time and/or improve documentation quality:
- Check formatting for correctness
- Spellcheck content (though no spell checker catches everything--it's a nice-to-have backup option)
- Create merge or pull requests
- Build pages
- Deploy pages
- Send notification messages to a chat app that can receive curl commands, such as Slack or Teams (see [Choose when jobs run](https://docs.gitlab.com/ee/ci/jobs/job_control.html), [Posting messages using curl - Slack](https://api.slack.com/tutorials/tracks/posting-messages-with-curl), and [Create and send messages - Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL))
- And more!

GitHub Actions workflows execute based on what is defined within [a `.yml` file in the `.github/workflows` directory](https://docs.github.com/en/actions/using-workflows/about-workflows) in the root of the repository, while GitLab CI/CD pipelines execute based on what is defined in the [`.gitlab-ci.yml` file](https://docs.gitlab.com/ee/ci/yaml/gitlab_ci_yaml.html) hosted in the root of the repository. In either case, the YAML file may be customized to reflect and support a specific team's workflow. Saving time on automatable tasks contributes to the team's efficiency, which ultimately contributes to the efficiency of the engineering org as a whole.

## Technical writing and LLMs

Since technical writing is about documenting products and topics that haven't yet been documented (or don't have updated documentation), an LLM that pulls from existing internet content is not particularly useful in generating documentation about something new or updated. Technical writing jobs won't be overtaken by LLMs and AI tools any time soon. 

One thing LLMs could be useful for is generating templates for documentation using correct formatting for section headings and metadata sections. However, I feel that LLMs and AI tools operate in an ethical gray area. I wouldn't want to use it for my work and I would urge companies to not use it to generate content and use it as it is.

## Summary

In summary, my thoughts are that leveraging automation to take care of non-knowledge-based tasks would increase a technical writing team's efficiency, support the team's workflow, and allow the team more time to focus on documentation and information architecture.
