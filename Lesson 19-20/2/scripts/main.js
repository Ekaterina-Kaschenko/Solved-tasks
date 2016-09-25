;(function(){
  function getSkills(data) {
    if (!_.isArray(data)) return false;
    
    var skills = [];
    _(data).forEach(function(item) {
      Array.prototype.push.apply(skills, item.skills);
    });

    var sortByAlphabet = _.sortBy(_.uniq(skills), function(s) { 
      return s.toLowerCase().charCodeAt();
    });
    
    return sortByAlphabet;
  }
   
  function getNames(data) {
    if (!_.isArray(data)) return false;
    
    var people = [];
    _(data).forEach(function(item) {
      people.push([item.name, item.friends.length]);
    });

    var sortPersons = _.sortBy(people, function(person) { 
      return person[1];
    });
    
    return _.map(sortPersons, function(item) {
      return item[0];
    });
  }
   
  function getFriends(data) {
    if (!_.isArray(data)) return false;
    
    var friends = [];
    _(data).forEach(function(item) {
      Array.prototype.push.apply(friends, item.friends); 
    });
    
    var names = _.map(friends, function(item) {
      return item.name;
    });
    
    return _.uniq(names);
  }

  console.log('Skills: ', getSkills(data));
  console.log('Names: ', getNames(data));
  console.log('Friends: ', getFriends(data));
   
}());