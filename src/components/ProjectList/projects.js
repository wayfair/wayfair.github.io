const languages = [
  "Python",
  "Java",
  "Rust",
  "Kotlin",
  "JavaScript",
  "Markdown",
  "TypeScript",
  "Swift",
]

const [
  python,
  java,
  rust,
  kotlin,
  javascript,
  markdown,
  typescript,
  swift
] = languages

const projects = [
  {
    name: "Backstage (Spotify)",
    language: typescript,
    description:
      "Backstage is an open platform for building developer portals. Powered by a centralized software catalog, Backstage restores order to your microservices and infrastructure and enables your product teams to ship high-quality code quickly — without compromising autonomy.",
    href: "https://github.com/wayfair-contribs/backstage",
  },
  {
    name: "Brikkit-Android",
    language: kotlin,
    description:
      "With BrickKit, you can manage complex, dynamic, device type specific, and orientation aware layouts with the same code. It's easy to reuse and extend bricks which highly reduces code redundancy and makes UI testing easier.",
    href: "https://github.com/wayfair/brickkit-android",
  },
  {
    name: "Brooklin (LinkedIn)",
    language: java,
    description: "Brooklin is a distributed system intended for streaming data between various heterogeneous source and destination systems with high reliability and throughput at scale. Designed for multitenancy, Brooklin can simultaneously power hundreds of data pipelines across different systems and can easily be extended to support new sources and destinations.",
    href: "https://github.com/wayfair-contribs/brooklin",
  },
  {
    name: "Columbo", 
    language: python,
    description:
      "Specify a dynamic set of questions to ask a user and get their answers. Columbo's feature set allows a program to ask multiple types of questions, validate the response provided by the user, use answers from earlier questions, and accept answers from the command line in addition to prompting the user. ",
    href: "https://github.com/wayfair-incubator/columbo",
  },
  {
    name: "DociQL",
    language: javascript,
    description:
      'DociQL generates beautiful static HTML5 documentation from a GraphQL endpoint using the introspection query. The goal of DociQL is help you "save time and look good" by providing an extensible platform for auto generating your API documentation. The default layout is a three column single page, similar to those employed by Stripe and Intercom.',
    href: "https://github.com/wayfair/dociql",
  },
  {
    name: "ExtRA-Model",
    language: python,
    description:
      "extra-model is an implementation of the ExtRA algorithm. Unsupervised, the algorithm executes an NLP task called Aspect-Based Sentiment Analysis, used routinely in production on more than 1 million reviews across the Wayfair catalog.",
    href: "https://github.com/wayfair-incubator/extra-model",
  },
  {
    name: "GBQ",
    language: python,
    description:
      "Python wrapper for interacting Google BigQuery. This package provides an interface by wrapping Google's low level library. It exposes options to provide input as json objects which can be used for various CI/CD tools.",
    href: "https://github.com/wayfair-incubator/gbq",
  },
  {
    name: "Git-Parse",
    language: javascript,
    description:
      "Javascript library which generates an array of javascript objects representing the current branch of a local git repository's commit history",
    href: "https://github.com/wayfair/git-parse",
  },
  {
    name: "OSS-Template",
    language: markdown,
    description:
      "Wayfair OSPO-sponsored template for starting an Open Source project. Open to be used by everyone, not just by Wayfairians.",
    href: "https://github.com/wayfair-incubator/oss-template",
  },
  {
    name: "PyGitOps",
    language: python,
    description:
      "Python wrapper for low level git operations and logic. Useful for systems automating git operations with Python.",
    href: "https://github.com/wayfair-incubator/pygitops",
  },
  {
    name: "Tremor",
    language: rust,
    description:
      "Tremor is an early stage event processing system for unstructured data with rich support for structural pattern matching, filtering and transformation.",
    href: "https://github.com/tremor-rs",
  },
  {
    name: "VSM for iOS",
    language: swift,
    description:
      "VSM is a reactive architecture for iOS that is unidirectional, highly type-safe, behavior-driven, and clean.",
    href: "https://github.com/wayfair/vsm-ios",
  },
]

export {
  languages,
  projects,
}
