const baseRoute = 'https://api.github.com/repos/';

function getIssues() {
    const repo = 'zacscodingclub/javascript-fetch-lab'
    fetch(`${baseRoute}${repo}/issues`)
        .then(res => res.json())
        .then(json => showIssues(json))
}

function showIssues(json) {
    const templateId = document.getElementById('issues-template');
    const issuesDiv = document.querySelector('#issues');
    const template = Handlebars.compile(templateId.innerHTML);

    issuesDiv.innerHTML = template(json);
}

function createIssue() {
    const repo = 'zacscodingclub/javascript-fetch-lab'
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const postData = { title: title, body: body };
    console.log(`${baseRoute}${repo}`)
    fetch(`${baseRoute}${repo}/issues`, {
        method: 'POST',
        title: title,
        body: JSON.stringify(postData),
        headers: {
            Authorization: `token ${getToken()}`
        }
    })
      .then(res => getIssues())
}

function showResults(json) {
    const templateId = document.getElementById('repo-template');
    const resultsDiv = document.querySelector('#results');
    const template = Handlebars.compile(templateId.innerHTML);

    resultsDiv.innerHTML = template(json);
}

function getForks() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab';

    fetch(`${baseRoute}${repo}/forks`)
        .then(res => res.json())
        .then(json => console.log(json))
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseRoute}${repo}/forks`, {
    method: 'POST',
    headers: {
        Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
