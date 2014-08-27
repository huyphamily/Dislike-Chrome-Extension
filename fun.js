$('head').append('<style type="text/css">.particle{height:3px;position:absolute;width:3px;}#photo{background:url(http://s3.favim.com/orig/39/cloud-clouds-dark-forest-lake-Favim.com-328707.jpg) #000;height:300px;margin:50px auto;overflow:hidden;position:relative;width:400px;}</style>');
$('body').prepend('<div id="photo"></div>');

var sky, colors, emitter, multicolor;

$.fn.duplicate = function(count, cloneEvents) {
    var tmp = [];
    for ( var i = 0; i < count; i++ ) {
        $.merge( tmp, this.clone(cloneEvents).get());
    }
    return this.pushStack(tmp);
};

function explode() {
    sky = $('#photo');
            
    colors = [  '#ffffff', '#ff0000', '#00ff00', '#ffff00', '#00ffff', '#ff00ff', '#ffee00' ];
            
    emitter = $('<div></div>').addClass('particle');
 
    multicolor = Math.floor(Math.random()*10);

    emitter.css({
      left: Math.floor((400-2)*Math.random()) + 3 + 'px',
      top: Math.floor((100-2)*Math.random()) + 3 + 'px',
      background: colors[Math.floor(Math.random()*colors.length)]
    });
     
    sky.empty().append(emitter.duplicate(50));

    $('div', sky).each(function() {
      xoffset = Math.floor((10+11)*Math.random()) - 10;
      yoffset = Math.floor((10+11)*Math.random()) - 10;

      if(multicolor > 5){
        $(this).css('background', colors[Math.floor(Math.random()*colors.length)]);
      }

      $(this).animate({
        "left": "+="+ xoffset*10 +"px",
        "top": "+="+ yoffset*10 +"px",
      },  2500);

      $(this).animate({
                  "opacity": "0.1",
                  "top": "+=20"
                  },  "slow");
       
    });
}

setInterval(explode, 2000);