function setArticle() { // load filename & set its text to <div id=content>
    $("#content").load($(this).attr("article") + ".html");// this element (item clicked)--> value of attrribute named "article" --> concatenate ".html"
                                                          // the attribute's value is "article1", so you get:  "article1"+".html"
}
$(document).ready(function () { // page onload for event wireups
    $(".navItem").click(setArticle); // any item with class=navItem that gets clicked, run setArticle method
});