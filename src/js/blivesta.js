var $ = require('jquery');
var repoBlivesta = require('./getrepo-blivesta');
var repoSircus = require('./getrepo-sircus');

var GetRepo = {
  blivesta: function() {
    var d = $.Deferred();
    $.ajax({
      url: 'https://api.github.com/users/blivesta/repos',
      data: { access_token: "64f825c5471958c54227629640bc3659fc14d81c" },
      dataType: "jsonp",
      success: d.resolve,
      error: d.reject
    });
    return d.promise();
  },
  sircus: function() {
    var d = $.Deferred();
    $.ajax({
      url: 'https://api.github.com/orgs/sircus/repos',
      data: { access_token: "15f2af8f454997c983a77f748e525090db5707b7" },
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


GetRepo.sircus().done(function(datas) {
  repoSircus(datas);
});


GetRepo.sircus().fail(function(datas) {});
