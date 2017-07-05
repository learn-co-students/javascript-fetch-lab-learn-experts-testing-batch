const userName = ''
const apiUrl = 'https://api.github.com/'
let repoUrl = `${userName}/javascript-fetch-lab`

function getIssues() {
  console.log('getting issues')
  fetch(`${apiUrl}repos/${repoUrl}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const bodyText = document.getElementById('body').value
  const titleText = document.getElementById('title').value
  const postData = {
    body: bodyText,
    title: titleText
  }

  fetch(`${apiUrl}repos/${repoUrl}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  console.log('forking repo')
  fetch(apiUrl + 'repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: 'token ' + getToken()
    }
  })
    .then(res => res.json())
    .then((json) => {
      showResults(json)
    })
}

function assignOwner(json) {
  owner = json.owner.login
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
