const myRepo = 'mendelB/javascript-fetch-lab'
const base = 'https://api.github.com/repos/'
const issueUrl = base + myRepo + '/issues'

function getIssues() {
	fetch(issueUrl, {
  		headers: {
    		Authorization: `token ${token}`
  		}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
	let html = document.getElementById("issues-template").innerHTML;
	var template = Handlebars.compile(html);
	document.getElementById("results").innerHTML += template(json)
}

function createIssue() {
	const title = document.getElementById('title').value;
	const body = document.getElementById('body').value;
	fetch(issueUrl, {
	  	method: 'post',
	  	headers: {
	  		Authorization: `token ${getToken()}`
	  	},
	  	body: JSON.stringify({
	  		title: title,
	  		body: body
	  	})
  	}).then(() => getIssues());
}

function showResults(json) {
	var template = Handlebars.compile(document.getElementById("repo-template").innerHTML);
	document.getElementById("results").innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(base + repo +'/forks', {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  return ''
}
