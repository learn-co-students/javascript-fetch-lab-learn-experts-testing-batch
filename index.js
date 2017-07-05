function getIssues() {
  const repo = 'https://api.github.com/repos/cassaram09/javascript-fetch-lab/issues'
  var token = getToken();

  fetch(repo, {
    method: "get",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json())
    .then(json => showIssues(json));

}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  var repo = 'https://api.github.com/repos/cassaram09/javascript-fetch-lab/issues'
  var token = getToken();
  var data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(repo, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => console.log(response))
    .then(getIssues());
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  var token = getToken();

  fetch(repo, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}