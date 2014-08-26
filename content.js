$(function(){

  //select text field
  var like = $('.pluginButtonLabel');
  //select the image field
  var image = $('.sp_plugin-button');
  //select the form responsible for the click event
  var click = $("form[ajaxify='/plugins/like/connect']");

  //change initial text to dislike
  like.text('Dislike');
  //change the image to a tumbs down
  image.css({
    "background-image": "url(http://i.imgur.com/9VWXjVA.png)",
    "background-repeat": "repeat"
  });

  //remove the click event
  click.each(function(){
    var attributes = this.attributes;
    var i = attributes.length;
    while(i--){
      this.removeAttributeNode(attributes[i]);
    }
  })
  //add new click event
  .on('click', function(){
    like.text('You dislike this');
  });

});