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
import axios from "axios";
import {useAuth} from "../../contexts/AuthContext";

function Quizzes() {
	//q1 = 49 questions, q3 = 111 questions, q2 = 50 questions, q4 = 49, q5 = 32
	const questions1 = [
		{
    questionText: "What is the capital of the American state of Arizona?",
    answerOptions: [
        { answerText: "Montgomery", isCorrect: false },
        { answerText: "Raleigh", isCorrect: false },
        { answerText: "Phoenix", isCorrect: true },
        { answerText: "Tallahassee", isCorrect: false },
    ],
},
{
    questionText: "The body of the Egyptian Sphinx was based on which animal?",
    answerOptions: [
        { answerText: "Bull", isCorrect: false },
        { answerText: "Lion", isCorrect: true },
        { answerText: "Horse", isCorrect: false },
        { answerText: "Dog", isCorrect: false },
    ],
},
{
    questionText: "What state is the largest state of the United States of America?",
    answerOptions: [
        { answerText: "California", isCorrect: false },
        { answerText: "Alaska", isCorrect: true },
        { answerText: "Texas", isCorrect: false },
        { answerText: "Washington", isCorrect: false },
    ],
},
{
    questionText: "What country is the second largest in the world by area?",
    answerOptions: [
        { answerText: "United States of America", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "Canada", isCorrect: true },
        { answerText: "Russia", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Indonesia?",
    answerOptions: [
        { answerText: "Palembang", isCorrect: false },
        { answerText: "Medan", isCorrect: false },
        { answerText: "Jakarta", isCorrect: true },
        { answerText: "Bandung", isCorrect: false },
    ],
},
{
    questionText: "Which country does Austria not border?",
    answerOptions: [
        { answerText: "Switzerland", isCorrect: false },
        { answerText: "Slovakia", isCorrect: false },
        { answerText: "France", isCorrect: true },
        { answerText: "Slovenia", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Jamaica?",
    answerOptions: [
        { answerText: "San Juan", isCorrect: false },
        { answerText: "Kingston", isCorrect: true },
        { answerText: "Port-au-Prince", isCorrect: false },
        { answerText: "Bridgetown", isCorrect: false },
    ],
},
{
    questionText: "What colour is the circle on the Japanese flag?",
    answerOptions: [
        { answerText: "White", isCorrect: false },
        { answerText: "Black", isCorrect: false },
        { answerText: "Red", isCorrect: true },
        { answerText: "Yellow", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Denmark?",
    answerOptions: [
        { answerText: "Odense", isCorrect: false },
        { answerText: "Aarhus", isCorrect: false },
        { answerText: "Aalborg", isCorrect: false },
        { answerText: "Copenhagen", isCorrect: true },
    ],
},
{
    questionText: "All of the following are classified as Finno-Ugric languages EXCEPT:",
    answerOptions: [
        { answerText: "Hungarian", isCorrect: false },
        { answerText: "Estonian", isCorrect: false },
        { answerText: "Samoyedic", isCorrect: true },
        { answerText: "Finnish", isCorrect: false },
    ],
},
{
    questionText: "Which of the following European languages is classified as a language isolate?",
    answerOptions: [
        { answerText: "Basque", isCorrect: true },
        { answerText: "Maltese", isCorrect: false },
        { answerText: "Galician", isCorrect: false },
        { answerText: "Hungarian", isCorrect: false },
    ],
},
{
    questionText: "The derisive acronym PIIGS refers to which of the following European countries and their economic statuses?",
    answerOptions: [
        { answerText: "Portugal, Iceland, Ireland, Greece, Serbia", isCorrect: false },
        { answerText: "Portugal, Ireland, Italy, Greece, Spain", isCorrect: true },
        { answerText: "Poland, Iceland, Italy, Greenland, Spain", isCorrect: false },
        { answerText: "Poland, Iceland, Italy, Greece, Serbia", isCorrect: false },
    ],
},
{
    questionText: "What is the only state in the United States that does not have a flag in a shape with 4 edges?",
    answerOptions: [
        { answerText: "Idaho", isCorrect: false },
        { answerText: "Florida", isCorrect: false },
        { answerText: "Ohio", isCorrect: true },
        { answerText: "New Mexico", isCorrect: false },
    ],
},
{
    questionText: "Which of the following former Yugoslavian states is landlocked?",
    answerOptions: [
        { answerText: "Serbia", isCorrect: true },
        { answerText: "Croatia", isCorrect: false },
        { answerText: "Montenegro", isCorrect: false },
        { answerText: "Bosnia and Herzegovina", isCorrect: false },
    ],
},
{
    questionText: "What is the 15th letter of the Greek alphabet?",
    answerOptions: [
        { answerText: "Nu", isCorrect: false },
        { answerText: "Omicron", isCorrect: true },
        { answerText: "Sigma", isCorrect: false },
        { answerText: "Pi", isCorrect: false },
    ],
},
{
    questionText: "Which of the following languages does NOT use the Latin alphabet?",
    answerOptions: [
        { answerText: "Vietnamese", isCorrect: false },
        { answerText: "Swahili", isCorrect: false },
        { answerText: "Georgian", isCorrect: true },
        { answerText: "Turkish", isCorrect: false },
    ],
},
{
    questionText: "Which nation claims ownership of Antarctica?",
    answerOptions: [
        { answerText: "Australia", isCorrect: false },
        { answerText: "United Nations", isCorrect: false },
        { answerText: "United States of America", isCorrect: false },
        { answerText: "No one, but there are claims.", isCorrect: true },
    ],
},
{
    questionText: "What name was historically used for the Turkish city currently known as Istanbul?",
    answerOptions: [
        { answerText: "Bermuda", isCorrect: false },
        { answerText: "Rome", isCorrect: false },
        { answerText: "Constantinople", isCorrect: true },
        { answerText: "Adrianople", isCorrect: false },
    ],
},
{
    questionText: "Which US state has the highest population?",
    answerOptions: [
        { answerText: "Florida", isCorrect: false },
        { answerText: "Texas", isCorrect: false },
        { answerText: "New York", isCorrect: false },
        { answerText: "California", isCorrect: true },
    ],
},
{
    questionText: "How many time zones does China have?",
    answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "1", isCorrect: true },
        { answerText: "4", isCorrect: false },
    ],
},
{
    questionText: "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
    answerOptions: [
        { answerText: "United Arab Emirates", isCorrect: false },
        { answerText: "Qatar", isCorrect: true },
        { answerText: "Jordan", isCorrect: false },
        { answerText: "Kuwait", isCorrect: false },
    ],
},
{
    questionText: "What country has a horizontal bicolor red and white flag?",
    answerOptions: [
        { answerText: "Bahrain", isCorrect: false },
        { answerText: "Monaco", isCorrect: true },
        { answerText: "Malta", isCorrect: false },
        { answerText: "Liechenstein", isCorrect: false },
    ],
},
{
    questionText: "Which of these is the name of the largest city in the US state Tennessee?",
    answerOptions: [
        { answerText: "Memphis", isCorrect: true },
        { answerText: "Alexandria", isCorrect: false },
        { answerText: "Thebes", isCorrect: false },
        { answerText: "Luxor", isCorrect: false },
    ],
},
{
    questionText: "Which UK country features a dragon on their flag?",
    answerOptions: [
        { answerText: "England", isCorrect: false },
        { answerText: "North Ireland", isCorrect: false },
        { answerText: "Wales", isCorrect: true },
        { answerText: "Scotland", isCorrect: false },
    ],
},
{
    questionText: "What is the Capital of the United States?",
    answerOptions: [
        { answerText: "Washington, D.C.", isCorrect: true },
        { answerText: "Houston, TX", isCorrect: false },
        { answerText: "Los Angelas, CA", isCorrect: false },
        { answerText: "New York City, NY", isCorrect: false },
    ],
},
{
    questionText: "Which of these African countries list Spanish as an official language?",
    answerOptions: [
        { answerText: "Cameroon", isCorrect: false },
        { answerText: "Angola", isCorrect: false },
        { answerText: "Equatorial Guinea", isCorrect: true },
        { answerText: "Guinea", isCorrect: false },
    ],
},
{
    questionText: "What is the nickname for the US state Delaware?",
    answerOptions: [
        { answerText: "The Sixteenth State", isCorrect: false },
        { answerText: "The First State", isCorrect: true },
        { answerText: "The Second State", isCorrect: false },
        { answerText: "The Fiftieth State", isCorrect: false },
    ],
},
{
    questionText: "What is the name of the peninsula containing Spain and Portugal?",
    answerOptions: [
        { answerText: "Scandinavian Peninsula", isCorrect: false },
        { answerText: "Iberian Peninsula", isCorrect: true },
        { answerText: "Peloponnesian Peninsula", isCorrect: false },
        { answerText: "European Peninsula", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of the US State of New York?",
    answerOptions: [
        { answerText: "Buffalo", isCorrect: false },
        { answerText: "Albany", isCorrect: true },
        { answerText: "Rochester", isCorrect: false },
        { answerText: "New York", isCorrect: false },
    ],
},
{
    questionText: "The Space Needle is located in which city?",
    answerOptions: [
        { answerText: "Los Angles", isCorrect: false },
        { answerText: "Toronto", isCorrect: false },
        { answerText: "Vancouver", isCorrect: false },
        { answerText: "Seattle", isCorrect: true },
    ],
},
{
    questionText: "Which country is the home of the largest Japanese population outside of Japan?",
    answerOptions: [
        { answerText: "The United States", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "Russia", isCorrect: false },
        { answerText: "Brazil", isCorrect: true },
    ],
},
{
    questionText: "What is Canada's smallest province?",
    answerOptions: [
        { answerText: "Prince Edward Island", isCorrect: true },
        { answerText: "New Brunswick", isCorrect: false },
        { answerText: "Yukon", isCorrect: false },
        { answerText: "Nova Scotia", isCorrect: false },
    ],
},
{
    questionText: "How many stars are featured on New Zealand's flag?",
    answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "0", isCorrect: false },
        { answerText: "2", isCorrect: false },
    ],
},
{
    questionText: "How many countries does Mexico border?",
    answerOptions: [
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
    ],
},
{
    questionText: "Which of the following Japanese islands is the biggest?",
    answerOptions: [
        { answerText: "Hokkaido", isCorrect: false },
        { answerText: "Kyushu", isCorrect: false },
        { answerText: "Shikoku", isCorrect: false },
        { answerText: "Honshu", isCorrect: true },
    ],
},
{
    questionText: "What is the name of New Zealand's indigenous people?",
    answerOptions: [
        { answerText: "Maori", isCorrect: true },
        { answerText: "Polynesians", isCorrect: false },
        { answerText: "Vikings", isCorrect: false },
        { answerText: "Samoans", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of India?",
    answerOptions: [
        { answerText: "New Delhi", isCorrect: true },
        { answerText: "Tithi", isCorrect: false },
        { answerText: "Montreal", isCorrect: false },
        { answerText: "Bejing", isCorrect: false },
    ],
},
{
    questionText: "What is the smallest country in the world?",
    answerOptions: [
        { answerText: "Vatican City", isCorrect: true },
        { answerText: "Malta", isCorrect: false },
        { answerText: "Maldives", isCorrect: false },
        { answerText: "Monaco", isCorrect: false },
    ],
},
{
    questionText: "What is the largest country in the world?",
    answerOptions: [
        { answerText: "Russia", isCorrect: true },
        { answerText: "Canada", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "United States", isCorrect: false },
    ],
},
{
    questionText: "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
    answerOptions: [
        { answerText: "Kiribati", isCorrect: false },
        { answerText: "Bhutan", isCorrect: false },
        { answerText: "Scotland", isCorrect: false },
        { answerText: "Sri Lanka", isCorrect: true },
    ],
},
{
    questionText: "Which ocean borders the west coast of the United States?",
    answerOptions: [
        { answerText: "Arctic", isCorrect: false },
        { answerText: "Indian", isCorrect: false },
        { answerText: "Pacific", isCorrect: true },
        { answerText: "Atlantic", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of South Korea?",
    answerOptions: [
        { answerText: "Kitakyushu", isCorrect: false },
        { answerText: "Seoul", isCorrect: true },
        { answerText: "Taegu", isCorrect: false },
        { answerText: "Pyongyang", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Scotland?",
    answerOptions: [
        { answerText: "Dundee", isCorrect: false },
        { answerText: "Glasgow", isCorrect: false },
        { answerText: "Edinburgh", isCorrect: true },
        { answerText: "London", isCorrect: false },
    ],
},
{
    questionText: "Which small country is located between the borders of France and Spain?",
    answerOptions: [
        { answerText: "San Marino", isCorrect: false },
        { answerText: "Lichtenstein", isCorrect: false },
        { answerText: "Vatican City", isCorrect: false },
        { answerText: "Andorra", isCorrect: true },
    ],
},
{
    questionText: "The Alps are a mountain range on which continent?",
    answerOptions: [
        { answerText: "Asia", isCorrect: false },
        { answerText: "Europe", isCorrect: true },
        { answerText: "North America", isCorrect: false },
        { answerText: "Africa", isCorrect: false },
    ],
},
{
    questionText: "Where would you find the Spanish Steps?",
    answerOptions: [
        { answerText: "Rome, Italy", isCorrect: true },
        { answerText: "Berlin, Germany", isCorrect: false },
        { answerText: "London, England", isCorrect: false },
        { answerText: "Barcelona, Spain", isCorrect: false },
    ],
},
{
    questionText: "The longest shared border in the world can be found between which two nations?",
    answerOptions: [
        { answerText: "Chile and Argentina", isCorrect: false },
        { answerText: "Canada and the United States", isCorrect: true },
        { answerText: "India and Pakistan", isCorrect: false },
        { answerText: "Russia and China", isCorrect: false },
    ],
},
{
    questionText: "What is Laos?",
    answerOptions: [
        { answerText: "Country", isCorrect: true },
        { answerText: "Region", isCorrect: false },
        { answerText: "River", isCorrect: false },
        { answerText: "City", isCorrect: false },
    ],
},
{
    questionText: "Greenland is a part of which kingdom?",
    answerOptions: [
        { answerText: "Sweden", isCorrect: false },
        { answerText: "Denmark", isCorrect: true },
        { answerText: "United Kingdom", isCorrect: false },
        { answerText: "Norway", isCorrect: false },
    ],
},
	];
	
	const questions2 = [
	{
    questionText: "What European country is not a part of the EU?",
    answerOptions: [
        { answerText: "Czechia", isCorrect: false },
        { answerText: "Norway", isCorrect: true },
        { answerText: "Ireland", isCorrect: false },
        { answerText: "Lithuania", isCorrect: false },
    ],
},
{
    questionText: "Montreal is in which Canadian province?",
    answerOptions: [
        { answerText: "Ontario", isCorrect: false },
        { answerText: "Alberta", isCorrect: false },
        { answerText: "Nova Scotia", isCorrect: false },
        { answerText: "Quebec", isCorrect: true },
    ],
},
{
    questionText: "What is the capital of Peru?",
    answerOptions: [
        { answerText: "Santiago", isCorrect: false },
        { answerText: "Montevideo", isCorrect: false },
        { answerText: "Buenos Aires", isCorrect: false },
        { answerText: "Lima", isCorrect: true },
    ],
},
{
    questionText: "What is the only country in the world with a flag that doesn't have four right angles?",
    answerOptions: [
        { answerText: "Egypt", isCorrect: false },
        { answerText: "Nepal", isCorrect: true },
        { answerText: "Angola", isCorrect: false },
        { answerText: "Panama", isCorrect: false },
    ],
},
{
    questionText: "The Principality of Sealand is an unrecognized micronation off the coast of what country?",
    answerOptions: [
        { answerText: "Argentina", isCorrect: false },
        { answerText: "The United Kingdom", isCorrect: true },
        { answerText: "Japan", isCorrect: false },
        { answerText: "Austrailia", isCorrect: false },
    ],
},
{
    questionText: "How many sovereign states are members of the United Nations?",
    answerOptions: [
        { answerText: "153", isCorrect: false },
        { answerText: "201", isCorrect: false },
        { answerText: "195", isCorrect: true },
        { answerText: "178", isCorrect: false },
    ],
},
{
    questionText: "How many countries are inside the United Kingdom?",
    answerOptions: [
        { answerText: "Three", isCorrect: false },
        { answerText: "Two", isCorrect: false },
        { answerText: "Four", isCorrect: true },
        { answerText: "One", isCorrect: false },
    ],
},
{
    questionText: "What is the name of the capital of Turkey?",
    answerOptions: [
        { answerText: "Izmir", isCorrect: false },
        { answerText: "Istanbul", isCorrect: false },
        { answerText: "Bursa", isCorrect: false },
        { answerText: "Ankara", isCorrect: true },
    ],
},
{
    questionText: "What is the capital of Australia?",
    answerOptions: [
        { answerText: "Canberra", isCorrect: true },
        { answerText: "Sydney", isCorrect: false },
        { answerText: "Brisbane", isCorrect: false },
        { answerText: "Melbourne", isCorrect: false },
    ],
},
{
    questionText: "The land of Gotland is located in which European country?",
    answerOptions: [
        { answerText: "Sweden", isCorrect: true },
        { answerText: "Germany", isCorrect: false },
        { answerText: "Denmark", isCorrect: false },
        { answerText: "Norway", isCorrect: false },
    ],
},
{
    questionText: "Which of the following countries banned the use of personal genetic ancestry tests?",
    answerOptions: [
        { answerText: "Sweden", isCorrect: false },
        { answerText: "Austria", isCorrect: false },
        { answerText: "Canada", isCorrect: false },
        { answerText: "Germany", isCorrect: true },
    ],
},
{
    questionText: "On which continent is the country of Angola located?",
    answerOptions: [
        { answerText: "Europe", isCorrect: false },
        { answerText: "South America", isCorrect: false },
        { answerText: "Asia", isCorrect: false },
        { answerText: "Africa", isCorrect: true },
    ],
},
{
    questionText: "Where is the area commonly known as the Bermuda Triangle?",
    answerOptions: [
        { answerText: "North Pacific Ocean, between Japan and the USA", isCorrect: false },
        { answerText: "In the Caribbean Sea", isCorrect: false },
        { answerText: "North Atlantic Ocean, between Florida and Puerto Rico", isCorrect: true },
        { answerText: "South Pacific Ocean, far off Chile", isCorrect: false },
    ],
},
{
    questionText: "Which of these countries is located the FURTHEST away from the South China Sea?",
    answerOptions: [
        { answerText: "Bangladesh", isCorrect: true },
        { answerText: "Malaysia", isCorrect: false },
        { answerText: "Philippines", isCorrect: false },
        { answerText: "Vietnam", isCorrect: false },
    ],
},
{
    questionText: "Which of these countries is NOT located in Africa?",
    answerOptions: [
        { answerText: "Algeria", isCorrect: false },
        { answerText: "Burkina Faso", isCorrect: false },
        { answerText: "Suriname", isCorrect: true },
        { answerText: "Mozambique", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of the US state Nevada?",
    answerOptions: [
        { answerText: "Las Vegas", isCorrect: false },
        { answerText: "Carson City", isCorrect: true },
        { answerText: "Reno", isCorrect: false },
        { answerText: "Henderson", isCorrect: false },
    ],
},
{
    questionText: "How many countries are larger than Australia?",
    answerOptions: [
        { answerText: "6", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "3", isCorrect: false },
    ],
},
{
    questionText: "The historical city Timbuktu is located in which West African country?",
    answerOptions: [
        { answerText: "Burkina Faso", isCorrect: false },
        { answerText: "Mali", isCorrect: true },
        { answerText: "Senegal", isCorrect: false },
        { answerText: "Niger", isCorrect: false },
    ],
},
{
    questionText: "Which German city is located on the River Isar?",
    answerOptions: [
        { answerText: "Dortmund", isCorrect: false },
        { answerText: "Munich", isCorrect: true },
        { answerText: "Hamburg", isCorrect: false },
        { answerText: "Berlin", isCorrect: false },
    ],
},
{
    questionText: "What is the largest lake in the African continent?",
    answerOptions: [
        { answerText: "Lake Turkana", isCorrect: false },
        { answerText: "Lake Victoria", isCorrect: true },
        { answerText: "Lake Tanganyika", isCorrect: false },
        { answerText: "Lake Malawi", isCorrect: false },
    ],
},
{
    questionText: "How many countries does Spain have a land border with?",
    answerOptions: [
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "4", isCorrect: false },
    ],
},
{
    questionText: "What is the right way to spell the capital of Hungary?",
    answerOptions: [
        { answerText: "Budapast", isCorrect: false },
        { answerText: "Bhudapest", isCorrect: false },
        { answerText: "Boodapest", isCorrect: false },
        { answerText: "Budapest", isCorrect: true },
    ],
},
{
    questionText: "Where is the world's oldest still operational space launch facility located?",
    answerOptions: [
        { answerText: "Russia", isCorrect: false },
        { answerText: "Kazakhstan", isCorrect: true },
        { answerText: "Iran", isCorrect: false },
        { answerText: "United States", isCorrect: false },
    ],
},
{
    questionText: "What is the official language of Bhutan?",
    answerOptions: [
        { answerText: "Groma", isCorrect: false },
        { answerText: "Karen", isCorrect: false },
        { answerText: "Ladakhi", isCorrect: false },
        { answerText: "Dzongkha", isCorrect: true },
    ],
},
{
    questionText: "Which country has three capital cities?",
    answerOptions: [
        { answerText: "South Africa", isCorrect: true },
        { answerText: "China", isCorrect: false },
        { answerText: "Somalia", isCorrect: false },
        { answerText: "United Kingdom", isCorrect: false },
    ],
},
{
    questionText: "The towns of Brugelette, Arlon and Ath are located in which country?",
    answerOptions: [
        { answerText: "Belgium", isCorrect: true },
        { answerText: "France", isCorrect: false },
        { answerText: "Luxembourg", isCorrect: false },
        { answerText: "Andorra", isCorrect: false },
    ],
},
{
    questionText: "How tall is One World Trade Center in New York City?",
    answerOptions: [
        { answerText: "1,225 ft", isCorrect: false },
        { answerText: "1,888 ft", isCorrect: false },
        { answerText: "1,776 ft", isCorrect: true },
        { answerText: "1,960 ft", isCorrect: false },
    ],
},
{
    questionText: "What is the largest Muslim country in the world?",
    answerOptions: [
        { answerText: "Iran", isCorrect: false },
        { answerText: "Pakistan", isCorrect: false },
        { answerText: "Indonesia", isCorrect: true },
        { answerText: "Saudi Arabia", isCorrect: false },
    ],
},
{
    questionText: "What is the busiest port in Europe?",
    answerOptions: [
        { answerText: "Port of Rotterdam", isCorrect: true },
        { answerText: "Port of Amsterdam", isCorrect: false },
        { answerText: "Port of Hamburg", isCorrect: false },
        { answerText: "Port of Antwerp", isCorrect: false },
    ],
},
{
    questionText: "Which Canadian province has Charlottetown as its capital?",
    answerOptions: [
        { answerText: "Northwest Terrirories", isCorrect: false },
        { answerText: "Saskachewan", isCorrect: false },
        { answerText: "Prince Edward Island", isCorrect: true },
        { answerText: "Ontario", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of British Columbia, Canada?",
    answerOptions: [
        { answerText: "Victoria", isCorrect: true },
        { answerText: "Kelowna", isCorrect: false },
        { answerText: "Hope", isCorrect: false },
        { answerText: "Vancouver", isCorrect: false },
    ],
},
{
    questionText: "Which one of these countries borders with Poland?",
    answerOptions: [
        { answerText: "Lithuania", isCorrect: true },
        { answerText: "France", isCorrect: false },
        { answerText: "Netherlands", isCorrect: false },
        { answerText: "Norway", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Seychelles?",
    answerOptions: [
        { answerText: "N'Djamena", isCorrect: false },
        { answerText: "Luanda", isCorrect: false },
        { answerText: "Tripoli", isCorrect: false },
        { answerText: "Victoria", isCorrect: true },
    ],
},
{
    questionText: "Which of these countries is the smallest by population?",
    answerOptions: [
        { answerText: "Finland", isCorrect: false },
        { answerText: "Hong Kong", isCorrect: false },
        { answerText: "Slovakia", isCorrect: false },
        { answerText: "Norway", isCorrect: true },
    ],
},
{
    questionText: "What city  has the busiest airport in the world?",
    answerOptions: [
        { answerText: "Tokyo,Japan", isCorrect: false },
        { answerText: "Atlanta, Georgia USA", isCorrect: true },
        { answerText: "Chicago,Illinois ISA", isCorrect: false },
        { answerText: "London, England", isCorrect: false },
    ],
},
{
    questionText: "What's the first National Park designated in the United States?",
    answerOptions: [
        { answerText: "Yosemite", isCorrect: false },
        { answerText: "Yellowstone", isCorrect: true },
        { answerText: "Sequoia ", isCorrect: false },
        { answerText: "Rocky Mountain", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Estonia?",
    answerOptions: [
        { answerText: "Helsinki", isCorrect: false },
        { answerText: "Tallinn", isCorrect: true },
        { answerText: "Riga", isCorrect: false },
        { answerText: "Tartu", isCorrect: false },
    ],
},
{
    questionText: "How many independent countries are there within the continent of South America?",
    answerOptions: [
        { answerText: "8", isCorrect: false },
        { answerText: "9", isCorrect: false },
        { answerText: "12", isCorrect: true },
        { answerText: "10", isCorrect: false },
    ],
},
{
    questionText: "Which of the following is the longest river in Europe?",
    answerOptions: [
        { answerText: "Ural", isCorrect: false },
        { answerText: "Volga", isCorrect: true },
        { answerText: "Danube", isCorrect: false },
        { answerText: "Dnieper", isCorrect: false },
    ],
},
{
    questionText: "How many rivers are in Saudi Arabia?",
    answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "0", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
    ],
},
{
    questionText: "In which English county is the city of Portsmouth?",
    answerOptions: [
        { answerText: "Surrey", isCorrect: false },
        { answerText: "Oxfordshire", isCorrect: false },
        { answerText: "Buckinghamshire", isCorrect: false },
        { answerText: "Hampshire", isCorrect: true },
    ],
},
{
    questionText: "Frankenmuth, a US city nicknamed 'Little Bavaria', is located in what state?",
    answerOptions: [
        { answerText: "Kentucky", isCorrect: false },
        { answerText: "Virginia", isCorrect: false },
        { answerText: "Michigan", isCorrect: true },
        { answerText: "Pennsylvania", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Greenland?",
    answerOptions: [
        { answerText: "Maniitsoq", isCorrect: false },
        { answerText: "Nuuk", isCorrect: true },
        { answerText: "Sisimiut", isCorrect: false },
        { answerText: "Narsaq", isCorrect: false },
    ],
},
{
    questionText: "How many time zones are in Russia?",
    answerOptions: [
        { answerText: "11", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "8", isCorrect: false },
    ],
},
{
    questionText: "How many provinces are in the Netherlands?",
    answerOptions: [
        { answerText: "12", isCorrect: true },
        { answerText: "14", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "13", isCorrect: false },
    ],
},
{
    questionText: "Where is Hadrian's Wall located?",
    answerOptions: [
        { answerText: "Dublin, Ireland", isCorrect: false },
        { answerText: "Alexandria, Egypt", isCorrect: false },
        { answerText: "Carlisle, England", isCorrect: true },
        { answerText: "Rome, Italy", isCorrect: false },
    ],
},
{
    questionText: "What is the longest river in Europe?",
    answerOptions: [
        { answerText: "Rhine", isCorrect: false },
        { answerText: "Volga", isCorrect: true },
        { answerText: "Thames", isCorrect: false },
        { answerText: "Danube", isCorrect: false },
    ],
},
{
    questionText: "Which country claims ownership of the disputed state Kosovo?",
    answerOptions: [
        { answerText: "Macedonia", isCorrect: false },
        { answerText: "Serbia", isCorrect: true },
        { answerText: "Albania", isCorrect: false },
        { answerText: "Croatia", isCorrect: false },
    ],
},
{
    questionText: "Which of these American cities has fewer than 1,000,000 people?",
    answerOptions: [
        { answerText: "San Antonio, Texas", isCorrect: false },
        { answerText: "San Francisco, California", isCorrect: true },
        { answerText: "Phoenix, Arizona", isCorrect: false },
        { answerText: "Philadelphia, Pennsylvania", isCorrect: false },
    ],
},
{
    questionText: "What island in the Canary Islands was the scene of one of the worst air disasters in history with the collision of two jumbo jets?",
    answerOptions: [
        { answerText: "Gran Canaria", isCorrect: false },
        { answerText: "Tenerife", isCorrect: true },
        { answerText: "Maui", isCorrect: false },
        { answerText: "Fuerteventura", isCorrect: false },
    ],
},

	];
	
	const questions3 = [
{
    questionText: "tungjatjeta is hello in ____",
    answerOptions: [
        { answerText: "Turkish", isCorrect: false },
        { answerText: "Bulgarian", isCorrect: false },
        { answerText: "Polish", isCorrect: false },
        { answerText: "Albanian", isCorrect: true },
    ],
},
{
    questionText: "kaixo is hello in ____",
    answerOptions: [
        { answerText: "Serbian", isCorrect: false },
        { answerText: "Croatian", isCorrect: false },
        { answerText: "Persian", isCorrect: false },
        { answerText: "Basque", isCorrect: true },
    ],
},
{
    questionText: "vitaju is hello in ____",
    answerOptions: [
        { answerText: "Estonian", isCorrect: false },
        { answerText: "Polish", isCorrect: false },
        { answerText: "Belarusian", isCorrect: true },
        { answerText: "Dzongkha", isCorrect: false },
    ],
},
{
    questionText: "demat is hello in ____",
    answerOptions: [
        { answerText: "Slovene", isCorrect: false },
        { answerText: "Danish", isCorrect: false },
        { answerText: "Breton", isCorrect: true },
        { answerText: "Punjabi", isCorrect: false },
    ],
},
{
    questionText: "zdravejte is hello in ____",
    answerOptions: [
        { answerText: "Korean", isCorrect: false },
        { answerText: "Bosnian", isCorrect: false },
        { answerText: "Russian", isCorrect: false },
        { answerText: "Bulgarian", isCorrect: true },
    ],
},
{
    questionText: "zdravo is hello in ____",
    answerOptions: [
        { answerText: "Bosnian", isCorrect: true },
        { answerText: "Pashto", isCorrect: false },
        { answerText: "Slovak", isCorrect: false },
        { answerText: "Basque", isCorrect: false },
    ],
},
{
    questionText: "hola is hello in ____",
    answerOptions: [
        { answerText: "Dutch", isCorrect: false },
        { answerText: "Italian", isCorrect: false },
        { answerText: "Punjabi", isCorrect: false },
        { answerText: "Catalan", isCorrect: true },
    ],
},
{
    questionText: "bok is hello in ____",
    answerOptions: [
        { answerText: "Croatian", isCorrect: true },
        { answerText: "Ukrainian", isCorrect: false },
        { answerText: "Punjabi", isCorrect: false },
        { answerText: "Finnish", isCorrect: false },
    ],
},
{
    questionText: "ahoj is hello in ____",
    answerOptions: [
        { answerText: "Welsh", isCorrect: false },
        { answerText: "Czech", isCorrect: true },
        { answerText: "Tamil", isCorrect: false },
        { answerText: "Irish", isCorrect: false },
    ],
},
{
    questionText: "hallo is hello in ____",
    answerOptions: [
        { answerText: "Danish", isCorrect: true },
        { answerText: "Breton", isCorrect: false },
        { answerText: "Kurdishá", isCorrect: false },
        { answerText: "Thai", isCorrect: false },
    ],
},
{
    questionText: "hallo is hello in ____",
    answerOptions: [
        { answerText: "Turkish", isCorrect: false },
        { answerText: "Gaelic", isCorrect: false },
        { answerText: "Tibetan", isCorrect: false },
        { answerText: "Dutch", isCorrect: true },
    ],
},
{
    questionText: "tere is hello in ____",
    answerOptions: [
        { answerText: "Nepali", isCorrect: false },
        { answerText: "Albanian", isCorrect: false },
        { answerText: "Dzongkha", isCorrect: false },
        { answerText: "Estonian", isCorrect: true },
    ],
},
{
    questionText: "terve is hello in ____",
    answerOptions: [
        { answerText: "German", isCorrect: false },
        { answerText: "Uyghur", isCorrect: false },
        { answerText: "Sinhala", isCorrect: false },
        { answerText: "Finnish", isCorrect: true },
    ],
},
{
    questionText: "bonjour is hello in ____",
    answerOptions: [
        { answerText: "Greek", isCorrect: false },
        { answerText: "French", isCorrect: true },
        { answerText: "Lingala", isCorrect: false },
        { answerText: "Taiwanese Hokkien", isCorrect: false },
    ],
},
{
    questionText: "goeie is hello in ____",
    answerOptions: [
        { answerText: "Thai", isCorrect: false },
        { answerText: "Catalan", isCorrect: false },
        { answerText: "Tibetan", isCorrect: false },
        { answerText: "Frisian", isCorrect: true },
    ],
},
{
    questionText: "dia duit is hello in ____",
    answerOptions: [
        { answerText: "Gaelic", isCorrect: false },
        { answerText: "Irish", isCorrect: true },
        { answerText: "Bulgarian", isCorrect: false },
        { answerText: "Swedish", isCorrect: false },
    ],
},
{
    questionText: "halò is hello in ____",
    answerOptions: [
        { answerText: "Uzbek", isCorrect: false },
        { answerText: "Irish", isCorrect: false },
        { answerText: "Gaelic", isCorrect: true },
        { answerText: "Tatar", isCorrect: false },
    ],
},
{
    questionText: "guten tag is hello in ____",
    answerOptions: [
        { answerText: "Vietnamese", isCorrect: false },
        { answerText: "Persian", isCorrect: false },
        { answerText: "German", isCorrect: true },
        { answerText: "Hungarian", isCorrect: false },
    ],
},
{
    questionText: "yasass is hello in ____",
    answerOptions: [
        { answerText: "Malayalam", isCorrect: false },
        { answerText: "Greek", isCorrect: true },
        { answerText: "Basque", isCorrect: false },
        { answerText: "Hawaiian", isCorrect: false },
    ],
},
{
    questionText: "szervusz is hello in ____",
    answerOptions: [
        { answerText: "Latvian", isCorrect: false },
        { answerText: "Hungarian", isCorrect: true },
        { answerText: "Maori", isCorrect: false },
        { answerText: "Kyrgyz", isCorrect: false },
    ],
},
{
    questionText: "halló  is hello in ____",
    answerOptions: [
        { answerText: "Italian", isCorrect: false },
        { answerText: "Icelandic", isCorrect: true },
        { answerText: "Sinhala", isCorrect: false },
        { answerText: "Hawaiian", isCorrect: false },
    ],
},
{
    questionText: "salve is hello in ____",
    answerOptions: [
        { answerText: "Marshallese", isCorrect: false },
        { answerText: "Czech", isCorrect: false },
        { answerText: "Italian", isCorrect: true },
        { answerText: "Thai", isCorrect: false },
    ],
},
{
    questionText: "sveika or sveiks is hello in ____",
    answerOptions: [
        { answerText: "Korean", isCorrect: false },
        { answerText: "Latvian", isCorrect: true },
        { answerText: "Palauan", isCorrect: false },
        { answerText: "Breton", isCorrect: false },
    ],
},
{
    questionText: "labas is hello in ____",
    answerOptions: [
        { answerText: "Belarusian", isCorrect: false },
        { answerText: "Lithuanian", isCorrect: true },
        { answerText: "Nepali", isCorrect: false },
        { answerText: "Chichewa", isCorrect: false },
    ],
},
{
    questionText: "moïen is hello in ____",
    answerOptions: [
        { answerText: "Kinyarwanda", isCorrect: false },
        { answerText: "Luxembourgish", isCorrect: true },
        { answerText: "Urdu", isCorrect: false },
        { answerText: "French", isCorrect: false },
    ],
},
{
    questionText: "god dag is hello in ____",
    answerOptions: [
        { answerText: "Kazakh", isCorrect: false },
        { answerText: "Catalan", isCorrect: false },
        { answerText: "Sesotho", isCorrect: false },
        { answerText: "Norwegian", isCorrect: true },
    ],
},
{
    questionText: "cześć is hello in ____",
    answerOptions: [
        { answerText: "Polish", isCorrect: true },
        { answerText: "Oromo", isCorrect: false },
        { answerText: "Norwegian", isCorrect: false },
        { answerText: "Samoan", isCorrect: false },
    ],
},
{
    questionText: "olá is hello in ____",
    answerOptions: [
        { answerText: "Irish", isCorrect: false },
        { answerText: "Swati", isCorrect: false },
        { answerText: "Portuguese", isCorrect: true },
        { answerText: "Telugu", isCorrect: false },
    ],
},
{
    questionText: "salut is hello in ____",
    answerOptions: [
        { answerText: "Igbo", isCorrect: false },
        { answerText: "Danish", isCorrect: false },
        { answerText: "Tok Pisin", isCorrect: false },
        { answerText: "Romanian", isCorrect: true },
    ],
},
{
    questionText: "zdravstvuyte is hello in ____",
    answerOptions: [
        { answerText: "Lingala", isCorrect: false },
        { answerText: "Ukrainian", isCorrect: false },
        { answerText: "Afrikaans", isCorrect: false },
        { answerText: "Russian", isCorrect: true },
    ],
},
{
    questionText: "zdravo is hello in ____",
    answerOptions: [
        { answerText: "Oromo", isCorrect: false },
        { answerText: "Serbian", isCorrect: true },
        { answerText: "Greek", isCorrect: false },
        { answerText: "Amharic", isCorrect: false },
    ],
},
{
    questionText: "dobrý deň is hello in ____",
    answerOptions: [
        { answerText: "Slovak", isCorrect: true },
        { answerText: "Tigrinya", isCorrect: false },
        { answerText: "Sinhala", isCorrect: false },
        { answerText: "Bulgarian", isCorrect: false },
    ],
},
{
    questionText: "živjo is hello in ____",
    answerOptions: [
        { answerText: "Slovene", isCorrect: true },
        { answerText: "Tagalog", isCorrect: false },
        { answerText: "Kurdishá", isCorrect: false },
        { answerText: "Hausa", isCorrect: false },
    ],
},
{
    questionText: "hola is hello in ____",
    answerOptions: [
        { answerText: "Spanish", isCorrect: true },
        { answerText: "Malayalam", isCorrect: false },
        { answerText: "Lingala", isCorrect: false },
        { answerText: "Georgian", isCorrect: false },
    ],
},
{
    questionText: "hej is hello in ____",
    answerOptions: [
        { answerText: "Albanian", isCorrect: false },
        { answerText: "Luganda", isCorrect: false },
        { answerText: "Swedish", isCorrect: true },
        { answerText: "Nepali", isCorrect: false },
    ],
},
{
    questionText: "vitayu is hello in ____",
    answerOptions: [
        { answerText: "Ukrainian", isCorrect: true },
        { answerText: "Amharic", isCorrect: false },
        { answerText: "Pashto", isCorrect: false },
        { answerText: "Russian", isCorrect: false },
    ],
},
{
    questionText: "helo is hello in ____",
    answerOptions: [
        { answerText: "Persian", isCorrect: false },
        { answerText: "Fijian", isCorrect: false },
        { answerText: "Welsh", isCorrect: true },
        { answerText: "Kazakh", isCorrect: false },
    ],
},
{
    questionText: "sholem-aleykhem is hello in ____",
    answerOptions: [
        { answerText: "Yiddish", isCorrect: true },
        { answerText: "Breton", isCorrect: false },
        { answerText: "Burmese", isCorrect: false },
        { answerText: "Marshallese", isCorrect: false },
    ],
},
{
    questionText: "as-salām ‘alaykum is hello in ____",
    answerOptions: [
        { answerText: "Catalan", isCorrect: false },
        { answerText: "Azerbaijani", isCorrect: false },
        { answerText: "Taiwanese Hokkien", isCorrect: false },
        { answerText: "Arabic", isCorrect: true },
    ],
},
{
    questionText: "shalom is hello in ____",
    answerOptions: [
        { answerText: "Bengali", isCorrect: false },
        { answerText: "Hebrew", isCorrect: true },
        { answerText: "Kyrgyz", isCorrect: false },
        { answerText: "Belarusian", isCorrect: false },
    ],
},
{
    questionText: "merheba is hello in ____",
    answerOptions: [
        { answerText: "Basque", isCorrect: false },
        { answerText: "Tamil", isCorrect: false },
        { answerText: "Kurdishá", isCorrect: true },
        { answerText: "Kyrgyz", isCorrect: false },
    ],
},
{
    questionText: "salΓm is hello in ____",
    answerOptions: [
        { answerText: "Persian", isCorrect: true },
        { answerText: "Estonian", isCorrect: false },
        { answerText: "Uyghur", isCorrect: false },
        { answerText: "Uzbek", isCorrect: false },
    ],
},
{
    questionText: "merhaba is hello in ____",
    answerOptions: [
        { answerText: "Bosnian", isCorrect: false },
        { answerText: "Turkish", isCorrect: true },
        { answerText: "Tahitian", isCorrect: false },
        { answerText: "Maori", isCorrect: false },
    ],
},
{
    questionText: "barev dzez is hello in ____",
    answerOptions: [
        { answerText: "Armenian", isCorrect: true },
        { answerText: "Danish", isCorrect: false },
        { answerText: "Marshallese", isCorrect: false },
        { answerText: "Tok Pisin", isCorrect: false },
    ],
},
{
    questionText: "salam is hello in ____",
    answerOptions: [
        { answerText: "Palauan", isCorrect: false },
        { answerText: "Azerbaijani", isCorrect: true },
        { answerText: "Tongan", isCorrect: false },
        { answerText: "Bulgarian", isCorrect: false },
    ],
},
{
    questionText: "nômoshkar or assalamualaikum is hello in ____",
    answerOptions: [
        { answerText: "Samoan", isCorrect: false },
        { answerText: "Portuguese", isCorrect: false },
        { answerText: "Arabic", isCorrect: false },
        { answerText: "Bengali", isCorrect: true },
    ],
},
{
    questionText: "mingalarba is hello in ____",
    answerOptions: [
        { answerText: "Tagalog", isCorrect: false },
        { answerText: "Burmese", isCorrect: true },
        { answerText: "Cantonese", isCorrect: false },
        { answerText: "Croatian", isCorrect: false },
    ],
},
{
    questionText: "chum reap suor is hello in ____",
    answerOptions: [
        { answerText: "Finnish", isCorrect: false },
        { answerText: "Telugu", isCorrect: false },
        { answerText: "Bengali", isCorrect: false },
        { answerText: "Cambodian", isCorrect: true },
    ],
},
{
    questionText: "néih hóu is hello in ____",
    answerOptions: [
        { answerText: "Cantonese", isCorrect: true },
        { answerText: "Breton", isCorrect: false },
        { answerText: "Armenian", isCorrect: false },
        { answerText: "Taiwanese Hokkien", isCorrect: false },
    ],
},
{
    questionText: "nǐ hǎo is hello in ____",
    answerOptions: [
        { answerText: "Chinese", isCorrect: true },
        { answerText: "Romanian", isCorrect: false },
        { answerText: "Hindi", isCorrect: false },
        { answerText: "Lao", isCorrect: false },
    ],
},
{
    questionText: "kuzu-zangpo is hello in ____",
    answerOptions: [
        { answerText: "Gujarati", isCorrect: false },
        { answerText: "Dzongkha", isCorrect: true },
        { answerText: "Norwegian", isCorrect: false },
        { answerText: "Polish", isCorrect: false },
    ],
},
{
    questionText: "gamarjoba is hello in ____",
    answerOptions: [
        { answerText: "Malay", isCorrect: false },
        { answerText: "Ukrainian", isCorrect: false },
        { answerText: "Georgian", isCorrect: true },
        { answerText: "Cantonese", isCorrect: false },
    ],
},
{
    questionText: "namaste is hello in ____",
    answerOptions: [
        { answerText: "Japanese", isCorrect: false },
        { answerText: "Albanian", isCorrect: false },
        { answerText: "Indonesian", isCorrect: false },
        { answerText: "Gujarati", isCorrect: true },
    ],
},
{
    questionText: "namaste is hello in ____",
    answerOptions: [
        { answerText: "Hindi", isCorrect: true },
        { answerText: "Icelandic", isCorrect: false },
        { answerText: "Malayalam", isCorrect: false },
        { answerText: "Cambodian", isCorrect: false },
    ],
},
{
    questionText: "halo is hello in ____",
    answerOptions: [
        { answerText: "Indonesian", isCorrect: true },
        { answerText: "Armenian", isCorrect: false },
        { answerText: "Lao", isCorrect: false },
        { answerText: "Spanish", isCorrect: false },
    ],
},
{
    questionText: "konnichiwa is hello in ____",
    answerOptions: [
        { answerText: "Gujarati", isCorrect: false },
        { answerText: "Belarusian", isCorrect: false },
        { answerText: "Japanese", isCorrect: true },
        { answerText: "Malay", isCorrect: false },
    ],
},
{
    questionText: "namaste is hello in ____",
    answerOptions: [
        { answerText: "Kannada", isCorrect: true },
        { answerText: "French", isCorrect: false },
        { answerText: "Chinese", isCorrect: false },
        { answerText: "Cantonese", isCorrect: false },
    ],
},
{
    questionText: "sälemetsiz be is hello in ____",
    answerOptions: [
        { answerText: "Kazakh", isCorrect: true },
        { answerText: "Lao", isCorrect: false },
        { answerText: "Catalan", isCorrect: false },
        { answerText: "Korean", isCorrect: false },
    ],
},
{
    questionText: "annyeonghaseyo is hello in ____",
    answerOptions: [
        { answerText: "Korean", isCorrect: true },
        { answerText: "Welsh", isCorrect: false },
        { answerText: "Danish", isCorrect: false },
        { answerText: "Mongolian", isCorrect: false },
    ],
},
{
    questionText: "salamatsyzby is hello in ____",
    answerOptions: [
        { answerText: "Cambodian", isCorrect: false },
        { answerText: "Gujarati", isCorrect: false },
        { answerText: "Basque", isCorrect: false },
        { answerText: "Kyrgyz", isCorrect: true },
    ],
},
{
    questionText: "sabaidee is hello in ____",
    answerOptions: [
        { answerText: "Dutch", isCorrect: false },
        { answerText: "Lao", isCorrect: true },
        { answerText: "Malay", isCorrect: false },
        { answerText: "Hindi", isCorrect: false },
    ],
},
{
    questionText: "hello is hello in ____",
    answerOptions: [
        { answerText: "Mongolian", isCorrect: false },
        { answerText: "Pashto", isCorrect: false },
        { answerText: "Irish", isCorrect: false },
        { answerText: "Malay", isCorrect: true },
    ],
},
{
    questionText: "namaskaram is hello in ____",
    answerOptions: [
        { answerText: "Hungarian", isCorrect: false },
        { answerText: "Malayalam", isCorrect: true },
        { answerText: "Japanese", isCorrect: false },
        { answerText: "Kannada", isCorrect: false },
    ],
},
{
    questionText: "sain baina uu is hello in ____",
    answerOptions: [
        { answerText: "Mongolian", isCorrect: true },
        { answerText: "Tatar", isCorrect: false },
        { answerText: "Finnish", isCorrect: false },
        { answerText: "Cambodian", isCorrect: false },
    ],
},
{
    questionText: "namaste is hello in ____",
    answerOptions: [
        { answerText: "Nepali", isCorrect: true },
        { answerText: "Telugu", isCorrect: false },
        { answerText: "Tagalog", isCorrect: false },
        { answerText: "Lithuanian", isCorrect: false },
    ],
},
{
    questionText: "salaam is hello in ____",
    answerOptions: [
        { answerText: "Urdu", isCorrect: false },
        { answerText: "Hindi", isCorrect: false },
        { answerText: "Pashto", isCorrect: true },
        { answerText: "Greek", isCorrect: false },
    ],
},
{
    questionText: "sat sri akal ji or asalamwalaykum  is hello in ____",
    answerOptions: [
        { answerText: "Breton", isCorrect: false },
        { answerText: "Uyghur", isCorrect: false },
        { answerText: "Dzongkha", isCorrect: false },
        { answerText: "Punjabi", isCorrect: true },
    ],
},
{
    questionText: "āyubōvan is hello in ____",
    answerOptions: [
        { answerText: "Tamil", isCorrect: false },
        { answerText: "Romanian", isCorrect: false },
        { answerText: "Sinhala", isCorrect: true },
        { answerText: "Uzbek", isCorrect: false },
    ],
},
{
    questionText: "kumusta is hello in ____",
    answerOptions: [
        { answerText: "Icelandic", isCorrect: false },
        { answerText: "Vietnamese", isCorrect: false },
        { answerText: "Tagalog", isCorrect: true },
        { answerText: "Tatar", isCorrect: false },
    ],
},
{
    questionText: "lí-hó is hello in ____",
    answerOptions: [
        { answerText: "Hebrew", isCorrect: false },
        { answerText: "Arabic", isCorrect: false },
        { answerText: "Tongan", isCorrect: false },
        { answerText: "Taiwanese Hokkien", isCorrect: true },
    ],
},
{
    questionText: "vaṇakkam is hello in ____",
    answerOptions: [
        { answerText: "Tamil", isCorrect: true },
        { answerText: "Japanese", isCorrect: false },
        { answerText: "Belarusian", isCorrect: false },
        { answerText: "Burmese", isCorrect: false },
    ],
},
{
    questionText: "isänmesez is hello in ____",
    answerOptions: [
        { answerText: "Kurdishá", isCorrect: false },
        { answerText: "Tibetan", isCorrect: false },
        { answerText: "Tatar", isCorrect: true },
        { answerText: "Urdu", isCorrect: false },
    ],
},
{
    questionText: "namaskārām is hello in ____",
    answerOptions: [
        { answerText: "Indonesian", isCorrect: false },
        { answerText: "Telugu", isCorrect: true },
        { answerText: "Vietnamese", isCorrect: false },
        { answerText: "Italian", isCorrect: false },
    ],
},
{
    questionText: "sà-wàt-dee is hello in ____",
    answerOptions: [
        { answerText: "Chinese", isCorrect: false },
        { answerText: "Thai", isCorrect: true },
        { answerText: "Fijian", isCorrect: false },
        { answerText: "Bosnian", isCorrect: false },
    ],
},
{
    questionText: "tashi delek is hello in ____",
    answerOptions: [
        { answerText: "Swedish", isCorrect: false },
        { answerText: "Tahitian", isCorrect: false },
        { answerText: "Tibetan", isCorrect: true },
        { answerText: "Maori", isCorrect: false },
    ],
},
{
    questionText: "āssālam ‘alaykum is hello in ____",
    answerOptions: [
        { answerText: "Tok Pisin", isCorrect: false },
        { answerText: "Czech", isCorrect: false },
        { answerText: "Urdu", isCorrect: true },
        { answerText: "Palauan", isCorrect: false },
    ],
},
{
    questionText: "ässalamu läykum is hello in ____",
    answerOptions: [
        { answerText: "Uyghur", isCorrect: true },
        { answerText: "Samoan", isCorrect: false },
        { answerText: "Portuguese", isCorrect: false },
        { answerText: "Afrikaans", isCorrect: false },
    ],
},
{
    questionText: "assalomu aleykum is hello in ____",
    answerOptions: [
        { answerText: "Basque", isCorrect: false },
        { answerText: "Uzbek", isCorrect: true },
        { answerText: "Luganda", isCorrect: false },
        { answerText: "Indonesian", isCorrect: false },
    ],
},
{
    questionText: "xin chào is hello in ____",
    answerOptions: [
        { answerText: "Igbo", isCorrect: false },
        { answerText: "Chinese", isCorrect: false },
        { answerText: "Vietnamese", isCorrect: true },
        { answerText: "Norwegian", isCorrect: false },
    ],
},
{
    questionText: "ni sa bula is hello in ____",
    answerOptions: [
        { answerText: "Bosnian", isCorrect: false },
        { answerText: "Swahili", isCorrect: false },
        { answerText: "Kannada", isCorrect: false },
        { answerText: "Fijian", isCorrect: true },
    ],
},
{
    questionText: "aloha is hello in ____",
    answerOptions: [
        { answerText: "Fijian", isCorrect: false },
        { answerText: "Hawaiian", isCorrect: true },
        { answerText: "Spanish", isCorrect: false },
        { answerText: "Estonian", isCorrect: false },
    ],
},
{
    questionText: "tēnā koe is hello in ____",
    answerOptions: [
        { answerText: "Tahitian", isCorrect: false },
        { answerText: "Tsonga", isCorrect: false },
        { answerText: "Maori", isCorrect: true },
        { answerText: "Arabic", isCorrect: false },
    ],
},
{
    questionText: "yokwe is hello in ____",
    answerOptions: [
        { answerText: "Croatian", isCorrect: false },
        { answerText: "Marshallese", isCorrect: true },
        { answerText: "Hausa", isCorrect: false },
        { answerText: "Tongan", isCorrect: false },
    ],
},
{
    questionText: "alii is hello in ____",
    answerOptions: [
        { answerText: "Tswana", isCorrect: false },
        { answerText: "Palauan", isCorrect: true },
        { answerText: "French", isCorrect: false },
        { answerText: "Luganda", isCorrect: false },
    ],
},
{
    questionText: "tālofa is hello in ____",
    answerOptions: [
        { answerText: "Tsonga", isCorrect: false },
        { answerText: "Albanian", isCorrect: false },
        { answerText: "Mongolian", isCorrect: false },
        { answerText: "Samoan", isCorrect: true },
    ],
},
{
    questionText: "ia ora na is hello in ____",
    answerOptions: [
        { answerText: "Romanian", isCorrect: false },
        { answerText: "Chichewa", isCorrect: false },
        { answerText: "Igbo", isCorrect: false },
        { answerText: "Tahitian", isCorrect: true },
    ],
},
{
    questionText: "gude is hello in ____",
    answerOptions: [
        { answerText: "Afrikaans", isCorrect: false },
        { answerText: "Dutch", isCorrect: false },
        { answerText: "Tok Pisin", isCorrect: true },
        { answerText: "Tswana", isCorrect: false },
    ],
},
{
    questionText: "mālō e lelei is hello in ____",
    answerOptions: [
        { answerText: "Hebrew", isCorrect: false },
        { answerText: "Lingala", isCorrect: false },
        { answerText: "Amharic", isCorrect: false },
        { answerText: "Tongan", isCorrect: true },
    ],
},
{
    questionText: "hallo is hello in ____",
    answerOptions: [
        { answerText: "Shona", isCorrect: false },
        { answerText: "Afrikaans", isCorrect: true },
        { answerText: "Belarusian", isCorrect: false },
        { answerText: "Spanish", isCorrect: false },
    ],
},
{
    questionText: "tena jistilign is hello in ____",
    answerOptions: [
        { answerText: "Amharic", isCorrect: true },
        { answerText: "Danish", isCorrect: false },
        { answerText: "Northern Sotho", isCorrect: false },
        { answerText: "Oromo", isCorrect: false },
    ],
},
{
    questionText: "moni is hello in ____",
    answerOptions: [
        { answerText: "Czech", isCorrect: false },
        { answerText: "Tswana", isCorrect: false },
        { answerText: "Yiddish", isCorrect: false },
        { answerText: "Chichewa", isCorrect: true },
    ],
},
{
    questionText: "salama alaikum is hello in ____",
    answerOptions: [
        { answerText: "Kinyarwanda", isCorrect: false },
        { answerText: "Turkish", isCorrect: false },
        { answerText: "Hausa", isCorrect: true },
        { answerText: "Chichewa", isCorrect: false },
    ],
},
{
    questionText: "ndêwó is hello in ____",
    answerOptions: [
        { answerText: "Shona", isCorrect: false },
        { answerText: "Bulgarian", isCorrect: false },
        { answerText: "Sesotho", isCorrect: false },
        { answerText: "Igbo", isCorrect: true },
    ],
},
{
    questionText: "muraho is hello in ____",
    answerOptions: [
        { answerText: "Ndebele", isCorrect: false },
        { answerText: "Finnish", isCorrect: false },
        { answerText: "Hausa", isCorrect: false },
        { answerText: "Kinyarwanda", isCorrect: true },
    ],
},
{
    questionText: "mbote is hello in ____",
    answerOptions: [
        { answerText: "Tigrinya", isCorrect: false },
        { answerText: "Lingala", isCorrect: true },
        { answerText: "Swati", isCorrect: false },
        { answerText: "Frisian", isCorrect: false },
    ],
},
{
    questionText: "ki kati is hello in ____",
    answerOptions: [
        { answerText: "Wolof", isCorrect: false },
        { answerText: "Luganda", isCorrect: true },
        { answerText: "Russian", isCorrect: false },
        { answerText: "Tsonga", isCorrect: false },
    ],
},
{
    questionText: "manao ahoana is hello in ____",
    answerOptions: [
        { answerText: "Wolof", isCorrect: false },
        { answerText: "Malagasy", isCorrect: true },
        { answerText: "Malagasy", isCorrect: false },
        { answerText: "Portuguese", isCorrect: false },
    ],
},
{
    questionText: "salibonani is hello in ____",
    answerOptions: [
        { answerText: "Xhosa", isCorrect: false },
        { answerText: "Kinyarwanda", isCorrect: false },
        { answerText: "Croatian", isCorrect: false },
        { answerText: "Ndebele", isCorrect: true },
    ],
},
{
    questionText: "dumêlang is hello in ____",
    answerOptions: [
        { answerText: "Northern Sotho", isCorrect: true },
        { answerText: "Czech", isCorrect: false },
        { answerText: "Ndebele", isCorrect: false },
        { answerText: "Sesotho", isCorrect: false },
    ],
},
{
    questionText: "ashamaa is hello in ____",
    answerOptions: [
        { answerText: "Oromo", isCorrect: true },
        { answerText: "Dutch", isCorrect: false },
        { answerText: "Northern Sotho", isCorrect: false },
        { answerText: "Wolof", isCorrect: false },
    ],
},
{
    questionText: "dumela is hello in ____",
    answerOptions: [
        { answerText: "Luxembourgish", isCorrect: false },
        { answerText: "Sesotho", isCorrect: true },
        { answerText: "Swahili", isCorrect: false },
        { answerText: "Swati", isCorrect: false },
    ],
},
{
    questionText: "mhoro is hello in ____",
    answerOptions: [
        { answerText: "Georgian", isCorrect: false },
        { answerText: "Xhosa", isCorrect: false },
        { answerText: "Shona", isCorrect: true },
        { answerText: "Icelandic", isCorrect: false },
    ],
},
{
    questionText: "jambo is hello in ____",
    answerOptions: [
        { answerText: "Catalan", isCorrect: false },
        { answerText: "Swahili", isCorrect: true },
        { answerText: "Xhosa", isCorrect: false },
        { answerText: "Tigrinya", isCorrect: false },
    ],
},
{
    questionText: "sawubona is hello in ____",
    answerOptions: [
        { answerText: "Swati", isCorrect: true },
        { answerText: "Yoruba", isCorrect: false },
        { answerText: "Hungarian", isCorrect: false },
        { answerText: "Zulu", isCorrect: false },
    ],
},
{
    questionText: "selam is hello in ____",
    answerOptions: [
        { answerText: "Estonian", isCorrect: false },
        { answerText: "Zulu", isCorrect: false },
        { answerText: "Tigrinya", isCorrect: true },
        { answerText: "Ndebele", isCorrect: false },
    ],
},
{
    questionText: "avuxeni is hello in ____",
    answerOptions: [
        { answerText: "Tsonga", isCorrect: true },
        { answerText: "Dutch", isCorrect: false },
        { answerText: "Hebrew", isCorrect: false },
        { answerText: "Malagasy", isCorrect: false },
    ],
},
{
    questionText: "dumela is hello in ____",
    answerOptions: [
        { answerText: "Tswana", isCorrect: true },
        { answerText: "Frisian", isCorrect: false },
        { answerText: "Yiddish", isCorrect: false },
        { answerText: "Yoruba", isCorrect: false },
    ],
},
{
    questionText: "salaam aleekum is hello in ____",
    answerOptions: [
        { answerText: "German", isCorrect: false },
        { answerText: "Bosnian", isCorrect: false },
        { answerText: "Wolof", isCorrect: true },
        { answerText: "Swahili", isCorrect: false },
    ],
},
{
    questionText: "molo is hello in ____",
    answerOptions: [
        { answerText: "Swedish", isCorrect: false },
        { answerText: "Yoruba", isCorrect: false },
        { answerText: "Xhosa", isCorrect: true },
        { answerText: "Czech", isCorrect: false },
    ],
},
{
    questionText: "bawo is hello in ____",
    answerOptions: [
        { answerText: "Yoruba", isCorrect: true },
        { answerText: "Shona", isCorrect: false },
        { answerText: "Frisian", isCorrect: false },
        { answerText: "Croatian", isCorrect: false },
    ],
},
{
    questionText: "sawubona is hello in ____",
    answerOptions: [
        { answerText: "Zulu", isCorrect: true },
        { answerText: "Albanian", isCorrect: false },
        { answerText: "Estonian", isCorrect: false },
        { answerText: "Malagasy", isCorrect: false },
    ],
},
	];
	
	const questions4 = [
	{
    questionText: "What country is not a part of Scandinavia?",
    answerOptions: [
        { answerText: "Finland", isCorrect: true },
        { answerText: "Denmark", isCorrect: false },
        { answerText: "Sweden", isCorrect: false },
        { answerText: "Norway", isCorrect: false },
    ],
},
{
    questionText: "In which city, is the Big Nickel located in Canada?",
    answerOptions: [
        { answerText: "Victoria, British Columbia", isCorrect: false },
        { answerText: "Calgary, Alberta", isCorrect: false },
        { answerText: "Halifax, Nova Scotia ", isCorrect: false },
        { answerText: "Sudbury, Ontario", isCorrect: true },
    ],
},
{
    questionText: "What is the largest city and commercial capital of Sri Lanka?",
    answerOptions: [
        { answerText: "Colombo", isCorrect: true },
        { answerText: "Moratuwa", isCorrect: false },
        { answerText: "Kandy", isCorrect: false },
        { answerText: "Negombo", isCorrect: false },
    ],
},
{
    questionText: "Which of these countries is NOT a part of the Asian continent?",
    answerOptions: [
        { answerText: "Singapore", isCorrect: false },
        { answerText: "Georgia", isCorrect: false },
        { answerText: "Suriname", isCorrect: true },
        { answerText: "Russia", isCorrect: false },
    ],
},
{
    questionText: "Which of these island countries is located in the Caribbean?",
    answerOptions: [
        { answerText: "Maldives", isCorrect: false },
        { answerText: "Barbados", isCorrect: true },
        { answerText: "Fiji", isCorrect: false },
        { answerText: "Seychelles", isCorrect: false },
    ],
},
{
    questionText: "Which of these is NOT a city in India?",
    answerOptions: [
        { answerText: "Islamabad", isCorrect: true },
        { answerText: "Ghaziabad", isCorrect: false },
        { answerText: "Ahmedabad", isCorrect: false },
        { answerText: "Hyderabad", isCorrect: false },
    ],
},
{
    questionText: "The prefix Sino- (As in Sino-American) is used to refer to what nationality?",
    answerOptions: [
        { answerText: "Japanese", isCorrect: false },
        { answerText: "Indian", isCorrect: false },
        { answerText: "Chinese", isCorrect: true },
        { answerText: "Russian", isCorrect: false },
    ],
},
{
    questionText: "Which country is completely landlocked by South Africa?",
    answerOptions: [
        { answerText: "Lesotho", isCorrect: true },
        { answerText: "Swaziland", isCorrect: false },
        { answerText: "Zimbabwe", isCorrect: false },
        { answerText: "Botswana", isCorrect: false },
    ],
},
{
    questionText: "Which of these is NOT a province in China?",
    answerOptions: [
        { answerText: "Fujian", isCorrect: false },
        { answerText: "Sichuan", isCorrect: false },
        { answerText: "Guangdong", isCorrect: false },
        { answerText: "Yangtze", isCorrect: true },
    ],
},
{
    questionText: "The mountainous Khyber Pass connects which of the two following countries?",
    answerOptions: [
        { answerText: "Pakistan and India", isCorrect: false },
        { answerText: "Afghanistan and Pakistan", isCorrect: true },
        { answerText: "India and Nepal", isCorrect: false },
        { answerText: "Tajikistan and Kyrgyzstan", isCorrect: false },
    ],
},
{
    questionText: "Which of the following Inuit languages was the FIRST to use a unique writing system not based on the Latin alphabet?",
    answerOptions: [
        { answerText: "Greenlandic", isCorrect: false },
        { answerText: "Inuinnaqtun", isCorrect: false },
        { answerText: "Inuktitut", isCorrect: true },
        { answerText: "Inupiat", isCorrect: false },
    ],
},
{
    questionText: "In 2012 the German-speaking microstate Liechtenstein in Central Europe had a population of how many inhabitants?",
    answerOptions: [
        { answerText: "36,600", isCorrect: true },
        { answerText: "2,400", isCorrect: false },
        { answerText: "323,400", isCorrect: false },
        { answerText: "90,000", isCorrect: false },
    ],
},
{
    questionText: "Where is the Luxor Hotel & Casino located?",
    answerOptions: [
        { answerText: "Paradise, Nevada", isCorrect: true },
        { answerText: "Winchester, Nevada", isCorrect: false },
        { answerText: "Jackpot, Nevada", isCorrect: false },
        { answerText: "Las Vegas, Nevada", isCorrect: false },
    ],
},
{
    questionText: "How many countries border Kyrgyzstan?",
    answerOptions: [
        { answerText: "4", isCorrect: true },
        { answerText: "6", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: false },
    ],
},
{
    questionText: "Where is the fast food chain Panda Express headquartered?",
    answerOptions: [
        { answerText: "Fresno, California", isCorrect: false },
        { answerText: "Sacramento, California", isCorrect: false },
        { answerText: "Rosemead, California", isCorrect: true },
        { answerText: "San Diego, California", isCorrect: false },
    ],
},
{
    questionText: "What is the area of Vatican City?",
    answerOptions: [
        { answerText: "12.00km^2", isCorrect: false },
        { answerText: "0.86km^2", isCorrect: false },
        { answerText: "0.10km^2", isCorrect: false },
        { answerText: "0.44km^2", isCorrect: true },
    ],
},
{
    questionText: "The Hunua Ranges is located in...",
    answerOptions: [
        { answerText: "New Zealand", isCorrect: true },
        { answerText: "China", isCorrect: false },
        { answerText: "Mexico", isCorrect: false },
        { answerText: "Nepal", isCorrect: false },
    ],
},
{
    questionText: "Fucking is a village in which country?",
    answerOptions: [
        { answerText: "Switzerland", isCorrect: false },
        { answerText: "Czech Republic", isCorrect: false },
        { answerText: "Germany", isCorrect: false },
        { answerText: "Austria", isCorrect: true },
    ],
},
{
    questionText: "What is the most populous Muslim-majority nation in 2010?",
    answerOptions: [
        { answerText: "Sudan", isCorrect: false },
        { answerText: "Saudi Arabia", isCorrect: false },
        { answerText: "Iran", isCorrect: false },
        { answerText: "Indonesia", isCorrect: true },
    ],
},
{
    questionText: "Which country was NOT formerly part of Yugoslavia?",
    answerOptions: [
        { answerText: "Albania", isCorrect: true },
        { answerText: "Croatia", isCorrect: false },
        { answerText: "Serbia", isCorrect: false },
        { answerText: "Macedonia", isCorrect: false },
    ],
},
{
    questionText: "What is the official German name of the Swiss Federal Railways?",
    answerOptions: [
        { answerText: "Schweizerische Nationalbahnen", isCorrect: false },
        { answerText: "Schweizerische Staatsbahnen", isCorrect: false },
        { answerText: "Bundesbahnen der Schweiz", isCorrect: false },
        { answerText: "Schweizerische Bundesbahnen", isCorrect: true },
    ],
},
{
    questionText: "What city is known as the Rose Capital of the World?",
    answerOptions: [
        { answerText: "Anaheim, California", isCorrect: false },
        { answerText: "San Diego, California", isCorrect: false },
        { answerText: "Tyler, Texas", isCorrect: true },
        { answerText: "Miami, Florida", isCorrect: false },
    ],
},
{
    questionText: "What is the Finnish word for Finland",
    answerOptions: [
        { answerText: "Magyarorszag", isCorrect: false },
        { answerText: "Sverige", isCorrect: false },
        { answerText: "Eesti", isCorrect: false },
        { answerText: "Suomi", isCorrect: true },
    ],
},
{
    questionText: "What is the name of the Canadian national anthem?",
    answerOptions: [
        { answerText: "O Red Maple", isCorrect: false },
        { answerText: "Leaf-Spangled Banner", isCorrect: false },
        { answerText: "March of the Puck Drop", isCorrect: false },
        { answerText: "O Canada", isCorrect: true },
    ],
},
{
    questionText: "What North American tourist attraction is served by the Maid of the Mist tour company?",
    answerOptions: [
        { answerText: "Niagara Falls", isCorrect: true },
        { answerText: "Yosemite National Park", isCorrect: false },
        { answerText: "Disney World", isCorrect: false },
        { answerText: "Whistler, British Columbia", isCorrect: false },
    ],
},
{
    questionText: "What is the name of rocky region that spans most of eastern Canada?",
    answerOptions: [
        { answerText: "Canadian Shield", isCorrect: true },
        { answerText: "Rocky Mountains", isCorrect: false },
        { answerText: "Appalachian Mountains", isCorrect: false },
        { answerText: "Himalayas", isCorrect: false },
    ],
},
{
    questionText: "What is the tallest mountain in Canada?",
    answerOptions: [
        { answerText: "Mont Tremblant", isCorrect: false },
        { answerText: "Mount Logan", isCorrect: true },
        { answerText: "Blue Mountain", isCorrect: false },
        { answerText: "Whistler Mountain", isCorrect: false },
    ],
},
{
    questionText: "What is Canada's largest island?",
    answerOptions: [
        { answerText: "Prince Edward Island", isCorrect: false },
        { answerText: "Baffin Island", isCorrect: true },
        { answerText: "Newfoundland", isCorrect: false },
        { answerText: "Vancouver Island", isCorrect: false },
    ],
},
{
    questionText: "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
    answerOptions: [
        { answerText: "Grand Banks", isCorrect: true },
        { answerText: "Hudson Bay", isCorrect: false },
        { answerText: "Great Barrier Reef", isCorrect: false },
        { answerText: "Mariana Trench", isCorrect: false },
    ],
},
{
    questionText: "When does Finland celebrate their independence day?",
    answerOptions: [
        { answerText: "January 2nd", isCorrect: false },
        { answerText: "February 8th", isCorrect: false },
        { answerText: "November 12th", isCorrect: false },
        { answerText: "December 6th", isCorrect: true },
    ],
},
{
    questionText: "What is the second-largest city in Lithuania?",
    answerOptions: [
        { answerText: "Paneveys", isCorrect: false },
        { answerText: "Klaipda", isCorrect: false },
        { answerText: "Vilnius", isCorrect: false },
        { answerText: "Kaunas", isCorrect: true },
    ],
},
{
    questionText: "What is the land connecting North America and South America?",
    answerOptions: [
        { answerText: "Isthmus of Panama", isCorrect: true },
        { answerText: "Urals", isCorrect: false },
        { answerText: "Australasia", isCorrect: false },
        { answerText: "Isthmus of Suez", isCorrect: false },
    ],
},
{
    questionText: "Which of these cities has a 4 deg East longitude. ",
    answerOptions: [
        { answerText: "Toronto", isCorrect: false },
        { answerText: "Amsterdam", isCorrect: true },
        { answerText: "Hong Kong", isCorrect: false },
        { answerText: "Rio de Janero", isCorrect: false },
    ],
},
{
    questionText: "The Andaman and Nicobar Islands in South East Asia are controlled by which country?",
    answerOptions: [
        { answerText: "Indonesia", isCorrect: false },
        { answerText: "India", isCorrect: true },
        { answerText: "Vietnam", isCorrect: false },
        { answerText: "Thailand", isCorrect: false },
    ],
},
{
    questionText: "What is the capital city of Bermuda?",
    answerOptions: [
        { answerText: "Havana", isCorrect: false },
        { answerText: "Hamilton", isCorrect: true },
        { answerText: "Santo Dominigo", isCorrect: false },
        { answerText: "San Juan", isCorrect: false },
    ],
},
{
    questionText: "How many stations does the Central Line have on the London Underground?",
    answerOptions: [
        { answerText: "51", isCorrect: false },
        { answerText: "47", isCorrect: false },
        { answerText: "49", isCorrect: true },
        { answerText: "43", isCorrect: false },
    ],
},
{
    questionText: "What is the capital of Mauritius?",
    answerOptions: [
        { answerText: "Port Vila", isCorrect: false },
        { answerText: "Port-au-Prince", isCorrect: false },
        { answerText: "Port Moresby", isCorrect: false },
        { answerText: "Port Louis", isCorrect: true },
    ],
},
{
    questionText: "In which country is Tallinn located?",
    answerOptions: [
        { answerText: "Sweden", isCorrect: false },
        { answerText: "Finland", isCorrect: false },
        { answerText: "Estonia", isCorrect: true },
        { answerText: "Poland", isCorrect: false },
    ],
},
{
    questionText: "What is the most common climbing route for the second highest mountain in the world, K2?",
    answerOptions: [
        { answerText: "Magic Line", isCorrect: false },
        { answerText: "Abruzzi Spur", isCorrect: true },
        { answerText: "Cesen Route", isCorrect: false },
        { answerText: "Polish Line", isCorrect: false },
    ],
},
{
    questionText: "Into which basin does the Jordan River flow into?",
    answerOptions: [
        { answerText: "Dead Sea", isCorrect: true },
        { answerText: "Salton Sea", isCorrect: false },
        { answerText: "Aral Sea", isCorrect: false },
        { answerText: "Caspian Sea", isCorrect: false },
    ],
},
{
    questionText: "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
    answerOptions: [
        { answerText: "Sickle", isCorrect: false },
        { answerText: "Crown", isCorrect: true },
        { answerText: "Tree", isCorrect: false },
        { answerText: "Bird", isCorrect: false },
    ],
},
{
    questionText: "The Maluku islands (informally known as the Spice Islands) belong to which country?",
    answerOptions: [
        { answerText: "Chile", isCorrect: false },
        { answerText: "New Zealand", isCorrect: false },
        { answerText: "Fiji", isCorrect: false },
        { answerText: "Indonesia", isCorrect: true },
    ],
},
{
    questionText: "What national museum will you find in Cooperstown, New York?",
    answerOptions: [
        { answerText: "Metropolitan Museum of Art", isCorrect: false },
        { answerText: "Museum of Modern Art", isCorrect: false },
        { answerText: "National Toy Hall of Fame", isCorrect: false },
        { answerText: "National Baseball Hall of Fame", isCorrect: true },
    ],
},
{
    questionText: "Which of these cities is NOT in England?",
    answerOptions: [
        { answerText: "Southampton", isCorrect: false },
        { answerText: "Manchester", isCorrect: false },
        { answerText: "Oxford", isCorrect: false },
        { answerText: "Edinburgh", isCorrect: true },
    ],
},
{
    questionText: "Which country is the Taedong River in?",
    answerOptions: [
        { answerText: "South Korea", isCorrect: false },
        { answerText: "Japan", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "North Korea", isCorrect: true },
    ],
},
{
    questionText: "What is the capital of Wisconsin, USA?",
    answerOptions: [
        { answerText: "Wisconsin Dells", isCorrect: false },
        { answerText: "Madison", isCorrect: true },
        { answerText: "Green Bay", isCorrect: false },
        { answerText: "Milwaukee", isCorrect: false },
    ],
},
{
    questionText: "Which of these is NOT a real tectonic plate?",
    answerOptions: [
        { answerText: "Nazca Plate", isCorrect: false },
        { answerText: "Eurasian Plate", isCorrect: false },
        { answerText: "North American Plate", isCorrect: false },
        { answerText: "Atlantic Plate", isCorrect: true },
    ],
},
{
    questionText: "Bir Tawil, an uninhabited track of land claimed by no country, is located along the border of which two countries?",
    answerOptions: [
        { answerText: "Egypt and Sudan", isCorrect: true },
        { answerText: "Iraq and Saudi Arabia", isCorrect: false },
        { answerText: "Israel and Jordan", isCorrect: false },
        { answerText: "Chad and Libya", isCorrect: false },
    ],
},
{
    questionText: "Which is not a country in Africa?",
    answerOptions: [
        { answerText: "Liberia", isCorrect: false },
        { answerText: "Guyana", isCorrect: true },
        { answerText: "Somalia", isCorrect: false },
        { answerText: "Senegal", isCorrect: false },
    ],
},
	]
	
	const questions5 = [
	{
    questionText: "Which color stands for cowardice in the United States?",
    answerOptions: [
        { answerText: "orange", isCorrect: false },
        { answerText: "green", isCorrect: false },
        { answerText: "red", isCorrect: false },
        { answerText: "yellow", isCorrect: true },
    ],
},
{
    questionText: "Which color is associated with trustworthiness in the United States and Canada?",
    answerOptions: [
        { answerText: "white", isCorrect: false },
        { answerText: "gold", isCorrect: false },
        { answerText: "red", isCorrect: false },
        { answerText: "blue", isCorrect: true },
    ],
},
{
    questionText: "Which color can mean wisdom in the United States and Canada?",
    answerOptions: [
        { answerText: "white", isCorrect: false },
        { answerText: "gold", isCorrect: false },
        { answerText: "gray", isCorrect: true },
        { answerText: "black", isCorrect: false },
    ],
},
{
    questionText: "Which color is symbolic of the sun in Latin Amercia?",
    answerOptions: [
        { answerText: "red", isCorrect: false },
        { answerText: "blue", isCorrect: false },
        { answerText: "yellow", isCorrect: true },
        { answerText: "orange", isCorrect: false },
    ],
},
{
    questionText: "Which region associates the color black with the opposite of death and mourning?",
    answerOptions: [
        { answerText: "North America", isCorrect: false },
        { answerText: "Latin America", isCorrect: false },
        { answerText: "Africa", isCorrect: false },
        { answerText: "Asia Pacific", isCorrect: true },
    ],
},
{
    questionText: "Which colors are NOT associated with animals in the Caribbean?",
    answerOptions: [
        { answerText: "green", isCorrect: true },
        { answerText: "orange", isCorrect: false },
        { answerText: "blue", isCorrect: false },
        { answerText: "red", isCorrect: false },
    ],
},
{
    questionText: "Which color is related to craftmanship in Argentina?",
    answerOptions: [
        { answerText: "brown", isCorrect: false },
        { answerText: "yellow", isCorrect: false },
        { answerText: "white", isCorrect: false },
        { answerText: "red", isCorrect: true },
    ],
},
{
    questionText: "Both black and _____ represent mourning in Brazil.",
    answerOptions: [
        { answerText: "purple", isCorrect: true },
        { answerText: "red", isCorrect: false },
        { answerText: "brown", isCorrect: false },
        { answerText: "orange", isCorrect: false },
    ],
},
{
    questionText: "What color is for nobility in Western Europe?",
    answerOptions: [
        { answerText: "gold", isCorrect: false },
        { answerText: "purple", isCorrect: true },
        { answerText: "yellow", isCorrect: false },
        { answerText: "pink", isCorrect: false },
    ],
},
{
    questionText: "What color stands for Catholicism in the United Kingdom?",
    answerOptions: [
        { answerText: "green", isCorrect: true },
        { answerText: "purple", isCorrect: false },
        { answerText: "blue", isCorrect: false },
        { answerText: "red", isCorrect: false },
    ],
},
{
    questionText: "What color stands for honesty in the United Kingdom?",
    answerOptions: [
        { answerText: "gold", isCorrect: false },
        { answerText: "green", isCorrect: false },
        { answerText: "red", isCorrect: false },
        { answerText: "brown", isCorrect: true },
    ],
},
{
    questionText: "What color is symbolic for joy in France?",
    answerOptions: [
        { answerText: "blue", isCorrect: false },
        { answerText: "orange", isCorrect: false },
        { answerText: "purple", isCorrect: false },
        { answerText: "yellow", isCorrect: true },
    ],
},
{
    questionText: "Which color stands for sophistication in Germany?",
    answerOptions: [
        { answerText: "black", isCorrect: false },
        { answerText: "purple", isCorrect: false },
        { answerText: "blue", isCorrect: false },
        { answerText: "silver", isCorrect: true },
    ],
},
{
    questionText: "Which color is connected with the earth in France?",
    answerOptions: [
        { answerText: "green", isCorrect: false },
        { answerText: "orange", isCorrect: true },
        { answerText: "blue", isCorrect: false },
        { answerText: "gold", isCorrect: false },
    ],
},
{
    questionText: "Which is a color for strength in the Scandinavia region?",
    answerOptions: [
        { answerText: "green", isCorrect: false },
        { answerText: "gold", isCorrect: false },
        { answerText: "silver", isCorrect: false },
        { answerText: "red", isCorrect: true },
    ],
},
{
    questionText: "Treason in Spain and Portugal is ____.",
    answerOptions: [
        { answerText: "red", isCorrect: false },
        { answerText: "yellow", isCorrect: true },
        { answerText: "black", isCorrect: false },
        { answerText: "brown", isCorrect: false },
    ],
},
{
    questionText: "Mourning colors in Italy are black and ____.",
    answerOptions: [
        { answerText: "brown", isCorrect: false },
        { answerText: "white", isCorrect: false },
        { answerText: "blue", isCorrect: true },
        { answerText: "purple", isCorrect: false },
    ],
},
{
    questionText: "What is the color for divinity and wisdom in Greece?",
    answerOptions: [
        { answerText: "red", isCorrect: false },
        { answerText: "white", isCorrect: false },
        { answerText: "green", isCorrect: true },
        { answerText: "purple", isCorrect: false },
    ],
},
{
    questionText: "What is the color for both revolution and beauty in the Commonwealth of Independent States?",
    answerOptions: [
        { answerText: "purple", isCorrect: false },
        { answerText: "red", isCorrect: true },
        { answerText: "gold", isCorrect: false },
        { answerText: "white", isCorrect: false },
    ],
},
{
    questionText: "Which is NOT a color for nature in Turkey?",
    answerOptions: [
        { answerText: "red", isCorrect: false },
        { answerText: "blue", isCorrect: true },
        { answerText: "purple", isCorrect: false },
        { answerText: "white", isCorrect: false },
    ],
},
{
    questionText: "Red stands for _____ in the Balkans and Slavic States.",
    answerOptions: [
        { answerText: "art", isCorrect: false },
        { answerText: "medicine", isCorrect: true },
        { answerText: "fairytale", isCorrect: false },
        { answerText: "intelligence", isCorrect: false },
    ],
},
{
    questionText: "What color represents the sea on Israel?",
    answerOptions: [
        { answerText: "blue", isCorrect: false },
        { answerText: "green", isCorrect: false },
        { answerText: "purple", isCorrect: true },
        { answerText: "brown", isCorrect: false },
    ],
},
{
    questionText: "Truth and justice in Egypt are what color?",
    answerOptions: [
        { answerText: "yellow", isCorrect: false },
        { answerText: "blue", isCorrect: true },
        { answerText: "black", isCorrect: false },
        { answerText: "white", isCorrect: false },
    ],
},
{
    questionText: "Instead of black, what color stands for death in Africa?",
    answerOptions: [
        { answerText: "black", isCorrect: false },
        { answerText: "red", isCorrect: true },
        { answerText: "white", isCorrect: false },
        { answerText: "brown", isCorrect: false },
    ],
},
{
    questionText: "What color stands for death in the Asia Pacific region?",
    answerOptions: [
        { answerText: "black", isCorrect: false },
        { answerText: "red", isCorrect: true },
        { answerText: "white", isCorrect: false },
        { answerText: "brown", isCorrect: false },
    ],
},
{
    questionText: "What color represents good luck in the Asia Pacific region?",
    answerOptions: [
        { answerText: "yellow", isCorrect: false },
        { answerText: "gold", isCorrect: false },
        { answerText: "white", isCorrect: false },
        { answerText: "red", isCorrect: true },
    ],
},
{
    questionText: "What is the color for royalty in Singapore and Malaysia?",
    answerOptions: [
        { answerText: "purple", isCorrect: true },
        { answerText: "yellow", isCorrect: false },
        { answerText: "gold", isCorrect: false },
        { answerText: "orange", isCorrect: false },
    ],
},
{
    questionText: "What color means anger and celebration in Indonesia?",
    answerOptions: [
        { answerText: "black", isCorrect: false },
        { answerText: "purple", isCorrect: false },
        { answerText: "red", isCorrect: true },
        { answerText: "gold", isCorrect: false },
    ],
},
{
    questionText: "Masculinity in Japan is represented by ____.",
    answerOptions: [
        { answerText: "red", isCorrect: false },
        { answerText: "black", isCorrect: false },
        { answerText: "blue", isCorrect: false },
        { answerText: "silver", isCorrect: true },
    ],
},
{
    questionText: "Death in India is symbolized by what color?",
    answerOptions: [
        { answerText: "black", isCorrect: false },
        { answerText: "brown", isCorrect: false },
        { answerText: "silver", isCorrect: false },
        { answerText: "orange", isCorrect: true },
    ],
},
{
    questionText: "What color symbolizes the earth in Australia, New Zealand, and the Philippines?",
    answerOptions: [
        { answerText: "green", isCorrect: false },
        { answerText: "tan", isCorrect: true },
        { answerText: "blue", isCorrect: false },
        { answerText: "brown", isCorrect: false },
    ],
},
{
    questionText: "____ is for ocean and ____ is for water in Australia, New Zealand, and the Philippines?",
    answerOptions: [
        { answerText: "white, blue", isCorrect: true },
        { answerText: "blue, orange", isCorrect: false },
        { answerText: "green, blue", isCorrect: false },
        { answerText: "orange, green", isCorrect: false },
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
	const numQuestionsAsked = 10;
	var wrongAnswers = wrongAnswerSet;
	const {currentUser} = useAuth();
	
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

	const updateUserScore = async () => {

        axios.patch('/api/user/' + currentUser.email, {
            highscore: score * 10
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("Error: " + error)
            });

    };
	
	const pickQuizClick = (name) => {
		if(name == "generalE")
		{
			setQuestionSet(shuffleArray(questions1));
		}
		else if(name == "generalM")
		{
			setQuestionSet(shuffleArray(questions2));
		}
		else if(name == "generalH")
		{
			setQuestionSet(shuffleArray(questions4));
		}
		else if(name == "colors")
		{
			setQuestionSet(shuffleArray(questions5));
		}
		else if(name == "hello")
		{
			setQuestionSet(shuffleArray(questions3));
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
	
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array
	}

	
	return (
		<div className="Quiz">
		<center>
			
			{showMenu &&
				<div>
					
					<div class="card" onClick={() => pickQuizClick("generalE")}>
						<img src={image1} alt="Quiz Image"/>
						<div class="container">
							<h4><b>General Knowledge [Easy Difficulty]</b></h4> 
							<p>Test yourself on random facts about countries</p> 
						</div>
					</div>
					
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
							<p>Test yourself on colors association and sybolism in different cultures</p> 
						</div>
					</div>
					
					<div class="card">
						<a class="redirect" href="https://flagpedia.net/quiz">
						<img src={image3} alt="Quiz Image"/>
						<div class="container">
							<h4><b>Flags of the World</b></h4> 
							<p>Test yourself on identifying the country flags from around the world</p> 
						</div>
						</a>
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
			
			{showScore && updateUserScore() &&
				<div>
					<p>You scored {score * 10} out of {numQuestionsAsked * 10}</p>
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
