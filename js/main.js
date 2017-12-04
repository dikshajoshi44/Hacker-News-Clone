
// for(i=0;i<10;i++){
// 	var a = "<div class='row'>hello world</div>";
// 	$('#hackernews_content').append(a);
// }

$.getJSON( "http://localhost:8000/data/test.json", function( data ) {
	console.log(data);
	$.each(data, function( index, value ) {
		var a = "<div class='row'>"+ value['title'] +"</div>";
		$('#hackernews_content').append(a);
	});
 // $('#hackernews_content').append(data[0]['title']);
});