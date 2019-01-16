var $ = require("jquery");
var icon = require("./icon");

module.exports = function(datas) {
  var ranking = 18;
  var starTotal = 0;
  var forkTotal = 0;
  var $projects = $(".js-projects");
  var $total = $(".js-total");

  for (var i = 0, length = ranking; i < length; i++) {
    var repo = datas.data.items[i];
    var n = repo.name;

    starTotal = starTotal + repo.stargazers_count;
    forkTotal = forkTotal + repo.forks;

    var detail =
      repo.language +
      " " +
      icon.star +
      repo.stargazers_count +
      " " +
      icon.fork +
      repo.forks;
    var homepahge = repo.homepage ? repo.homepage : repo.html_url;

    if (
      n != "grunts" &&
      n != "site-boilerplate" &&
      n != "gulptasks" &&
      n != "docs" &&
      n != "csscallbacks"
    ) {
      $projects.append(
        $("<div>")
          .addClass("Grid-col t-sm-widthHalf t-md-width1of3")
          .append(
            $("<a>")
              .addClass("Card t-clear")
              .attr("href", homepahge)
              .attr("target", "_blank")
              .append(
                $("<h2>")
                  .addClass("Card-title")
                  .html(repo.name)
              )
              .append(
                $("<ul>")
                  .addClass("ListInline Card-caption t-mbMi")
                  .append($("<li>").html(repo.language))
                  .append(
                    $("<li>").html(icon.star + "&nbsp;" + repo.stargazers_count)
                  )
                  .append($("<li>").html(icon.fork + "&nbsp;" + repo.forks))
              )
              .append(
                $("<p>")
                  .addClass("Card-description")
                  .html(repo.description)
              )
          )
      );
    } // if
  } // for

  $total.html(starTotal);
};
