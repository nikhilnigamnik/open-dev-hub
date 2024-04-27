export async function getRepo(url) {
  const repo = url.replace("https://github.com/", "");
  const data = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  const {
    name,
    description,
    html_url,
    owner,
    topics,
    language,
    stargazers_count: stars,
    open_issues_count,
    forks,
    open_issues,
    homepage,
  } = data;

  return {
    name,
    description,
    html_url,
    owner,
    language,
    stars,
    topics,
    open_issues_count,
    forks,
    open_issues,
    homepage,
  };
}

export async function getDetailsRepo(url) {
  const data = await fetch(`https://api.github.com/repos/${url}/contributors`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data;
}

export function validateGitRepo(url) {
  const pattern =
    /^https:\/\/github\.com\/([a-zA-Z0-9\-_]+)\/([a-zA-Z0-9\-_]+)$/;
  const match = url.match(pattern);
  if (match) {
    return `${match[1]}/${match[2]}`;
  } else {
    return { error: "Invalid GitHub URL" };
  }
}
