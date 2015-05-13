Template.challenge.helpers({
    challenge: {
        problem: '<div class="msB"><p><strong>Sorting</strong> <br> \
One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms. </p>\
<p><strong>Insertion Sort</strong> <br> \
These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with an already sorted list. </p> \
<p><strong>Insert element into sorted list</strong> <br> \
Given a sorted list with an unsorted number <em>V</em> in the right-most cell, can you write some simple code to <i>insert</i> <em>V</em> into the array so it remains sorted? </p> \
<p>Print the array every time a value is shifted in the array until the array is fully sorted. The goal of this challenge is to follow the correct order of insertion sort. </p> \
<p><em>Guideline:</em> You can copy the value of <em>V</em> to a variable, and consider its cell "empty". Since this leaves an extra cell empty on the right, you can shift everything over until <em>V</em> can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace a value with <em>V</em>. </p> \
<p><strong>Input Format</strong> <br> \
There will be two lines of input:</p> \
<ul> \
<li><em>s</em> - the size of the array</li> \
<li><em>ar</em> - the sorted array of integers</li> \
</ul> \
<p><strong>Output Format</strong> <br> \
On each line, output the entire array every time an item is shifted in it. </p> \
<p><strong>Constraints</strong> <br> \
1&lt;=<em>s</em>&lt;=1000 <br> \
-10000&lt;=<em>x</em>&lt;= 10000,  <em>x ∈ ar</em> </p> \
<p><strong>Sample Input</strong>  </p> \
<pre><code>5 \
2 4 6 8 3 \
</code></pre> \
<p><strong>Sample Output</strong></p> \
<pre><code>2 4 6 8 8 \
2 4 6 6 8 \
2 4 4 6 8 \
2 3 4 6 8 \
</code></pre> \
<p><strong>Explanation</strong></p> \
<p>3 is removed from the end of the array.<br> \
In the 1<sup>st</sup> line 8 &gt; 3, 8 is shifted one cell right. <br> \
In the 2<sup>nd</sup> line 6 &gt; 3, 6 is shifted one cell right. <br> \
In the 3<sup>rd</sup> line 4 &gt; 3, 4 is shifted one cell right. <br> \
In the 4<sup>th</sup> line 2 &lt; 3, 3 is placed at position 2.  </p> \
<p><strong>Task</strong>  </p> \
<p>Complete the method <i>insertionSort</i> which takes in 1 parameter:</p> \
<ul> \
<li><em>ar</em> - an array with the value <em>V</em> in the right-most cell.</li> \
</ul></div>',
        code: ["def insertionSort(alist):", "for index in range(1,len(alist)):", "currentvalue = alist[index]", "position = index", "while position>0 and alist[position-1]>currentvalue:"
        , "alist[position]=alist[position-1]", "position = position-1", "alist[position]=currentvalue", "alist = [54,26,93,17,77,31,44,55,20]", "insertionSort(alist)" , "print(alist)"],
        answer: [1,2,3,4,5]
    }
});


Template.challenge.rendered = function() {

    var gamestate = [];  // current gamestate
    var num_rows;

    blocks = document.getElementsByClassName("block");
    frames = document.getElementsByClassName("slot");


    var code = ["def insertionSort(alist):", "for index in range(1,len(alist)):", "currentvalue = alist[index]", "position = index", "while position>0 and alist[position-1]>currentvalue:"
    , "alist[position]=alist[position-1]", "position = position-1", "alist[position]=currentvalue", "alist = [54,26,93,17,77,31,44,55,20]", "insertionSort(alist)" , "print(alist)"]

    var shuffled_code = shuffleCodeLines(code);


    create_board(shuffled_code, 550);
    create_blocks(shuffled_code);

    function create_board(blocks_array, max_width)
    {
        num_rows = blocks_array.length + 3;
        var board_height = num_rows * 40;

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
            alert('gamestate: ' + gamestate + '\nanswerkey: ' + answerKey);
            for(var i=0; i < num_rows; i++){

                $("#"+i+".board_row").append(row);
            }
    });



    $('.draggable').draggable({
        snap:".active",
        snapMode:"inner",
        snapTolerance: 40,
        containment: 'document',
        cursor:"pointer",
        revert: true
    });


    $('.droppable').droppable({
        drop: function(event, ui){

            // if($(this).hasClass("active")){
                $(this).parent().children().removeClass("active");
                $(this).parent().children().droppable( "option", "disabled", true );

                $(ui.draggable).draggable({revert:false});

                var row = $(this).attr("id"); // column dropped on
                console.log(row);

                // update game state
                gamestate[row] = $(ui.draggable).attr("id");
                console.log(gamestate);
            // }
        },
        out: function(){
            // if(!$(this).hasClass("active")){
                $(this).parent().children().addClass("active");
                $(this).parent().children().droppable( "option", "disabled", false );
                console.log('outtt');
                var row = $(this).attr("id");

                // $(ui.draggable).draggable({revert:false});

                gamestate[row] = null;
                console.log(gamestate);
            // }
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
