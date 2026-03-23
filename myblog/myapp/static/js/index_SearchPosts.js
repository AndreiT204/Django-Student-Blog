document.addEventListener("DOMContentLoaded", function () {
  // This message will print in the background if the file loads correctly
  console.log("Search script has successfully loaded.");

  var searchInputEl = document.getElementById("searchInput");
  var searchBtnEl = document.getElementById("searchButton");

  // Safety check: Only attach listeners if the elements actually exist on this page
  if (searchInputEl && searchBtnEl) {
    searchInputEl.addEventListener("keyup", searchPosts);
    searchBtnEl.addEventListener("click", searchPosts);
    console.log("Event listeners successfully attached to the search bar.");
  } else {
    console.error(
      "Critical: Could not find the search bar or button on this page.",
    );
  }

  function searchPosts() {
    var searchInput = searchInputEl.value.toLowerCase();
    var articles = document.getElementsByClassName("box");
    var matchFound = false; // We can use this later for a "No posts found" message

    for (var i = 0; i < articles.length; i++) {
      var titleElement =
        articles[i].getElementsByClassName("box-title-link")[0];

      if (titleElement) {
        var title = titleElement.innerText.toLowerCase();

        if (title.includes(searchInput)) {
          articles[i].style.display = "block";
          matchFound = true;
        } else {
          articles[i].style.display = "none";
        }
      }
    }
  }
});
