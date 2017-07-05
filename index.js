

function getIssues() {
  fetch("https://api.github.com/repos/nstephenson/javascript-fetch-lab/issues")
  .then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
  const source = document.getElementById("issues-template").innerHTML
  const template = Handlebars.compile(source);
  const context = {issue: json}
  document.getElementById('issues').innerHTML += template(context)
}

function createIssue() {
  const postData = { title: document.getElementById('title').value,
                     body:  document.getElementById('body').value }

  fetch("https://api.github.com/repos/nstephenson/javascript-fetch-lab/issues", {
    method: 'post',
    headers: {
      Authorization: "token " + getToken()
    },
    body: JSON.stringify(postData)
  })
  .then(resp => resp.json())
  .then(json => getIssues())
}

function showResults(json) {
  const source = document.getElementById("repo-template").innerHTML
  const template = Handlebars.compile(source);
  const context = {full_name: json.full_name, html_url: json.html_url}
  document.getElementById('results').innerHTML += template(context)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch("https://api.github.com/repos/" + repo + "/forks", {
    method: 'post',
    headers: {
      Authorization: "token " + getToken()
    }
  })
  .then(resp => resp.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
