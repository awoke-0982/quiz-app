const questions =[
{
	question: "which is larget animal in the world?",
	   answers:[
{text:"Shark" , correct:false},
{text:"Blue Whale" , correct:true},
{text:"Elephant" , correct:false},
{text:"Giraffe" , correct:false},

	   ]
},
{
question: "which is the largest computer?",
	   answers:[
{text:"laptop" , correct:false},
{text:"Super computer" , correct:true},
{text:"Andriod Phone" , correct:false},
{text:"Iphone" , correct:false},
]
},



{
question: "which is larget country in land in the Africa?",
	   answers:[
{text:"Ethiopia" , correct:false},
{text:"Kenya" , correct:false},
{text:"South Africa" , correct:false},
{text:"Sudan" , correct:true},
]
},



{
question: "What is the capital city of Ethiopia?",
	   answers:[
{text:"Hawassa " , correct:false},
{text:"Mekelle" , correct:false},
{text:"Addis Abeba" , correct:true},
{text:"Bahir Darh" , correct:false},
]
},



{
question: "which is the smallest continent in the world?",
	   answers:[
{text:"Asia" , correct:false},
{text:"Austrialia " , correct:true},
{text:"Arctic" , correct:false},
{text:"Africa" , correct:false},
]
},


{
question: "which is the smallest  country in the world?",
	   answers:[
{text:"Vatican City" , correct:true},
{text:"Dubai" , correct:false},
{text:"Tokyo" , correct:false},
{text:"Ethiopia" , correct:false},
]
},



{
question: "which is the larget desert in the world?",
	   answers:[
{text:"Kalahari" , correct:false},
{text:"Gobi" , correct:false},
{text:"Sahara" , correct:false},
{text:"Antarctica" , correct:true},
]
}

];
const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
 
 function startQuiz() {
 	currentQuestionIndex=0;
 	score=0;
 	nextButton.innerHTML = "Next";
 	showQuestion();

 	// body...
 }

 function showQuestion() { 

 resetState();
 	let currentQuestion = questions[currentQuestionIndex];
 	let questionNo = currentQuestionIndex + 1;
 	questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

 	currentQuestion.answers.forEach(answer => {
 		const button =  document.createElement("button");
 		button.innerHTML = answer.text;
 		button.classList.add("btn");
 		answerButtons.appendChild(button);
 		if(answer.correct){
 			button.dataset.correct = answer.correct;
 		}
 		button.addEventListener("click",selectAnswer);
 	})
 	// body...
 }
function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);

	}
}
function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct ==="true";
	if (isCorrect) {
		selectedBtn.classList.add("correct"); 
		score++;
	} else { 
		selectedBtn.classList.add("incorrect");

	}
Array.from(answerButtons.children).forEach(button => {
	if (button.dataset.correct === "true") {
		button.classList.add("correct");
	}
	button.disabled = true;
});
nextButton.style.display = "block";
	// body...
}  

function showScore()  { 
	resetState();
	questionElement.innerHTML = 'You Scored ${score} out of ${questions.length}!'; 
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}



function handleNextButton() { 
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length) {           
		showQuestion();
	} else {
             showScore();
	}
	// body...
} 

nextButton.addEventListener("click" ,() => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});
 startQuiz();

 










