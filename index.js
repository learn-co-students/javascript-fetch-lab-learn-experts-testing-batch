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
  repoTemplate = Handlebars.compile(document.getElementById("repo-template").innerHTML);
  var context = {full_name: json.full_name, html_url: json.html_url};
  document.getElementById("results").innerHTML = repoTemplate(context);
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
  return 'd2873d0f3cdaa42a505a8caf496b00b2aff26132'
}