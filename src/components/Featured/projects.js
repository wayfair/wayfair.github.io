import sentimentImage from "../../images/featured/sentiment.png"
import tremorImage from "../../images/featured/tremor.png"
import gitParseImage from "../../images/featured/git-parse.png"

const projects = [
  {
    description: `<a href="https://github.com/wayfair/git-parse"><code>git-parse</code></a> allows JavaScript developers
      to treat a git repository as they would treat a regular object.
      This data structure simplifies git operations and manipulation
      of state without having to write boilerplate <code>git</code> cli
      functions within their project. We've noted dependencies for this project
      exceeding 5 thousand, 350k downloads a week on NPM, and usage in well known
      packages like <a href="https://github.com/apollographql/apollo-tooling/blob/8d2015e509e6e78265a6696db2fad5a0a2aaa460/packages/apollo/package.json#L55">
      apollo</a>`,
    imageSrc: gitParseImage,
    alt: "Git Parse sample image",
  },
  {
    description: `<a href="https://github.com/tremor-rs"><code>tremor</code></a> is Wayfair's solution to ingesting
      data signals from production traffic at the billion-dollar enterprise scale.
      By using Rust instead of our previous Java-based solution, Wayfair saw significant
      gains in computational leverage and throughput for our infrastructure.`,
    imageSrc: tremorImage,
    alt: "tremor sample image",
  },
  {
    description: `<a href="https://github.com/wayfair-incubator/extra-model"><code>extra-model</code></a> is an implementation of the
      <a href="https://aclanthology.org/D18-1384/">ExtRA
      algorithm</a>. Unsupervised, the algorithm executes
      an NLP task called Aspect-Based Sentiment Analysis, used routinely in production on more
      than 1 million reviews across the Wayfair catalog.`,
    imageSrc: sentimentImage,
    alt: "Sentiment Sample Image",
  },
]

export default projects;
