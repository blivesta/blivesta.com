var $ = require('jquery');
var icon = require('./icon');

module.exports = function(datas) {

  var repoCount = 1;
  var $projects = $(".js-projects");

  for (var i = 0, length = repoCount; i < length; i++) {

    var repo = datas.data[i];
    var detail = repo.language + ' ' + icon.star + repo.stargazers_count + ' ' + icon.fork + repo.forks;
    var homepahge = repo.homepage ? repo.homepage : repo.html_url;

    $projects.append(
      $("<div>")
      .addClass("Grid-col t-sm-widthHalf t-md-width1of3")
      .append(
        $("<a>")
        .addClass("Card t-clear")
        .attr('href', homepahge)
          .append(
            $("<h2>")
            .addClass("Card-title")
            .html(repo.name)
          )
          .append(
            $("<ul>")
            .addClass("ListInline Card-caption t-mbMi")
            .append(
              $("<li>")
              .html(repo.language)
            )
            .append(
              $("<li>")
              .html(icon.star + '&nbsp;' + repo.stargazers_count)
            )
            .append(
              $("<li>")
              .html(icon.fork + '&nbsp;' + repo.forks)
            )
          )
          .append(
            $("<p>")
            .addClass("Card-description")
            .html(repo.description)
          )
        )
      );
    } // for
};
