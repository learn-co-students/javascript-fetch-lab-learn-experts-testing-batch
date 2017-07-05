function getIssues() {
  fetch('https://api.github.com/repos/kwebster2/javascript-fetch-lab/issues').then(
    result => result.json()
  ).then(json => showIssues(json))
}

function showIssues(json) {
  let source = document.getElementById("issues-template").innerHTML
  let template = Handlebars.compile(source)
  let div = document.getElementById("issues")
  div.innerHTML = template({issue: json})
}

function createIssue() {
  let issue_title = document.getElementById("title").value
  let issue_text = document.getElementById("body").value
  fetch('https://api.github.com/repos/kwebster2/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: issue_title,
      body: issue_text
    })
  }).then(getIssues())
}

function showResults(json) {
  let source = document.getElementById("repo-template").innerHTML
  let template = Handlebars.compile(source)
  let div = document.getElementById('results')
  div.innerHTML = template(json)

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  return ''
}
