var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Inside which HTML element do we put the JavaScript?",
		"options" : [
			{"a": "&lt;script&gt;", 
			 "b":"&lt;javascript&gt;", 
			 "c":"&lt;scripting&gt;", 
			 "d":"&lt;js&gt;"}
			],
		"answer":"&lt;script&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Where is the correct place to insert a JavaScript?",
		"options" : [
			{"a": "The &lt;head&gt; section", 
			 "b":"The &lt;body&gt; section", 
			 "c":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct"}
			],
		"answer":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What is the correct syntax for referring to an external script called 'xxx.js'?",
		"options" : [
			{"a": "&ltscript href=&quot;xxx.js&quot;>", 
			 "b":"&lt;script name=&quot;xxx.js&quot;&gt;", 
			 "c":"&lt;script src=&quot;xxx.js&quot;&gt;"}
			],
		"answer":"&lt;script src=&quot;xxx.js&quot;&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "The external JavaScript file must contain the &lt;script&gt; tag.",
		"options" : [
			{"a": "True", 
			 "b":"False"
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "How do you write &quot;Hello World&quot; in an alert box?",
		"options" : [
			{"a": "alertBox(&quot;Hello World&quot;);", 
			 "b":"msg(&quot;Hello World&quot;);",
			 "c":"alert(&quot;Hello World&quot;);",
			 "d":"msgBox(&quot;Hello World&quot;);",
			}
			],
		"answer":"alert(&quot;Hello World&quot;);",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "How do you create a function in JavaScript?",
		"options" : [
			{"a": "function myFunction()", 
			 "b":"function:myFunction()",
			 "c":"function = myFunction()",
			}
			],
		"answer":"function myFunction()",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "How do you call a function named &quot;myFunction&quot;?",
		"options" : [
			{"a": "call function myFunction()", 
			 "b":"call myFunction()",
			 "c":"myFunction()",
			}
			],
		"answer":"myFunction()",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "How to write an IF statement in JavaScript?",
		"options" : [
			{"a": "if i = 5 then", 
			 "b":"if i == 5 then",
			 "c":"if (i == 5)",
			 "d":" if i = 5",
			}
			],
		"answer":"if (i == 5)",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Which of the following is a disadvantage of using JavaScript?",
		"options" : [
			{"a": "Client-side JavaScript does not allow the reading or writing of files.", 
			 "b":"JavaScript can not be used for Networking applications because there is no such support available.",
			 "c":"JavaScript doesn't have any multithreading or multiprocess capabilities.",
			 "d":"All of the above."
			}
			],
		"answer":"All of the above.",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
		"options" : [
			{"a": "if (i <> 5)", 
			 "b":"if i <> 5",
			 "c":"if (i != 5)",
			 "d":"if i =! 5 then",
			}
			],
		"answer":"if (i != 5)",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "How does a WHILE loop start?",
		"options" : [
			{"a": "while i = 1 to 10", 
			 "b":"while (i &lt;= 10; i++)",
			 "c":"while (i &lt;= 10)"
			}
			],
		"answer":"while (i &lt;= 10)",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "How does a FOR loop start?",
		"options" : [
			{"a": "for (i = 0; i &lt;= 5)", 
			 "b":"for (i = 0; i &lt;= 5; i++)",
			 "c":"for i = 1 to 5",
			 "d":"for (i &lt;= 5; i++)"
			}
			],
		"answer":"for (i = 0; i &lt;= 5; i++)",
		"score":0,
		"status": ""
	},
	{
		"id" : 13,
		"question" : "How can you add a comment in a JavaScript?",
		"options" : [
			{"a": "//This is a comment", 
			 "b":"&sbquo;This is a comment",
			 "c":"&lt;!--This is a comment--&gt;"
			}
			],
		"answer":"//This is a comment",
		"score":0,
		"status": ""
	},
	{
		"id" : 14,
		"question" : "How to insert a comment that has more than one line?",
		"options" : [
			{"a": "/*This comment has more than one line*/", 
			 "b":"//This comment has more than one line//",
			 "c":"&lt;!--This comment has more than one line--&gt;"
			}
			],
		"answer":"/*This comment has more than one line*/",
		"score":0,
		"status": ""
	},
	{
		"id" : 15,
		"question" : "What is the correct way to write a JavaScript array?",
		"options" : [
			{"a": "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)", 
			 "b":"var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
			 "c":"var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
			 "d":"var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;"
			}
			],
		"answer":"var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
		"score":0,
		"status": ""
	},
	{
		"id" : 16,
		"question" : "How do you round the number 7.25, to the nearest integer?",
		"options" : [
			{"a": "rnd(7.25)", 
			 "b":"Math.round(7.25)",
			 "c":"Math.rnd(7.25)",
			 "d":"round(7.25)"
			}
			],
		"answer":"Math.round(7.25)",
		"score":0,
		"status": ""
	},
	{
		"id" : 17,
		"question" : "How do you find the number with the highest value of x and y?",
		"options" : [
			{"a": "Math.max(x, y)", 
			 "b":"Math.ceil(x, y)",
			 "c":"top(x, y)",
			 "d":"ceil(x, y)"
			}
			],
		"answer":"Math.max(x, y)",
		"score":0,
		"status": ""
	},
	{
		"id" : 18,
		"question" : "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",
		"options" : [
			{"a": "w2 = window.new(&quot;http://www.w3schools.com&quot;);", 
			 "b":"w2 = window.open(&quot;http://www.w3schools.com&quot;);"

			}
			],
		"answer":"w2 = window.open(&quot;http://www.w3schools.com&quot;);",
		"score":0,
		"status": ""
	},
	{
		"id" : 19,
		"question" : "JavaScript is the same as Java.",
		"options" : [
			{"a": "true", 
			 "b":"false"

			}
			],
		"answer":"false",
		"score":0,
		"status": ""
	},
	{
		"id" : 20,
		"question" : "How can you detect the client&rsquo;s browser name?",
		"options" : [
			{"a": "navigator.appName", 
			 "b":"browser.name",
			 "c":"client.navName"
			}
			],
		"answer":"navigator.appName",
		"score":0,
		"status": ""
	},
	{
		"id" : 21,
		"question" : "Which event occurs when the user clicks on an HTML element?",
		"options" : [
			{"a": "onchange", 
			 "b":"onclick",
			 "c":"onmouseclick",
			 "d":"onmouseover"
			}
			],
		"answer":"onclick",
		"score":0,
		"status": ""
	},
	{
		"id" : 22,
		"question" : "How do you declare a JavaScript variable?",
		"options" : [
			{"a": "var carName;", 
			 "b":"variable carName;",
			 "c":"v carName;"
			}
			],
		"answer":"var carName;",
		"score":0,
		"status": ""
	},
	{
		"id" : 23,
		"question" : "Which operator is used to assign a value to a variable?",
		"options" : [
			{"a": "*", 
			 "b":"-",
			 "c":"=",
			 "d":"x"
			}
			],
		"answer":"=",
		"score":0,
		"status": ""
	},
	{
		"id" : 24,
		"question" : "What will the following code return: Boolean(10 &gt; 9)",
		"options" : [
			{"a": "NaN", 
			 "b":"false",
			 "c":"true"
			}
			],
		"answer":"true",
		"score":0,
		"status": ""
	},
	{
		"id" : 25,
		"question" : "Is JavaScript case-sensitive?",
		"options" : [
			{"a": "No", 
			 "b":"Yes"
			}
			],
		"answer":"Yes",
		"score":0,
		"status": ""
	},
	{
		"id" : 26,
		"question" : "How many tags are in a regular element?",
		"options" : [
			{"a": "2", 
			 "b":"1",
			 "c":"3"
			}
			],
		"answer":"2",
		"score":0,
		"status": ""
	},
	
	{
		"id" : 27,
		"question" : "What is an element that does not have a closing tag called?",
		"options" : [
			{"a": "Tag", 
			 "b":"Empty Tag",
			 "c":"Closed Tag"
			}
			],
		"answer":"Empty Tag",
		"score":0,
		"status": ""
	},
	{
		"id" : 28,
		"question" : "Which of the following is an example of an empty element?",
		"options" : [
			{"a": "< img />", 
			 "b":"< img > < /img >",
			 "c":"< /img >"
			}
			],
		"answer":"< img />",
		"score":0,
		"status": ""
	},
	{
		"id" : 29
		,
		"question" : " What should values always be enclosed in?",
		"options" : [
			{"a": "Quotation marks", 
			 "b":"Commas",
			 "c":"Parenthesis"
			}
			],
		"answer":"Quotation marks",
		"score":0,
		"status": ""
	},
	{
		"id" : 30
		,
		"question" : "Where do all items for the same website need to be saved?",
		"options" : [
			{"a": "In the same folder", 
			 "b":"Where ever is fine",
			 "c":"In different folders"
			}
			],
		"answer":"In the same folder",
		"score":0,
		"status": ""
	},
	{
		"id" : 31
		,
		"question" : 'What does < a  h r e f = "h t t p :/ / w w w.g o o g l e . c o m" &nbsp; t i t l e = "L i n k t o Google "target="_ blank">Google </a> do?',
		"options" : [
			{"a": "Adds a link to google on the page", 
			 "b":"Adds a search engine to the page",
			 "c":"Nothing"
			}
			],
		"answer":"Adds a link to google on the page",
		"score":0,
		"status": ""
	},
	{
		"id" : 32
		,
		"question" : ' What is always a welcome page, and explains the purpose or topic of the site?',
		"options" : [
			{"a": "Page 4", 
			 "b":"Home Page",
			 "c":"Table of Contents"
			}
			],
		"answer":"Home Page",
		"score":0,
		"status": ""
	},
	{
		"id" : 33
		,
		"question" : 'What does View Source do?',
		"options" : [
			{"a": "Nothing", 
			 "b":"Brings up a note pad with the HTML code already used for the site.",
			 "c":"Opens a new website"
			}
			],
		"answer":"Brings up a note pad with the HTML code already used for the site.",
		"score":0,
		"status": ""
	},
	{
		"id" : 34
		,
		"question" : 'How can we change the background color of an element?',
		"options" : [
			{"a": "background-color", 
			 "b":"color",
			 "c":"both a & b",
			 "d":"none of these"
			}
			],
		"answer":"background-color",
		"score":0,
		"status": ""
	},
	{
		"id" : 35
		,
		"question" : 'How can we change the text color of an element?',
		"options" : [
			{"a": "background-color", 
			 "b":"color",
			 "c":"both a & b",
			 "d":"none of these"
			}
			],
		"answer":"color",
		"score":0,
		"status": ""
	},
	{
		"id" : 36
		,
		"question" : 'In how many ways can CSS be written in?',
		"options" : [
			{"a": "3", 
			 "b":"2",
			 "c":"1",
			 "d":"4"
			}
			],
		"answer":"3",
		"score":0,
		"status": ""
	},
	{
		"id" : 37
		,
		"question" : 'What type of CSS is generally recommended for designing large web pages?',
		"options" : [
			{"a": "Internal css", 
			 "b":"External css",
			 "c":"Inline css",
			 "d":"none of these"
			}
			],
		"answer":"External css",
		"score":0,
		"status": ""
	},
	{
		"id" : 38
		,
		"question" : 'How can we select an element with a specific ID in CSS',
		"options" : [
			{"a": ".", 
			 "b":"#",
			 "c":"both a & b",
			 "d":"none of these"
			}
			],
		"answer":"#",
		"score":0,
		"status": ""
	},
	{
		"id" : 39
		,
		"question" : 'In the below code snippet, in what order will the margins be added?p {margin: 25px 50px 75px 100px;}',
		"options" : [
			{"a": "top,Right,bottom,left", 
			 "b":"top,bottom,right,left",
			 "c":"top,right,left,bottom",
			 "d":"none of these"
			}
			],
		"answer":"top,Right,bottom,left",
		"score":0,
		"status": ""
	},
	{
		"id" : 40
		,
		"question" : ' The CSS property used to specify the transparency of an element is?',
		"options" : [
			{"a": "opacity", 
			 "b":"visibility",
			 "c":"filter",
			 "d":"none of these"
			}
			],
		"answer":"opacity",
		"score":0,
		"status": ""
	},
	{
		"id" : 41
		,
		"question" : 'How can we specify the spacing between each letter in a text in CSS?',
		"options" : [
			{"a": "line-height", 
			 "b":"letter-spacing",
			 "c":"text-transform",
			 "d":"none of these"
			}
			],
		"answer":"letter-spacing",
		"score":0,
		"status": ""
	},
	{
		"id" : 42
		,
		"question" : 'Which of the following are valid ways to represent a colour in CSS?',
		"options" : [
			{"a": "A valid color name", 
			 "b":"RGB Values",
			 "c":"HEX values",
			 "d":"All of these",
			 "e":"None of these"
			}
			],
		"answer":"All of these",
		"score":0,
		"status": ""
	},
	{
		"id" : 43
		,
		"question" : ' Which of the following is the correct way to select all h1 headers in a div element?',
		"options" : [
			{"a": "div h1", 
			 "b":"div-h1",
			 "c":"div > h1",
			 "d":"Both a & c"
			}
			],
		"answer":"both a & c",
		"score":0,
		"status": ""
	},
	{
		"id" : 44
		,
		"question" : 'Setting an inline-block in CSS requires which of the following properties?',
		"options" : [
			{"a": "display", 
			 "b":"color",
			 "c":"block",
			 "d":"none of these"
			}
			],
		"answer":"display",
		"score":0,
		"status": ""
	},
	{
		"id" : 45
		,
		"question" : 'Which of the following are parts of the CSS box model?',
		"options" : [
			{"a": "Margin", 
			 "b":"Padding",
			 "c":"Borders",
			 "d":"All of these"
			}
			],
		"answer":"All of these",
		"score":0,
		"status": ""
	},
	{
		"id" : 46
		,
		"question" : 'Which of the following components of the CSS box model are transparent?',
		"options" : [
			{"a": "Margin", 
			 "b":"Padding",
			 "c":"Both a & b",
			 "d":"All of these"
			}
			],
		"answer":"Both a & b",
		"score":0,
		"status": ""
	},
	{
		"id" : 47
		,
		"question" : 'What will be the width of the div element given below? div { width: 310px; padding: 20px; border: 5px solid blue; margin: 0;}',
		"options" : [
			{"a": "310px", 
			 "b":"350px",
			 "c":"360px",
			 "d":"None of these"
			}
			],
		"answer":"360px",
		"score":0,
		"status": ""
	},
	{
		"id" : 48
		,
		"question" : 'What value should be passed to the width parameter if we want an element, say a table, to span the entire width of the screen?',
		"options" : [
			{"a": "0%", 
			 "b":"50%",
			 "c":"100%",
			 "d":"none of these"
			}
			],
		"answer":"100%",
		"score":0,
		"status": ""
	},
	{
		"id" : 49
		,
		"question" : 'Which of the following is the correct approach to make a table responsive?',
		"options" : [
			{"a": "overflow-x:auto", 
			 "b":"overflow-x:none",
			 "c":"Borders",
			 "d":"All of these"
			}
			],
		"answer":"overflow-x:auto",
		"score":0,
		"status": ""
	},
	{
		"id" : 50
		,
		"question" : 'Which of the following CSS properties specifies the stack order of elements?',
		"options" : [
			{"a": "Z-index", 
			 "b":"Padding",
			 "c":"Borders",
			 "d":"All of these"
			}
			],
		"answer":"Z-index",
		"score":0,
		"status": ""
	}

	]
}

