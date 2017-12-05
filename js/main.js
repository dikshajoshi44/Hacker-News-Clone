

$.getJSON( "http://localhost:8000/data/test.json", function( data ) {    //reading the data from json file
	console.log(data);    //showing the data on console
	$.each(data, function( index, value ) {    // reading the data from json file one by one , vaule refers to 1 object of json file present in data
		console.log(value);    // showing data of one object on console
		var t = new Date( value['time'] );
		var formatted = t.toISOString("dd.mm.yyyy hh:MM:ss");
		var b = '<div id="mainfile">' +    // variable b is containing all the fields present inside 1 object 
	  			'<span class="ui list">' +
	    			'<i class="right triangle icon"></i>' + (index + 1) +
	    		'</span>' +
	  			'<span><a href="' + value['url'] + ' " class="ui header content " >' + value['title'] + '</a></span>' +
	  			'<br><br>' +
	  			'<div class="ui circular label">' + value['score'] + '</div>' +
	  			'<span class="ui tiny ">' + value['by'] + '</span>' +
	  			'<div id = "dj">' + formatted + '</div>' +
				'<span class="ui link ">' +
				  '<b><a class="item">Comments </a> <span id="comm">' + value['descendants'] + '</span></b>' +
				'</span>' +
	  			'</div><hr>';

  		$('#hackernews_content').append(b);
		
	});
 
});
