const user = 'pajamaw'
const base = 'https://api.github.com/'
const fork = `${user}/javascript-fetch-lab`
const repo = 'learn-co-curriculum/javascript-fetch-lab'

function getIssues() {

  fetch(`${base}repos/${fork}/issues`)
    .then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const issueData = { title: issueTitle, body: issueBody }

  fetch(`${base}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(resp => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {

  fetch(`${base}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json))
}

function getToken() {

  return ''
}
