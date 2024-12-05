// https://randomuser.me/api/
//@TODO use only the fetch web api 

let url = 'https://randomuser.me/api/';

//modify this fetch method to the required settings.
/*
fetch()
  .then()
  .then();
*/

//insert and modify to your needs
/* fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    console.log(data)
    console.log(data.name["name"])
  }); */

  //JavaScript AJAX
  let btn = document.getElementById('btn');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    fetch(url)
    .then(response => response.json()) 
    .then(function(data){
      const results = data.results[0];
      document.getElementById('fullname').innerHTML = `${results.name.first} ${results.name.last}`;
      document.getElementById('username').innerHTML = `${results.login.username}`;
      document.getElementById('email').innerHTML = `${results.email}`;
      document.getElementById('city').innerHTML = `${results.location.city}`;
      document.getElementById('avatar').src = `${results.picture.medium}`;
    });
  })
  
  // JQuery
/*   $('#btn').click(function(){
    fetch(url)
    .then(
      //response => response.json()
      //fetch returns a promise object
      function (response) {
        return response.json();
      }
    )
    .then(function (data) {
      //here we modify our response info that we got earlier
      const results = data.results[0];
      console.log(results.name);
      //console.log(data.name["name"])
      $("#fullname").html(`${results.name.first} ${results.name.last}`);
      $("#username").html(`${results.login.username}`);
      $("#email").html(`${results.email}`);
      $("#city").html(`${results.location.city}`);
      $("#avatar").attr('src',`${results.picture.medium}`);
    });
  }) */