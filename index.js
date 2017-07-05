function getIssues() {
  const repo = 'jd2rogers2/javascript-fetch-lab/issues';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo)
}

function showIssues(json) {
  var src = document.getElementById('issues-template').innerHTML;
  Handlebars.compile(src);
}

function createIssue() {
  const repo = 'jd2rogers2/javascript-fetch-lab/issues';
  const data = "" + document.querySelector('#title').value + " " + document.querySelector('#body').value;
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo, {
    method: 'post',
    body: data,
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function showResults(json) {
  var src = document.getElementById('repo-template').innerHTML;
  Handlebars.compile(src);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
