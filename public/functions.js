var typingArea = document.getElementById("typing-area");
var typingAreaMobile = document.getElementById("typing-area-mobile");


var typed = new Typed(typingArea, {
    strings: ["Formando em engenharia mecânica.", "Entusiasta de programação.", "Apaixonado por basquete."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 35,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 30,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: " | ",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
  });
  


  var typed = new Typed(typingAreaMobile, {
    strings: ["Formando em engenharia mecânica.", "Entusiasta de programação.", "Apaixonado por basquete."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 35,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 30,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: " | ",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
  });


  if (window.innerWidth >= 1000){
	let widthMask = $("#portfolio-general-img").width();
	$(".portfolio-mask").css('width', widthMask);	  
  }



