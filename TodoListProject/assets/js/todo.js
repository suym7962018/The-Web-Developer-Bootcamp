//CHeck off specific todos by clicking

// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

$("ul").on("click", "li", function(){		//use on rather than click
//on can be used for potential future elements
//click only work for existing elements, when add new li, not work
	$(this).toggleClass("completed");
});

//Click on <span> to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){	//parent for both <li> & <span>
		$(this).remove();	//remove after fadeout
	});
	event.stopPropagation();	//not execute "li" func
});

//Create new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){		//enter
		//grab new todo text from input
		var todo = $(this).val();
		$(this).val("");	//clear input
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + "</li>");
	}
})

//toggle the add new todo 
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
})