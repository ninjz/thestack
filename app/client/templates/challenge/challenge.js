Template.challenge.helpers({
    getArray: function() {
      var self = this;
      self.code = self.code || [];
      return _.map(self.code, function(value, index){
        return {value: value, index: index};
      });
    }
});


Template.challenge.rendered = function() {

    var gamestate = [];  // current gamestate
    var num_rows, exp_blocks;

    blocks = document.getElementsByClassName("block");
    frames = document.getElementsByClassName("slot");

    // var code = document.getElementById("code").innerHTML;
    var code = [];


    $('#code_area').children().each(function() {
        code.push($(this).text());
        // console.log('HI');
    });



    // var code = ["def insertionSort(alist):", "for index in range(1,len(alist)):", "currentvalue = alist[index]", "position = index", "while position>0 and alist[position-1]>currentvalue:"
    // , "alist[position]=alist[position-1]", "position = position-1", "alist[position]=currentvalue", "alist = [54,26,93,17,77,31,44,55,20]", "insertionSort(alist)" , "print(alist)"]


    var shuffled_code = shuffleCodeLines(code);


    create_board(shuffled_code, 550);
    create_blocks(shuffled_code);

    function create_board(blocks_array, max_width)
    {
        num_rows = blocks_array.length + 3;
        var board_height = num_rows * 28;

        $("#board_area").css({
            width:max_width  + 'px',
            height: board_height + 'px'
        });


        for(var i=0; i < num_rows; i++){
            var row = $("<div/>").attr({
                                id: i,
                                class: "board_row"
                            });
            $("#board_area").append(row);
        }

        for(var i=0; i< num_rows; i++){ // each row
            for(var j=0; j < max_width; j += 40){
                var frame = $('<div />').attr({
                            id: i,
                            class: "slot droppable active"
                    });


                $("#"+i+".board_row").append(frame);
            }
        }
    }

    function create_blocks(shuffled_code) {
        for (var i = 0; i < shuffled_code.length; i++){

            // initialize game state
            gamestate[i] = null;
            exp_blocks = shuffled_code.length;

            // cheesy implementation, hackable by looking at source and looking at id number
            var count = 0;
            for (count = 0; count < code.length; count++) {
                if (code[count] == shuffled_code[i]) {
                    break;
                }
            }

            var block = $('<div />').attr({
                id: count,
                class: "block draggable"
            });

            block.text(shuffled_code[i]);



            $("<tr><td></td></tr>").appendTo("#block_area").find('td').append(block);

            var optWidth = round_up(parseInt(block.css("width")));

            block.css({ width: optWidth });
        }

    }




    $('.run-btn').click(function(){

        // check game state to verify if correct or not.
        var curr, num = 0;

        for(var i = 1; i < gamestate.length; i++){
            curr = gamestate[i-1];
            if (curr != null && gamestate[i] != null){
                if ( curr > gamestate[i] ){
                    $("#game_status_incorrect").show();
                    return;
                }
            }
            num++; // keeps track of how many blocks are actually on the board

        }

        return (num == exp_blocks) ? $("#game_status_correct").show() : $("#game_status_incorrect").show();
    });

    $("#block_area").droppable({
        drop: function(event,ui){
            var row = $(ui.draggable).data('currentRow');
            if(row != null){
                console.log(row);
                $("#"+row+".board_row").children().droppable("option", "disabled", false);

                $(ui.draggable).data('currentRow', null);
            }
        }
    })



    $('.draggable').draggable({
        snap:".active",
        snapMode:"inner",
        snapTolerance: 40,
        containment: 'document',
        cursor:"move",
        revert: 'invalid'
    });


    $('.droppable').droppable({
        drop: function(event, ui){

                // re-enable previous row, if moving from another row
                var row = $(ui.draggable).data('currentRow');
                if(row != null){
                    console.log(row);
                    $("#"+row+".board_row").children().droppable("option", "disabled", false).addClass("active");

                    // delete row from game state
                    gamestate[row] = null;

                    $(ui.draggable).data('currentRow', null);
                }


                $(this).parent().children().removeClass("active");
                $(this).parent().children().droppable("option", "disabled", true);

                row = $(this).attr("id"); // column dropped on

                // store row block is on in meta deta
                $(ui.draggable).data('currentRow', row);

                // update game state
                gamestate[row] = $(ui.draggable).attr("id");
                console.log(gamestate);
        },
        out: function(){
                $(this).parent().children().addClass("active");

                var row = $(this).attr("id");

                gamestate[row] = null;
                console.log(gamestate);
                $(this).parent().children().droppable("option", "disabled", false);
        }
    });


    function shuffleCodeLines(code){
        var copy = code.slice();

        var currentIndex = copy.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = copy[currentIndex];
            copy[currentIndex] = copy[randomIndex];
            copy[randomIndex] = temporaryValue;
        }

        return copy;
    }

    function parseToArray(text){
        return text.split(',');
    }

    function round_up(number){
        return number + (38 - number % 38);
    }
};
