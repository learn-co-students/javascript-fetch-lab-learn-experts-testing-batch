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
  console.log(json)
  issuesTemplate = Handlebars.compile($("#issues-template").html());
  for (var i = 0 ; i < json.length; i++) {
    var context = {title: json[i].title, body: json[i].body, html_url: json[i].html_url};  
    var html = issuesTemplate(context);
    $("#results").append(html);
    console.log(html)
  }
}

function createIssue() {
  var repo = 'https://api.github.com/repos/cassaram09/javascript-fetch-lab/issues'
  var token = getToken();
  var data = {
    title: $('#title').val(),
    body: $('#body').val()
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
  console.log(json)
  repoTemplate = Handlebars.compile($("#repo-template").html());
  var context = {name: json.full_name, url: json.html_url};
  var html = repoTemplate(context);
  $("#results").html(html);
  console.log(html)
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