var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;

    // Timer variables
    var timeLimit = 30 * 60; // 30 minutes in seconds
    var timerInterval;

    // Function to start the countdown timer
    this.startTimer = function () {
        timerInterval = setInterval(function () {
            var minutes = Math.floor(timeLimit / 60);
            var seconds = timeLimit % 60;

            // Display the timer
            document.getElementById('countdown').textContent =
                minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

            // If time runs out, submit the quiz
            if (timeLimit <= 0) {
                clearInterval(timerInterval);
                this.submitQuiz();
            } else {
                timeLimit--;
            }
        }.bind(this), 1000); // Update every second
    };

    // Function to submit the quiz
    this.submitQuiz = function () {
        clearInterval(timerInterval); // Stop the timer
        this.showResult(this.calculateScore()); // Show the result
    };

    // Function to calculate the total score
    this.calculateScore = function () {
        var totalScore = 0;
        for (var i = 0; i < totalque; i++) {
            totalScore += quiz.JS[i].score;
        }
        return totalScore;
    };

    // Start the timer when the quiz loads
    this.startTimer();

    // Rest of your existing code...
    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("#next").attr("disabled", false);
            $("#qid").html(quiz.JS[this.currentque].id + '.');

            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options[0]) {
                if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                        quiz.JS[this.currentque].options[0][key] +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            this.submitQuiz();
        }
    };

    this.showResult = function (scr) {
        $("#result").addClass('result');
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (quiz.JS[j].score == 0) {
                res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res + '</div>'
            );
        }
    };

    this.checkAnswer = function (option) {
        var answer = quiz.JS[this.currentque].answer;
        option = option.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

        if (option == quiz.JS[this.currentque].answer) {
            if (quiz.JS[this.currentque].score == "") {
                quiz.JS[this.currentque].score = 1;
                quiz.JS[this.currentque].status = "correct";
            }
        } else {
            quiz.JS[this.currentque].status = "wrong";
        }
    };

    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);
    };
};

var jsq = new quizApp();
var selectedopt;

$(document).ready(function () {
    jsq.displayQuiz(0);

    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
        selectedopt = $(this).val();
    });

    $('#next').click(function (e) {
        e.preventDefault();
        if (selectedopt) {
            jsq.checkAnswer(selectedopt);
        }
        jsq.changeQuestion(1);
    });

    $('#previous').click(function (e) {
        e.preventDefault();
        if (selectedopt) {
            jsq.checkAnswer(selectedopt);
        }
        jsq.changeQuestion(-1);
    });
});


