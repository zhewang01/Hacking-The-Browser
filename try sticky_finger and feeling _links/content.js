$(window).mousemove(function (e){
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  var els = document.elementsFromPoint(e.clientX, e.clientY);

  for (var el of els){
    if (el.tagName == 'A' && el.className.indexOf('sticky-clicky') == -1){
      console.log(el.tagName);
      el.classList.add('sticky-clicky');
      el.setAttribute('originX', mouseX);
      el.setAttribute('originY', mouseY);
      el.style.display = 'inline-block';
    }
  }

  $('.sticky-clicky').each(function (){
    var originX = this.getAttribute('originX');
    var originY = this.getAttribute('originY');

    var dx = mouseX - originX;
    var dy = mouseY - originY;

    this.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
  });
});

var fleeIntervals = {};

$('a').hover(onMouseEnter, onMouseLeave);

function onMouseEnter(e){
  var el = e.target;
  var width = $(el).width();
  var height = $(el).height();

  if (!fleeIntervals.hasOwnProperty(el)){
    var midX = $(el).offset().left + $(el).width()/2 - $(window).scrollLeft();
    var midY = $(el).offset().top + $(el).height()/2 - $(window).scrollTop();
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    var angle = Math.atan2(midY - mouseY, midX - mouseX);
    var dy = Math.sin(angle);
    var dx = Math.cos(angle);

    function flee(){
      if (el.style.transform === ''){
        el.style.display = 'block';
        el.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
      }

      var currentMatrix = el.style.transform;
      var matrixArr = currentMatrix.replace('matrix(', '').replace(')', '').split(', ');
      var tx = parseFloat(matrixArr[4]);
      var ty = parseFloat(matrixArr[5]);

      var deltas = [tx + dx, ty + dy];
      el.style.transform = 'matrix(1,0,0,1,' + deltas.join(', ') + ')';
      el.style.width = width + 'px';
      el.style.height = height + 'px';
    }

    fleeIntervals[el] = setInterval(flee, 4);
  }
}

function onMouseLeave(e){
  var el = e.target;
  if (fleeIntervals.hasOwnProperty(el)){
    setTimeout(function (){
      if (!$(e.target).is(':hover')){
        clearInterval(fleeIntervals[el]);
        delete fleeIntervals[el];
      } else {
        console.log('still hovering');
        setTimeout(function (){
          onMouseLeave(e);
        }, 200);
      }
    }, 500);
  }
}
