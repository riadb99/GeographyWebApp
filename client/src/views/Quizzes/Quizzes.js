import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import './Quizzes.css';
//import MapChart from "../../components/Map/Map";
import ReactTooltip from "react-tooltip";
//import '../../components/Map/Map.css';
//import {questions} from './data.js';
import image1 from "./generalquizimage.jpg"
import image2 from "./colorsybolquizimage.png"
import image3 from "./flagquizimage.png"
import image4 from "./greetingquizimage.png"

function Quizzes() {
	const questions1 = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
	
	const questions2 = [
	{
		questionText: "How many sovereign states are members of the United Nations?",
		answerOptions: [
			{ answerText: "195", isCorrect: true },
			{ answerText: "201", isCorrect: false },
			{ answerText: "153", isCorrect: false },
			{ answerText: "178", isCorrect: false },
		],
	},
	{
		questionText: "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
		answerOptions: [
			{ answerText: "Yugoslavia", isCorrect: true },
			{ answerText: "South Ossetia", isCorrect: false },
			{ answerText: "Abkhazia", isCorrect: false },
			{ answerText: "Czechoslovakia", isCorrect: false },
		],
	},
	{
		questionText: "How many counties in the Republic of Ireland.",
		answerOptions: [
			{ answerText: "32", isCorrect: false },
			{ answerText: "28", isCorrect: false },
			{ answerText: "26", isCorrect: true },
			{ answerText: "30", isCorrect: false },
		],
	},
	{
		questionText: "What is the name of the capital of Turkey?",
		answerOptions: [
			{ answerText: "Istanbul", isCorrect: false },
			{ answerText: "Ankara", isCorrect: true },
			{ answerText: "Izmir", isCorrect: false },
			{ answerText: "Bursa", isCorrect: false },
		],
	},
	{
		questionText: "On which continent is the country of Angola located?",
		answerOptions: [
			{ answerText: "Africa", isCorrect: true },
			{ answerText: "South America", isCorrect: false },
			{ answerText: "Europe", isCorrect: false },
			{ answerText: "Asia", isCorrect: false },
		],
	},
	{
		questionText: "Gibraltar, located just south of the Iberian peninsula, is a territory of which West Europe country?",
		answerOptions: [
			{ answerText: "Portugal", isCorrect: false },
			{ answerText: "Spain", isCorrect: false },
			{ answerText: "France", isCorrect: false },
			{ answerText: "United Kingdom", isCorrect: true },
		],
	},
	{
		questionText: "Which Canadian province has Charlottetown as its capital?",
		answerOptions: [
			{ answerText: "Ontario", isCorrect: false },
			{ answerText: "Northwest Terrirories", isCorrect: false },
			{ answerText: "Saskachewan", isCorrect: false },
			{ answerText: "Prince Edward Island", isCorrect: true },
		],
	},
	{
		questionText: "What is the capital of Seychelles?",
		answerOptions: [
			{ answerText: "Tripoli", isCorrect: false },
			{ answerText: "Luanda", isCorrect: false },
			{ answerText: "Victoria", isCorrect: true },
			{ answerText: "N&#039;Djamena", isCorrect: false },
		],
	},
	{
		questionText: "What is the capital city of New Zealand?",
		answerOptions: [
			{ answerText: "Christchurch", isCorrect: false },
			{ answerText: "Auckland", isCorrect: false },
			{ answerText: "Melbourne", isCorrect: false },
			{ answerText: "Wellington", isCorrect: true },
		],
	},
	{
		questionText: "Which of the following is the longest river in Europe?",
		answerOptions: [
			{ answerText: "Volga", isCorrect: true },
			{ answerText: "Ural", isCorrect: false },
			{ answerText: "Dnieper", isCorrect: false },
			{ answerText: "Danube", isCorrect: false },
		],
	},
	{
		questionText: "How many rivers are in Saudi Arabia?",
		answerOptions: [
			{ answerText: "3", isCorrect: false },
			{ answerText: "1", isCorrect: false },
			{ answerText: "2", isCorrect: false },
			{ answerText: "0", isCorrect: true },
		],
	},
	{
		questionText: "Which English county will you find the University of East Anglia?",
		answerOptions: [
			{ answerText: "Suffolk", isCorrect: false },
			{ answerText: "Cambridgeshire", isCorrect: false },
			{ answerText: "Essex", isCorrect: false },
			{ answerText: "Norfolk", isCorrect: true },
		],
	},
	{
		questionText: "What is the name of the only remaining Grand Duchy in the world ?",
		answerOptions: [
			{ answerText: "Andorra", isCorrect: false },
			{ answerText: "Montenegro", isCorrect: false },
			{ answerText: "Liechtenstein", isCorrect: false },
			{ answerText: "Luxembourg", isCorrect: true },
		],
	},
	{
		questionText: "Frankenmuth, a US city nicknamed &quot;Little Bavaria&quot;, is located in what state?",
		answerOptions: [
			{ answerText: "Virginia", isCorrect: false },
			{ answerText: "Pennsylvania", isCorrect: false },
			{ answerText: "Kentucky", isCorrect: false },
			{ answerText: "Michigan", isCorrect: true },
		],
	},
	{
		questionText: "What is the capital of Greenland?",
		answerOptions: [
			{ answerText: "Sisimiut", isCorrect: false },
			{ answerText: "Nuuk", isCorrect: true },
			{ answerText: "Maniitsoq", isCorrect: false },
			{ answerText: "Narsaq", isCorrect: false },
		],
	},
	{
		questionText: "How many provinces are in the Netherlands?",
		answerOptions: [
			{ answerText: "10", isCorrect: false },
			{ answerText: "13", isCorrect: false },
			{ answerText: "14", isCorrect: false },
			{ answerText: "12", isCorrect: true },
		],
	},
	{
		questionText: "Lake Titicaca is located between which two nations?",
		answerOptions: [
			{ answerText: "India and Bangladesh", isCorrect: false },
			{ answerText: "Kenya and Uganda", isCorrect: false },
			{ answerText: "Peru and Bolivia", isCorrect: true },
			{ answerText: "Mexico and the United States", isCorrect: false },
		],
	},
	{
		questionText: "Which of these Japanese islands is the largest by area?",
		answerOptions: [
			{ answerText: "Iki", isCorrect: false },
			{ answerText: "Shikoku", isCorrect: true },
			{ answerText: "Odaiba", isCorrect: false },
			{ answerText: "Okinawa", isCorrect: false },
		],
	},
	{
		questionText: "What city is the Terracotta Army located in?",
		answerOptions: [
			{ answerText: "Hong Kong", isCorrect: false },
			{ answerText: "Shanghai", isCorrect: false },
			{ answerText: "Beijing", isCorrect: false },
			{ answerText: "Xi&#039;an", isCorrect: true },
		],
	},
	{
		questionText: "Which of the following is not a megadiverse country - one that harbors a high number of the earth's endemic species?",
		answerOptions: [
			{ answerText: "Mexico", isCorrect: false },
			{ answerText: "Thailand", isCorrect: true },
			{ answerText: "South Africa", isCorrect: false },
			{ answerText: "Peru", isCorrect: false },
		],
	},
	];
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showQuestions, setShowQuestions] = useState(false);
	const [showMenu, setShowMenu] = useState(true);
	const [score, setScore] = useState(0);
	const [questionSet, setQuestionSet] = useState(questions2);
	const [wrongAnswerSet, setWrongAnswerSet] = useState([]);
	var questions = questionSet;
	const numQuestionsAsked = 2;
	var wrongAnswers = wrongAnswerSet;
	
	
	const handleAnswerOptionClick = (isCorrect, question, answer) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		else
		{
			var temp = wrongAnswerSet;
			temp.push({ Q: question, A: answer  });
			setWrongAnswerSet(temp);
		}

		const nextQuestion = currentQuestion + 1;
		//nextQuestion < questions.length if want to ask all questions 
		//hardcoding the num of questions asked instead
		if (nextQuestion < numQuestionsAsked) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setShowQuestions(false);
		}
	};
	
	const pickQuizClick = (name) => {
		if(name == "generalM")
		{
			setQuestionSet(questions1);
		}
		else if(name == "generalH")
		{
			setQuestionSet(questions2);
		}
		else if(name == "colors")
		{
			setQuestionSet(questions2);
		}
		else if(name == "flags")
		{
			setQuestionSet(questions2);
		}
		else if(name == "hello")
		{
			setQuestionSet(questions2);
		}
		setCurrentQuestion(0);
		setScore(0);
		setWrongAnswerSet([]);
		setShowQuestions(true);
		setShowMenu(false);
	};
	
	const returnMenuClick = () => {
		setShowScore(false);
		setShowMenu(true);
	};
	
	const findAnswer = (index) => {
		var options = questions[index].answerOptions;
		for(var i = 0; i < options.length; i ++)
		{
			if(questions[index].answerOptions[i].isCorrect == true)
			{
				return questions[index].answerOptions[i].answerText;
			}
		}
	};

	
	return (
		<div>
		<center>
			
			{showMenu &&
				<div>
				
					<div class="card" onClick={() => pickQuizClick("generalM")}>
						<img src={image1} alt="Quiz Image"/>
						<div class="container">
							<h4><b>General Knowledge [Medium Difficulty]</b></h4> 
							<p>Test yourself on random facts about countries</p> 
						</div>
					</div>
					
					<div class="card" onClick={() => pickQuizClick("generalH")}>
						<img src={image1} alt="Quiz Image"/>
						<div class="container">
							<h4><b>General Knowledge [Hard Difficulty]</b></h4> 
							<p>Test yourself on random facts about countries</p> 
						</div>
					</div>
					
					<div class="card" onClick={() => pickQuizClick("colors")}>
						<img src={image2} alt="Quiz Image"/>
						<div class="container">
							<h4><b>Color and Culture</b></h4> 
							<p>Test yourself on colors association in different cultures</p> 
						</div>
					</div>
					
					<div class="card" onClick={() => pickQuizClick("flags")}>
						<img src={image3} alt="Quiz Image"/>
						<div class="container">
							<h4><b>Flags of the World</b></h4> 
							<p>Test yourself on identifying the country flags from around the world</p> 
						</div>
					</div>
					
					<div class="card" onClick={() => pickQuizClick("hello")}>
						<img src={image4} alt="Quiz Image"/>
						<div class="container">
							<h4><b>Greetings in Other Langauges</b></h4> 
							<p>Test yourself on the common greetings of coutries around the world</p> 
						</div>
					</div>
					
				</div>
			}
			
			{showQuestions &&
				<>
					<div>
						<div>
							<span>Question {currentQuestion + 1}</span>/{numQuestionsAsked}
						</div>
						<div>{questions[currentQuestion].questionText}</div>
					</div>
					<div>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<div>
								<button class="quizButton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, questions[currentQuestion].questionText, findAnswer(currentQuestion))}>
									{answerOption.answerText}
								</button>
							</div>
						))}
					</div>
				</>
			}
			
			{showScore &&
				<div>
					<p>You scored {score} out of {numQuestionsAsked}</p>
					<button class="quizButton" onClick={() => returnMenuClick()}> Return to Quiz Menu </button>
					{wrongAnswerSet.length > 0 && 
						<div>
							<p>Review the Incorrect Questions: </p><h1></h1>
							{wrongAnswerSet.map(wrongAnswerSet => (
								<div>
									<p>❈</p>
									<p>Question: {wrongAnswerSet.Q}</p>
									<p>Correct Answer: {wrongAnswerSet.A}</p>
									
								</div>
							))}
						</div>
					}
				</div>
			}
		</center>
		</div>
	);
	

}

export default Quizzes;
