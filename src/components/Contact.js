import React from 'react';
import {FiLinkedin, FiGithub, FiMail, FiPhone} from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {

  const [fact, setFacts] = useState(false);
  const [ displayFact , setDisplayFact] = useState('');

  const facts = [
    'I absolutely love ice cream, that is why I set the favicon to an ice cream cone.',
    'I love surfing, although I definitely need more practice.',
    'My sister introduced me to bird-watching when I moved to Vancouver. My favorite bird is probably the Stellar\'s Jay.',
    'All my friends call me Kat, and you can too! Even though my name is Kat I am definitely a dog person (but I also love cats).',
    'My favourite hike that I have been on in BC is the Joffre Lakes Trail.',
    'My all time favourite TV show is Mad Men, followed by Succession, and then Friends.',
    'This may be controversial but I believe pineapple belongs on pizza!',
    'My middle name means cherry blossom in Japanese.',
    'A soon to be TV show was inspired by me!'
  ]

  function generateRandomInt() {
    return Math.floor(Math.random() * 9); // generates a random integer between 0 and 8
  }
  
  const factGenerator = () => {
    let x = generateRandomInt()
    return facts[x];
  }

  const factClick = () => {
    setFacts(true)
    setDisplayFact(factGenerator())
  }

  return (
    <section id='contact'>
      <h1>Contact</h1>
      
      <div>
      <p className='contact-info'><a href='https://www.linkedin.com/in/katherine-nishimura-89824b175/' target='_blank' rel='noreferrer noopener'><FiLinkedin /></a> LinkedIn: Katherine Nishimura</p>
        <p className='contact-info'><a href='https://github.com/ksakuran' target='_blank' rel='noreferrer noopener'><FiGithub /></a> GitHub: ksakuran</p>
        <p className='contact-info'><a href='https://mail.google.com/mail/?view=cm&source=mailto&to=katherine.nishimura@live.ca' target='_blank' rel='noreferrer noopener'><FiMail /></a> Email: katherine.nishimura@live.ca</p>
        <p className='contact-info'><FiPhone></FiPhone> Mobile Phone: 1-204-740-0205</p>
        </div>
        <div id='fun-fact'>
          <button id='fact-button' onClick={() => factClick()}>Random Fun Fact</button>
          {fact && <p id='kat-fact'>{displayFact}</p>}
        </div>

        <div>
          <h2 id='refer-header'>References</h2>
        <div id='references'>
          <article className='reference-info'><h4>Kat Connolly</h4><p>Web Developer & Mentor<br></br> Lighthouse Labs</p><a href='https://mail.google.com/mail/?view=cm&source=mailto&to=hi.connkat@gmail.com' target='_blank' rel='noreferrer noopener'>hi.connkat@gmail.com</a></article>
          <article className='reference-info'><h4>Natalia Simachkevitch</h4><p>Owner<br></br> Lady Marmalade Restaurant</p><a href='https://mail.google.com/mail/?view=cm&source=mailto&to=ladymrestaurant@gmail.com' target='_blank' rel='noreferrer noopener'>ladymrestaurant@gmail.com</a></article>
          <article className='reference-info'><h4>Brianna Wilde</h4><p>General Manager<br></br> Joey Restaurant Group</p><a href='https://mail.google.com/mail/?view=cm&source=mailto&to=briannawilde@joeyrestaurants.com' target='_blank' rel='noreferrer noopener'>briannawilde@joeyrestaurants.com</a></article>
        </div>
        </div>
        


    </section>
  );
}
