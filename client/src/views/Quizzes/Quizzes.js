import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import './Quizzes.css';
//import MapChart from "../../components/Map/Map";
import ReactTooltip from "react-tooltip";
//import '../../components/Map/Map.css';

function Quizzes() {
	
	var data = {"response_code":0,"results":[{"category":"Geography","type":"multiple","difficulty":"medium","question":"What is the capital of Peru?","correct_answer":"Lima","incorrect_answers":["Santiago","Montevideo","Buenos Aires"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"How many sovereign states are members of the United Nations?","correct_answer":"195","incorrect_answers":["201","153","178"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What is the largest non-continental island in the world?","correct_answer":"Greenland","incorrect_answers":["New Guinea","Borneo","Madagascar"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which city is the capital of Switzerland?","correct_answer":"Bern","incorrect_answers":["Z&uuml;rich","Frankfurt","Wien"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which of the following countries banned the use of personal genetic ancestry tests?","correct_answer":"Germany","incorrect_answers":["Austria","Canada","Sweden"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"All of the following countries have official claims to territory in Antartica EXCEPT:","correct_answer":"United States","incorrect_answers":["Australia","Chile","Norway"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which of these is NOT an island that is part of the Philippines?","correct_answer":"Java","incorrect_answers":["Luzon","Mindanao","Palawan"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"The World Health Organization headquarters is located in which European country?","correct_answer":"Switzerland","incorrect_answers":["United Kingdom","France","Belgium"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"The historical city Timbuktu is located in which West African country?","correct_answer":"Mali","incorrect_answers":["Senegal","Niger","Burkina Faso"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What is the largest lake in the African continent?","correct_answer":"Lake Victoria","incorrect_answers":["Lake Tanganyika","Lake Malawi","Lake Turkana"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What is the capital of Senegal?","correct_answer":"Dakar","incorrect_answers":["Nouakchott","Conakry","Monrovia"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"How tall is One World Trade Center in New York City?","correct_answer":"1,776 ft","incorrect_answers":["1,888 ft","1,225 ft","1,960 ft"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What is the capital of Seychelles?","correct_answer":"Victoria","incorrect_answers":["Luanda","N&#039;Djamena","Tripoli"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What city  has the busiest airport in the world?","correct_answer":"Atlanta, Georgia USA","incorrect_answers":["London, England","Chicago,Illinois ISA","Tokyo,Japan"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What&#039;s the first National Park designated in the United States?","correct_answer":"Yellowstone","incorrect_answers":["Sequoia ","Yosemite","Rocky Mountain"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Broome is a town in which state of Australia?","correct_answer":"Western Australia","incorrect_answers":["Northern Territory","South Australia","Tasmania"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What is the capital city of Slovenia?","correct_answer":"Ljubljana","incorrect_answers":["Maribor","Velenje","Trbovlje"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which of the following is NOT a capital city?","correct_answer":"Sydney","incorrect_answers":["Cairo","Moscow","Beijing"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What city is the Terracotta Army located in?","correct_answer":"Xi&#039;an","incorrect_answers":["Beijing","Shanghai","Hong Kong"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which of these countries is not a United Nations member state?","correct_answer":"Niue","incorrect_answers":["Tuvalu","South Sudan","Montenegro"]}]}
	//var file = "https://opentdb.com/api.php?amount=20&category=22&difficulty=medium&type=multiple";
	
	const questions = [];
	const answers = [];
	const options = [];
	for(var i = 0; i < 20; i ++)
	{
		questions.push(data.results[i].question);
		answers.push(data.results[i].correct_answer);
		options.push(data.results[i].incorrect_answers);
	}
	

    return (
        <div>
            <header>
				<p>\n\n\n</p>
				<p>HERE: { questions }</p>
				<p>{ options }</p>
			</header>
        </div>
    );
}

export default Quizzes;
