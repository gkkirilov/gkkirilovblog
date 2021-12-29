---
title: Example Title
date: 2022-1-30
---
# Title

`{{ new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'}).format(new Date($frontmatter.date)) }}`

content