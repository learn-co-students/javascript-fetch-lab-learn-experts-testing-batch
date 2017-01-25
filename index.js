function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  debugger;
  document.querySelector('#results').append(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'd8628f19a8534cba9f9df5c903ca926194d79590'
}
