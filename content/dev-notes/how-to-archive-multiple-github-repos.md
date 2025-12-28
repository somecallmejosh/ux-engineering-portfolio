---
slug: how-to-archive-multiple-github-repos
publishedAt: 2025-12-28
title: "How to Archive Multiple GitHub Repos"
description: 'Using the Github UI to archive lots of projects would be time-consuming. So I asked ChatGPT to help me write a quick bash script to do it for me.'
tags: [github, automation, scripts]
image: https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1766942768/josh-portfolio/github-automation.png
image_alt: 'Developer automating GitHub repository updates management on a laptop.'
---

It's the end of the year and I figured I'd do a little Github pruning. I've created (and abandoned) over 100 repos over the years, so using the Github UI to archive all this mess would be awfully time-consuming. So I asked ChatGPT to help me write a quick bash script to do it for me.

For Mac folks, first install the Github CLI if you haven't already:

```bash
brew install gh
```

I'm not familiar with Windows, but Google tells me that you can install it with winget:

```bash
winget install --id GitHub.cli
```

Next, authenticate the CLI with your Github account:

```bash
gh auth login
```

Demo'ing my fizzbuzz and fibonacci repos isn't really necessary, but I didn't really want to delete these old relics. Nostalgia? Maybe. Hoarder? Definitely. I just wanted to archive the repositories and make them private.

Now create a bash script called `archive-repos.sh`.

```bash
#!/usr/bin/env bash
# Use the user's env to find bash
set -euo pipefail
# Exit on error, unset vars are errors, fail pipelines on first failure

# Read each repository identifier (owner/repo) from repos.txt
while IFS= read -r r; do
  [[ -z "$r" ]] && continue
  # Skips empty lines

  echo "Checking $r"            # Progress output

  # Query current archived status and visibility via GitHub CLI (JSON + jq selector)
  archived=$(gh repo view "$r" --json isArchived --jq '.isArchived')
  visibility=$(gh repo view "$r" --json visibility --jq '.visibility')

  # 1) Ensure PRIVATE (even if archived)
  if [ "$visibility" != "PRIVATE" ]; then
    # If archived, temporarily unarchive to allow changing visibility
    if [ "$archived" = "true" ]; then
      echo "  → Repo is archived and not private. Temporarily unarchiving to change visibility..."
      gh repo unarchive "$r" --yes
      archived_was_true="true"
    else
      archived_was_true="false"
    fi

    echo "  → Setting visibility to private"
    # Change visibility to private; the flag auto-confirms the consequences prompt
    gh repo edit "$r" --visibility private --accept-visibility-change-consequences

    # If it was archived before, re-archive now that visibility is updated
    if [ "$archived_was_true" = "true" ]; then
      echo "  → Re-archiving"
      gh repo archive "$r" --yes
    fi
  else
    echo "  → Already private"
  fi

  # 2) Ensure archived (after visibility is correct)
  if [ "$archived" = "false" ]; then
    echo "  → Archiving"
    gh repo archive "$r" --yes
  else
    echo "  → Already archived"
  fi

done < repos.txt
```

This script reads a list of repositories from a file called `repos.txt`. Create that file and add the repositories you want to archive, one per line, in the format `owner/repo-name`:

``` bash
#repos.txt
your-github-username/repo1
your-github-username/repo2
your-github-username/repo3
# etc.
```

Make the script executable:

```bash
chmod +x archive-repos.sh
```

Finally, run the script:

```bash
./archive-repos.sh
```

A sample output might look like this:

```bash
Checking your-github-username/repo1
  → Setting visibility to private
  → Archiving
Checking your-github-username/repo2
  → Already private
  → Already archived
Checking your-github-username/repo3
  → Setting visibility to private
  → Archiving
```

And that's it! The script will go through each repository listed in `repos.txt`, make it private if it's not already, and then archive it. This should save you a lot of time compared to doing it manually through the GitHub UI.
