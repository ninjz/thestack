Meteor.startup(function() {

    if (Challenge.find({}).count() === 0) {

        Challenge.insert({
            domain: 'Sorting',
            subdomain: 1,
            level: 1,
            title: 'Insertion Sort',
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
            createdAt: new Date()
        });

       //test
       Challenge.insert({
           domain: 'Sorting',
           subdomain: 1,
           level: 2,
           title: 'Introduction to coding',
           problem: '<div class="msB"><p><strong>Introduction</strong> <br> \
                       Programming is not something that can be learned in a day, rather it takes months and years to fully master and understand code. We will now begin to educate you on \
                       the basics of coding, using "psudedo code" (pretend code, its easier to understand this before moving onto actual syntax) to demonstrate basic code structure!</p> \
                       <p><strong></strong> <br> \
                       These challenges will cover basic code structure </p> \
                       <p><strong>Introduction to Functions</strong> <br> \
                          A function in programming is sort of like a factory. It takes in a particular "input", and returns out a particular "output". The format for most functions follow this:</p> \
                       <p>functionName(int input)</p> \
                       <p>The above code is what you would expect, a function name and a bracket encasing the input. However, you may ask, what does the "int" mean? The int is short \
                       for integer. Usually languages require you to list in the type of input you give into the function. Also note that depending on the coding language you use, functions may look different depending on the language. </p> \
                       <p> For variables inside the function, you are also required to list out their "type" </p> \
                        <p> The "return" keyword basically signifies the end of a function. You can choose to return back a specific value back to the "caller" of the function </p> \
                       <p><em>Game Format:</em> To complete this level, you must organize the lines of code in a way that the code is legal and will run.</p> \
                       </div>',
           code: ["basicfunction(int x):", "int a;", "int b;", "a = 100;"
           , "b = a + x;", "return b;"],
           createdAt: new Date()
       });


    }
});
