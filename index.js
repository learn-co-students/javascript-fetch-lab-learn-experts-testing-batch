const token = getToken();
const baseURL = 'https://api.github.com/repos/'

function getIssues() {
  const repo = 'bhollan/javascript-fetch-lab';

  fetch(baseURL + repo + '/issues', {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  const issueBucket = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = issueBucket(json);
}

function createIssue() {
  const repo = 'bhollan/javascript-fetch-lab';
  var issueTitle = document.getElementById('title').value,
       issueText = document.getElementById('body').value;
  var issueData = {title: issueTitle, body: issueText};

  fetch(baseURL + repo + '/issues', {
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(getIssues());
}

function showResults(json) {
  const repoBucket = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = repoBucket(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(baseURL + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
