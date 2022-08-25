---
title: Managing Project Dependencies
featured: ./images/featured/managing-dependencies.png # NOTE: PNG image still needs to be created
---

## Table of Contents

- [Managing Dependencies](#managing-dependencies)
  - [Renovate vs Dependabot](#renovate-vs-dependabot)
- [Adding Renovate](#adding-renovate)
  - [New Projects](#new-projects)
  - [Existing Projects](#existing-projects)
  - [Build Tools](#build-tools)
  - [Languages](#languages)
  - [Examples](#examples)
- [Configuring Renovate](#configuring-renovate)
  - [Common Options](#common-options)
  - [Dependency Dashboard](#dependency-dashboard)
- [Troubleshooting Renovate](#troubleshooting-renovate)
  - [Linting](#linting)
  - [Debugging](#debugging)

## Managing Dependencies

As an open source project maintainer, you will inevitably become familiar with dependencies and vulnerabilities in just about any project that involves managing code, tools, containers, or packages. Of course, not all dependencies and updates are created equally -- some are truly critical, like for security alerts, or a much-needed feature -- while others may pile up over time, feeling more like a nuisance or chore than something that adds value to your project's overall health. Fortunately, the open source community has developed some great tools to help manage dependencies and avoid them becoming a project maintainership headache!

### Renovate vs Dependabot

Wayfair OSPO has carefully evaluated and compared the benefits of two of the more popular dependency management tools out there: [GitHub](https://github.com/)'s native [Dependabot](https://github.com/dependabot), as well as [Mend](https://www.mend.io/)'s newer offering, [Renovate](https://www.mend.io/free-developer-tools/renovate/). Although Dependabot has clear, strong benefits in terms of its [fluid integration](https://docs.github.com/en/code-security/dependabot) with other GitHub offerings, we have ultimately decided to support Renovate as our dependency management tool of choice, namely due to its [highly-flexible customization](https://docs.renovatebot.com/configuration-options/) and broader [package manager ecosystem](https://docs.renovatebot.com/modules/manager/).

Renovate also integrates well with other [code hosting platforms](https://docs.renovatebot.com/modules/platform/), such as [GitLab](https://about.gitlab.com/) and [BitBucket](https://bitbucket.org/product). As an administrator of an open source organization, or the maintainer of multiple GitHub repositories, you can even create and host your own [configuration presets](https://docs.renovatebot.com/config-presets/#github) for all of your open source projects to inherit from!

## Adding Renovate

### New Projects

If you're about to begin a brand-new open source project, good news! Wayfair's OSPO has already baked Renovate support into our [Open Source Template](https://github.com/wayfair-incubator/oss-template). Feel free to [use this template](https://github.com/wayfair-incubator/oss-template/generate) the next time you start a project on GitHub, and be sure to customize the included Renovate [config file](https://github.com/wayfair-incubator/oss-template/blob/main/renovate.json) and [linting job](https://github.com/wayfair-incubator/oss-template/blob/main/.github/workflows/lint.yml) to your liking.

### Existing Projects

If you're the maintainer of an existing open source project, fret not! Adding Renovate is incredibly simple, especially if you don't plan to use its advanced features and customizations right away. In fact, if you're okay with the [base configuration](https://docs.renovatebot.com/presets-config/) and [default rules](https://docs.renovatebot.com/presets-default/), it's as simple as [adding one line](https://docs.renovatebot.com/config-presets/#how-to-use-preset-configs) to a JSON file:

```json
// renovate.json

{
  "extends": ["config:base"]
}
```

As you begin to learn more about Renovate's advanced capabilities, as well as gain an understanding of your project's language and tool-specific package management needs, you can always update your JSON configuration to accommodate your evolving needs! Better yet, there are [plenty](https://github.com/seek-oss/renovate-config-seek/blob/master/package.json) [of](https://github.com/teppeis/renovate-config/blob/main/renovate.json) [fantastic](https://github.com/teppeis/renovate-config/blob/main/default.json) [examples](https://github.com/cybozu/renovate-config/blob/master/renovate.json) of Renovate configuration files out there in the wild.

Here are some common package managers Wayfair OSPO recommends exploring:

### Build Tools

- [Docker](https://docs.renovatebot.com/docker/) (`"dockerfile", "docker-compose"`)
- [Terraform](https://docs.renovatebot.com/modules/manager/terraform/) (`"terraform, terragrunt"`)
- [GitHub Actions](https://docs.renovatebot.com/modules/manager/github-actions/) (`"github-actions"`)
- [Buildkite](https://docs.renovatebot.com/modules/manager/buildkite/) (`"buildkite"`)

### Languages

- [JS](https://docs.renovatebot.com/javascript/) / [Node](https://docs.renovatebot.com/node/) (`"npm, nvm"`)
- [Python](https://docs.renovatebot.com/python/) (`"pip_requirements, pip-compile, pyenv"`)
- [Java](https://docs.renovatebot.com/java/) (`"gradle, gradle-wrapper, maven"`)
- [Swift](https://docs.renovatebot.com/modules/manager/swift/) (`"swift"`)
- [Rust](https://docs.renovatebot.com/rust/) (`"cargo"`)
- [Go](https://docs.renovatebot.com/golang/) (`"gomod"`)
- [PHP](https://docs.renovatebot.com/php/) (`"composer"`)
- [.NET](https://docs.renovatebot.com/nuget/) (`"nuget, cake"`)

### Examples

Wayfair OSPO is also proud to share several real-world projects currently using Renovate:

- [Forker](https://github.com/wayfair-incubator/forker/blob/main/renovate.json) (GitHub Action / TypeScript)
- [Aux Eng Docs](https://github.com/wayfair-incubator/auxeng-docs/blob/main/renovate.json) (Gatsby / Node / Docker)
- [wayfair.github.io](https://github.com/wayfair/wayfair.github.io/blob/main/renovate.json) (Gatsby / Node / React)
- [Open Source Template](https://github.com/wayfair-incubator/oss-template/blob/main/renovate.json) (GitHub Template Repository)

## Configuring Renovate

For flexibility and ease-of-use, Wayfair OSPO highly recommends configuring Renovate with repository-scoped [configuration files](https://docs.renovatebot.com/configuration-options/). Put simply, for each project you wish to use Renovate with, you should commit a `renovate.json` (or similar) file to the repository root. If your repository's code is hosted on GitHub, you should be able to [install the Renovate GitHub App](https://docs.renovatebot.com/getting-started/installing-onboarding/#hosted-githubcom-app) on any repositories you maintain. If your repository is hosted on a separate GitHub organization, you can request that your org administrator [install Renovate](https://github.com/apps/renovate/installations/new), with permissions scoped to either select repositories or all repositories.

If you are unable to leverage GitHub hosting, or prefer to self-host your instance of Renovate, refer to the following docs:

- [Getting Started](https://docs.renovatebot.com/getting-started/running/#self-hosting-renovate)
- [Self-Hosting Examples](https://docs.renovatebot.com/examples/self-hosting/)
- [Configuration Options](https://docs.renovatebot.com/self-hosted-configuration/)
- [Experimental Options](https://docs.renovatebot.com/self-hosted-experimental/)
- [Getting Logs](https://docs.renovatebot.com/troubleshooting/#self-hosted)

### Common Options

While Renovate offers numerous customizations, a few key options provide immediate value to project maintainers without requiring too much tweaking:

- [Scheduling](https://docs.renovatebot.com/key-concepts/scheduling/):

```json
  "schedule": [
    "before 3am every weekday" // Runs daily before 3:00 AM UTC
  ]
```

- [Package Managers](https://docs.renovatebot.com/modules/manager/):

```json
  "enabledManagers": [ // Manages packages for Docker, GitHub, Node
    "dockerfile",
    "docker-compose",
    "github-actions",
    "npm"
  ]
```

- [Batch Updates](https://docs.renovatebot.com/getting-started/use-cases/#batched-updates):

```json
  "packageRules": [ // Group packages for Gatsby, React, Docker, GitHub
    {
      "matchPackageNames": ["gatsby"],
      "matchPackagePrefixes": ["gatsby-"],
      "groupName": "Gatsby"
    },
    {
      "matchPackageNames": ["react"],
      "matchPackagePrefixes": ["react-"],
      "groupName": "React"
    },
    {
      "matchManagers": ["dockerfile", "docker-compose"],
      "groupName": "Docker"
    },
    {
      "matchManagers": ["github-actions"],
      "groupName": "GitHub Actions"
    }
  ]
```

- [Automerging](https://docs.renovatebot.com/key-concepts/automerge/):

```json
  "packageRules": [ // Only automerge minor package updates
    {
      "matchUpdateTypes": ["minor", "patch", "pin", "digest"],
      "groupName": "Minor Packages",
      "automerge": true
    },
  ]
```

- [Config Presets](https://docs.renovatebot.com/getting-started/use-cases/#configuration-presets):

```json
  "extends": [ // Extends base config, enables dashboard, rebases PRs
    "config:base",
    ":dependencyDashboard",
    ":rebaseStalePrs"
  ]
```

### Dependency Dashboard

Once configured on GitHub or GitLab, Renovate will maintain overall state of your project's dependencies through a dedicated issue titled "Dependency Dashboard," filed by the `renovate` bot user. The [Renovate Dependency Dashboard](https://docs.renovatebot.com/key-concepts/dashboard/) utilizes dynamic Markdown checkboxes to allow project maintainers to interact directly with the issue content.

You can use these interactive checkboxes to do things like manually [force Renovate to run](https://docs.renovatebot.com/getting-started/use-cases/#on-demand-updates-via-dependency-dashboard) (eg. outside of its normal schedule), or retry a [previously-attempted update](https://docs.renovatebot.com/key-concepts/dashboard/#visibility-into-rejecteddeferred-updates). You can even customize your dashboard to create [custom approval workflows](https://docs.renovatebot.com/key-concepts/dashboard/#dependency-dashboard-approval-workflow) for specific packages or major updates.

Better yet, by enabling Renovate as a GitHub-hosted app, you'll be able to view Renovate logs for all of your repos across all organizations by navigating to:

```bash
# Replace <ORG_NAME> and <REPO_NAME> as appropriate:

https://app.renovatebot.com/dashboard#github/<ORG_NAME>/<REPO_NAME>
```

> 💡 If you've already committed a valid `renovate.json` configuration file to your project, and still don't see a Dependency Dashboard issue automatically filed / updated according to your specified schedule, make sure the [Renovate App](https://github.com/apps/renovate) and `renovate` bot user have been granted [access to your repository](https://github.com/apps/renovate/installations/new). If you are the administrator of a GitHub organization, you can optionally [enable the Renovate App](https://docs.renovatebot.com/getting-started/installing-onboarding/#hosted-githubcom-app) for all repositories, allowing for more seamless monitoring of Renovate installations across your org.

## Troubleshooting Renovate

### Linting

As your Renovate configuration becomes more complex and nuanced, you'll want to ensure any changes you make won't break the existing settings. If you're already using [GitHub Workflows](https://docs.github.com/en/actions/using-workflows/about-workflows) for your project's CI, you can simply add a new linting job to which leverages the [`renovate-config-validator`](https://github.com/marketplace/actions/validate-renovate-configuration-with-renovate-config-validator) [GitHub Action](https://docs.github.com/en/actions):

```yaml
# lint.yml

jobs:
  renovate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: 🧼 lint renovate config # Validates changes to renovate.json config file
        uses: suzuki-shunsuke/github-action-renovate-config-validator@v0.1.2
        with:
          config_file_path: 'renovate.json'
```

> 💡 If you're using (or planning to use) Wayfair's [Open Source Template](https://github.com/wayfair-incubator/oss-template) to kickstart your project, the provided [`lint.yml`](https://github.com/wayfair-incubator/oss-template/blob/main/.github/workflows/lint.yml) workflow file already includes this step!

### Debugging

Once you've configured and validated Renovate, you may still experience issues and unexpected behaviors. This is where [debug logs](https://docs.renovatebot.com/troubleshooting/) become crucial to navigating problems with Renovate. Fortunately, it's easy to [access these logs on the Renovate App Dashboard](https://docs.renovatebot.com/troubleshooting/#github-hosted-app) if you've installed Renovate as a GitHub-hosted app. If you've gone the self-hosted route, there's [separate guidance for accessing logs](https://docs.renovatebot.com/troubleshooting/#self-hosted) on your own instance.

> 💡 If you're using the [Renovate App Dashboard](https://app.renovatebot.com/dashboard) for log viewing, ensure you've first authenticated with your desired GitHub / GitLab account. Once logged in, you should be able to view logs (up to 3 days old) for all Renovate-enabled repositories you have access to.

🧹 Happy renovating!
