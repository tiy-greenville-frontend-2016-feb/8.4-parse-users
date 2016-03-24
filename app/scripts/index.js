var $ = require('jquery');
var Parse = require('parse');

$(function(){
  Parse.initialize("tiygvl");
  Parse.serverURL = 'http://tiny-parse-server.herokuapp.com/';

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

  $('#signup').on('submit', function(event){
    event.preventDefault();

    var user = new Parse.User();
    user.set({'username': $('#email').val(), 'password': $('#password').val()});

    user.signUp(null, {
      'success': function(results){
        console.log("results: ", results);
      },
      'error': function(user, error){
        console.log(user, error);
      }
    });
  });

  $('#login').on('submit', function(event){
    event.preventDefault();

    Parse.User
      .logIn($('#email-login').val(), $('#password-login').val(), {
        success: function(user) {
          console.log(user);
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
        }
      });
  });


  //var user = new Parse.User();
  console.log(Parse.User.current());

});


  // $.ajaxSetup({
  //   beforeSend: function(xhr){
  //     xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
  //     xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
  //   }
  // });
  //
  //
  //
  // $('#signup').on('submit', function(event){
  //   event.preventDefault();
  //   var $form = $(this);
  //   var data = $form.serialize();
  //
  //   $.post("http://tiny-parse-server.herokuapp.com/User", data, "json").then(function(response){
  //     console.log(response);
  //     if(response.objectId){
  //       alert("created a user with id: " + response.objectId);
  //     }
  //   });
  // });
