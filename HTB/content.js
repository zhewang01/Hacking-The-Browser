alert("恭喜发财 HAPPY NEW YEAR");

function injectJquery(callback) {
  if (window.jQuery) {
    return callback(window.jQuery);
  }
  let script = document.createElement('script');
  script.setAttribute(
    'src',
    '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
  );
  script.onload = () => callback(window.jQuery);
  script.onerror = e => alert('The script failed to load: ' + e);
  document.head.appendChild(script);
}

injectJquery(function($) {
  // YOUR CODE GOES HERE and can use the $ variable
});alert("HAPPY CHINESE NEW YEAR!");function injectJquery(callback) {
  if (window.jQuery) {
    return callback(window.jQuery);
  }
  let script = document.createElement('script');
  script.setAttribute(
    'src',
    '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
  );
  script.onload = () => callback(window.jQuery);
  script.onerror = e => alert('The script failed to load: ' + e);
  document.head.appendChild(script);
}

injectJquery(function($) {
  $("body").css('background-color','red');
  $("body").css('color','blue');
  $('p').css({'font-size': '20px'});
  $("h1").text(' 恭喜发财 HAPPY NEW YEAR');
  $("p").text('LOOK HERE & CLICK ME 恭喜发财 HAPPY NEW YEAR');
  //$("div").text('恭喜发财 HAPPY NEW YEAR');

 var imgSrc = 'https://img10.360buyimg.com/n1/jfs/t3376/280/1178346087/292106/8b6fa71d/581ff0caN1f17399c.jpg';
 var imgHTML = '<img id="my-image" src="' + imgSrc + '">';

// Append the html to the <body> (the browser reads the HTML and adds it appropriately)
// This appends it to the end of the body (it will appear on screen at the bottom of the page)
$('body').append(imgHTML);

// Now that the img is added to the DOM, get it by its id
var img = $('#my-image');

// `animate` is like `css`, except jQuery will animate the property change
// This will make the img animate from 200x150 to 400x300
img.animate({
  width: '400px',
  height: '300px'
});
// add a click listener to *every* p element on the page
$('p').click(function() {
  // This function is executed every time someone clicks on a P element
  var paragraphText = $(this).text();
  alert('You clicked a paragraph that had the text: ' + 'LOOK 恭喜发财 HAPPY NEW YEAR');
  alert('You clicked a paragraph that had the text: ' + 'YOU TOO');

  // Change the text
  //$(this).text('gung hei faat coi');
  $('div').text('gung hei faat coi');

});
  // YOUR CODE GOES HERE and can use the $ variable
});
