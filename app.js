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


$(document).ready(function(){

	var questionsArr=[
	   {question:"How many words can dog learn?",
		choices:["300","500","1000"],
		answer:2,
		},

		{question:"how many weights can puppies grow up in first five months?",
		choices:["1/2 their body weight","1/3 their body weight","3/4 their body weight"],
		answer:0,
		}
		
	]
    
    var cur ;
    var count;
    var score;
    var newQuestion

	function newGame(){
		cur=0;
		//count question num 
		count=0;
		newQuestion ='<div id="count-question">'+"Q  "+count+'</div><span class="question">'+questionsArr[cur].question+'</span>'
		$("#question-wrap").append(newQuestion)
		for(var i=0;i<3;i++){
			var choices = '<div id="answer-holder"><input type="radio" name="option" value='+i+'><span class="answer">'+questionsArr[cur].choices[i]+'</span>'
			$("#question-wrap").append(choices);
		}
		var newButton = '<div id="button-holder"><input type="button" id="submit" value="submit"></div>'
		 $("#question-wrap").append(newButton);
	}

	newGame()

	$('#submit').on("click",function(){
		cur++
		//点完submit之后第一下还是0，点第二下才是1；
		$("#count-question").html('Q '+count++)
		//把选择的answer收集起来

		updateScore();
		nextQuestion();
		
	})

  
//the user's socre will be counted

function updateScore(){
	var checkedAnswer = $("input[type='radio']:checked").val();
      
		if(questionsArr[cur].answer == checkedAnswer){
			$('#righ-answer').css("color", "red")
			$('#score').html(score++)
		}
		else{
			$('#wrong-answer').css("color", "blue")
		}
}


function nextQuestion(){
	if(cur<5){
		newQuestion ='<div id="count-question">'+"Q  "+count+'</div><span class="question">'+questionsArr[cur].question+'</span>'
		$("#question-wrap").append(newQuestion)
		for(var i=0;i<3;i++){
			var choices = '<div id="answer-holder"><input type="radio" name="option" value='+i+'><span class="answer">'+questionsArr[cur].choices[i]+'</span>'
			$("#question-wrap").html(choices);
		}
	}
        
        
}

})

