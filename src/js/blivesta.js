var $ = require('jquery');
var repoBlivesta = require('./getrepo-blivesta');

var GetRepo = {
  blivesta: function() {
    var d = $.Deferred();
    $.get({
      url: 'https://api.github.com/search/repositories?q=user:blivesta+user:sircus&sort=stars',
      data: { access_token: "f6468a94bb282f9dff6ba9fc1cc66c1482752218" },
      dataType: "jsonp",
      success: d.resolve,
      error: d.reject
    });
    return d.promise();
  }
};

//
GetRepo.blivesta().done(function(datas) {
  repoBlivesta(datas);
});

GetRepo.blivesta().fail(function(datas) {});
