
import './App.css';
import React from 'react';
import {FbCard} from "./components/Fb"
import { OnlinerCard } from './components/Onliner'
import { JobCard } from './components/RabotaBy'
import {HdRezkaCard} from './components/HdRezka'

const fbData = [
  {
    avatarUrl: 'https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg',
    userName: 'Jason Kincaid',
    education: 'UCLA',
    post: 'I have something insightful to say, as usual.',
    time: '2 seconds ago',
  }
]

const onlinerData = [
  {
    chapter: 'СПЕЦПРОЕКТ',
    comments: '225',
    title: 'Учим английский по текстам Metallica',
  }
] 

const RabotaByData = [
  {
   job:'Junior React.js Engineer (Internship/React.js Lab)',
   company: 'ООО АйтиРекс Групп ✓',
   city: 'Минск',
   jobDescription: 'Медицинское обслуживание. Онлайн-ивенты. Реферальная программа.',
   companyDescription: '10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки нужны для старта: Базовые знания HTML...',
   date: '7 сентября',
  }
]

const HdRezkaData = [

  {
    moviePosterUrl:"https://static.hdrezka.ac/i/2021/1/6/h1d92ecbb3a22iu95y88s.png", 
    movieTitle: 'Байкал. Удивительные приключения Юмы', 
    movieYear:'2021,', 
    movieCountry:'Россия,', 
    movieCatagory:'Документальные'
  },
  {
    moviePosterUrl:"https://static.hdrezka.ac/i/2021/5/27/fc07acc48400afv72y29m.jpg", 
    movieTitle: 'Друзья: Воссоединение', 
    movieYear:'2021,', 
    movieCountry:'США,', 
    movieCatagory:'Комедия'
  },
  {
    moviePosterUrl:"https://static.hdrezka.ac/i/2021/6/15/tc402ec57372bdz58x65z.jpg", 
    movieTitle: 'Бо Бёрнэм: Дома', 
    movieYear:'2021,', 
    movieCountry:'США,', 
    movieCatagory:'Комедия'
  },
  {
    moviePosterUrl:"https://static.hdrezka.ac/i/2021/8/24/nc3abccf91dc4wa21o33r.jpg", 
    movieTitle: 'Карман России', 
    movieYear:'2021,', 
    movieCountry:'Россия,', 
    movieCatagory:'Документальные'
  },

]

function App() {
  return (
    <div className="App">
      <h1>Task 1. Facebook</h1>
      {fbData.map(item => {
        const { avatarUrl, userName, education, post, time } = item

        return (
          <FbCard 
          avatarUrl = {avatarUrl}
          userName = {userName}
          education = {education}
          post = {post}
          time = {time}
        />
        )
      })}   

<h1>Task 2. Onliner</h1>
      {onlinerData.map(item => {
        const { chapter, comments, title} = item
        return (
          <OnlinerCard 
            chapter = {chapter}
            comments = {comments}
            title = {title}
          />
        )
      })}

 <h1>Task 3. Rabota.by</h1>
 {RabotaByData.map(item => {
        const { job, company, city, jobDescription, companyDescription, date } = item

        return (
          <JobCard 
          job = {job}
          company = {company}
          city = {city}
          jobDescription = {jobDescription}
          companyDescription = {companyDescription}
          date = {date}
        />
        )        
      })}

<h1>Task 4. HdRezka</h1>
<div className="rezkaWrapper">
 {HdRezkaData.map(item => {
        const { moviePosterUrl, movieTitle, movieYear, movieCountry, movieCatagory } = item

        return (
          <HdRezkaCard
          moviePosterUrl={moviePosterUrl} 
          movieTitle={movieTitle} 
          movieYear={movieYear} 
          movieCountry={movieCountry}
          movieCatagory={movieCatagory} 
        />
        )        
      })} 
      </div>
          </div>
  );
};

export default App;

