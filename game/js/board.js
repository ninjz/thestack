

$(document).ready(function(){

	blocks = document.getElementsByClassName("block");
	frames = document.getElementsByClassName("slot");
	otherPlyr = document.getElementsByClassName("not_active");

	red_chip = document.getElementById("red_chip");
	yellow_chip = document.getElementById("yellow_chip");
	frame = document.getElementById("frame_img");

	var code = ["for i in list:","list = [1,2,3,4,5]","var x", "x += 1"]

	create_board(1,10,550);
	create_blocks(code);

	function create_board(blocks_array, num_blocks, max_width)
	{

		// dynamically alter board size
		// $("#wrapper").css({
		// 	width:max_width  + 'px'
		// });

		var board_height = num_blocks * 50;

		$("#board_area").css({
			width:max_width  + 'px',
			height: board_height + 'px'
		});

		for(var i=0; i < num_blocks; i++){
			var row = $("<div/>").attr({
								id: i,
								class: "row"
							});
			$("#board_area").append(row);
		}

		for(var i=0; i< num_blocks; i++){ // each row
			for(var j=0; j < max_width; j += 50){
				var canvas = $('<canvas />').attr({
	                        id: i,
							class: "slot droppable"
		            });

				// var ctx = $(canvas)[0].getContext('2d');
				// ctx.drawImage(frame, 0, 0, 50, 50);
				$("#"+i+".row").append(canvas);
			}
		}
	}

	function create_blocks(code) {
		for (var i = 0; i < code.length; i++){
			var canvas = document.createElement('canvas')
          	canvas.id = i;
			canvas.className = 'block draggable';
			var ctx = canvas.getContext("2d");
			var text = code[i];
			ctx.font = '25px Arial';
			var metrics = ctx.measureText(text);
			var width = round_up(metrics.width/2 + 10);
			var width = round_up(metrics.width + 10);
			canvas.width = width+1; // a hack to make droppable, idk why
			canvas.height = 50;
			ctx.font = '25px Arial';
			var metrics = ctx.measureText(text);
			var width = round_up(metrics.width + 10);

			ctx.fillStyle='#FF0000';
			ctx.fillRect(0,0,width, 50);

			ctx.fillStyle='#FFFFFF';
			ctx.fillText(text, 5, 35);
			ctx.strokeRect(0,0, width, 50);
			$("<tr><td></td></tr>").appendTo("#block_area").find('td').append(canvas);
		}
	}



	$('.draggable').draggable({
		snap:".droppable",
		snapMode:"inner",
		snapTolerance: 40,
		containment: 'document',
		cursor:"pointer",
		revert: true
	});




	$('.droppable').droppable({
		drop: function(event, ui){

			$(ui.draggable).draggable({revert:false});

			var row = $(this).attr("id"); // column dropped on
			console.log(row);

			// update game state
			gamestate[row] = $(ui.draggable).attr("id");
			console.log(gamestate);



			// $(ui.draggable).draggable({disabled:true});
			// $(ui.draggable).removeClass("draggable");
			// if (row == 0) {
			// 	$(this).droppable({disabled:true});
			// };


			// post move
			// var arguments = {"gamestate" : gamestate,
			// 			  "lastMove" : [row,column],
			// 			  "nextPlyr" : turn,
			// 			  "win" : win,
			// 			  "tie" : tie};
			//
			// var url = "postMove";
			// $.post(url,arguments, function (data,textStatus,jqXHR){
			//
			// });




		}



	});





	function round_up(number){
        return number + (50 - number % 50);
    }



















});
