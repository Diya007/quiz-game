// new game
	//question 1 is ready
	//right or wrong button is ready;
	//answered questions numbeber is 0;
	//final score is 0;

// submit the question
	//collect the answer;
	//compare the user's answer with the right answer;
	//update the dom with feedback;
	//answered questions number changed;
	//the user's socre will be counted;
	//new question appear;

// finish questions
	//final score appear;
	//shows new game button


//Prevents the user from skipping questions


$(document).ready(function(){

	var questionsArr=[
	   {question:"How many words can dog learn?",
		choices:["300","500","1000"],
		answer:2,
		},

		{question:"how many weights can puppies grow up in first five months?",
		choices:["1/2 their body weight","1/3 their body weight","3/4 their body weight"],
		answer:0,
		},

		{question:"Normal adult dogs have how many teeth?",
		choices:["24","38","42"],
		answer:2,
		},

		{question:"Through what part of the body do dogs sweat?",
		choices:["mouth","paws","nose"],
		answer:1,
		},

		{question:"What is the most common training command taught to dogs?",
		choices:["stay","sit","beg"],
		answer:1,
		}
		
	]
    
    var cur ;
    var count;
    var score =0;
    var newQuestion
    var newButton;
    var choices;
    var remainQuestion

	function newGame(){
		cur=0;
		//count question num 
		count=1;
		remainQuestion=5-count;
		newQuestion ='<div id="count-question">'+"Q  "+count+" /You have "+remainQuestion+' questions left'+'</div><span class="question">'+questionsArr[cur].question+'</span>'
		$("#question-wrap").append(newQuestion)
		for(var i=0;i<3;i++){
			choices = '<div id="answer-holder"><input type="radio" name="option" value='+i+'><span class="answer">'+questionsArr[cur].choices[i]+'</span>'
			$("#question-wrap").append(choices);
		}
		newButton = '<div id="button-holder"><input type="button" id="submit" value="submit"></div>'
		 $("#question-wrap").append(newButton);
 		score=0;
		 $('#newScore').text(score);

	}

	newGame()

	$(document).on("click",'#submit',function(){
		
		
		//$("#count-question").append('Q '+count++)
		if($("input[type='radio']:checked").val()){

	        count++;
	        remainQuestion--;
			//updateScore();
			updateScore();
			cur++
			nextQuestion();
		}
		else{
			alert("Please select an answer!")
		}
		
	})

	$(document).on("click",'#gameButton',function(){
		$("#question-wrap").html("");
		$('#righ-answer,#wrong-answer').css("color","black");
		newGame()

	})


	/*$("#question-wrap")delegate.("#submit","click",function(){
		count++;
		updateScore();
		cur++;
		nextQuestion();

	})*/

  
//the user's socre will be counted

	function updateScore(){
       
		var checkedAnswer = $("input[type='radio']:checked").val();
            $('#righ-answer,#wrong-answer').css("color","black");
			if(questionsArr[cur].answer == checkedAnswer){
				$('#righ-answer').css("color", "red")
				score++
				$('#newScore').text(score)
			}
			else{
				$('#wrong-answer').css("color", "blue")
			}
	}


	function nextQuestion(){
    	if(cur<5){

	    	newQuestion = '<div id="count-question">'+"Q  "+count+" /You have "+remainQuestion+' questions left'+'</div><span class="question">'+questionsArr[cur].question+'</span>'
	    	$("#question-wrap").html(newQuestion)

	    	for(var j =0; j<3;j++) {
				choices = '<div id="answer-holder"><input type="radio" name="option" value='+j+'><span class="answer">'+questionsArr[cur].choices[j]+'</span>'
				$("#question-wrap").append(choices)
			}
			$("#question-wrap").append(newButton)
		
		}
		//remove everything in question wrap;
		//add sentence : do you want to start a new game?
		//newGame buttton;
		else{
			$("#question-wrap").html("Do you want to start a new game?");
			var newGameButton = '<div id="button-holder"><input type="button" id="gameButton" value="New Game"></div>'
		 	$("#question-wrap").append(newGameButton);


	


		}
	}

})

