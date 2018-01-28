function renderTopicList(array){
  var html="";
  html += "    <li>";
  html += "      <a href=\"#\" class=\"item-link item-content\" onclick=\"redirectQuestionPage("+ array.master_id +")\">";
  html += "        <div class=\"item-inner\">";
  html += "          <div class=\"item-title\">";
  html += "             "+array.title+"";
  html += "            <div class=\"item-footer\">"+array.createtime+"<\/div>";
  html += "          <\/div>";
  html += "        <\/div>";
  html += "      <\/a>";
  html += "    <\/li>";



  return html;
}

function redirectQuestionPage(index){
    app.view.current.router.navigate("/question/?id="+ index)
}
