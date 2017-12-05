

$.getJSON( "http://localhost:8000/data/test.json", function( data ) {
	console.log(data);
	$.each(data, function( index, value ) {
		console.log(value);
		var b = '<div id="mainfile">' +
	  			'<span class="ui list">' +
	    			'<i class="right triangle icon"></i>' + (index + 1) +
	    		'</span>' +
	  			'<span><a href="' + value['url'] + ' " class="ui header content " >' + value['title'] + '</a></span>' +
	  			'<br><br>' +
	  			'<div class="ui circular label">' + value['score'] + '</div>' +
	  			'<span class="ui tiny ">' + value['by'] + '</span>' +
				'<span class="ui link ">' +
				  '<b><a class="item">Comments </a> <span id="comm">' + value['kids'].length + '</span></b>' +
				'</span>' + 
	  			'</div><hr>';

  		$('#hackernews_content').append(b);
		
	});
 
});

