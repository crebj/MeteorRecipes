var recipes = new Meteor.Collection( "Recipes" )
var users = new Meteor.Collection( "Users" )
var tags = new Meteor.Collection( "Tags" )

if (Meteor.isClient) {
 /* Template.hello.greeting = function () {
    return "Login to Recipes.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });*/

  Template.listRecipes.recipes = function() {
    return recipes.find( {} );
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
