function getIssues() {
  fetch(`${gitHubApiUrl()}/repos/${getForkedRepo()}/issues`,{
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let template = document.getElementById('issues-template').innerHTML
  let templateScript = Handlebars.compile(template)
  let html = templateScript({issues: json})
  console.log(json)

  document.getElementById('issues').innerHTML = html
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let postData = {
    title: title,
    body: body 
  }

  fetch(`${gitHubApiUrl()}/repos/${getForkedRepo()}/issues`, {
    method: 'post', 
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json)).then(getIssues())
}

function showResults(json) {
  let template = document.getElementById('repo-template').innerHTML
  let templateScript = Handlebars.compile(template)
  let html = templateScript(json)
  console.log(json)

  document.getElementById('results').innerHTML = html
}

function forkRepo() {
  const repo = getRepo()
  //use fetch to fork it!
  fetch(`${gitHubApiUrl()}/repos/${repo}/forks`, {
    method: 'post', 
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function gitHubApiUrl() {
  return 'https://api.github.com'
}

function getRepo() {
  return 'learn-co-curriculum/javascript-fetch-lab'
}

function getForkedRepo() {
  return 'DakotaLMartinez/javascript-fetch-lab'
}