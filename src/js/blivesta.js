var $ = require('jquery');
var repoBlivesta = require('./getrepo-blivesta');

var GetRepo = {
  blivesta: function() {
    var d = $.Deferred();
    $.get({
      url: 'https://api.github.com/search/repositories?q=user:blivesta+user:sircus&sort=stars',
      data: { access_token: "99e3be7ff8812c3d01d64260fe7bef0446f88351" },
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
