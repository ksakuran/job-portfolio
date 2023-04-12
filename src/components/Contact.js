import React from "react";
import {FiLinkedin, FiGithub, FiMail, FiPhone} from 'react-icons/fi';
import Link from "next/link";
import { useState } from 'react';

export default function Contact() {

  const [fact, setFacts] = useState(false);
  const [ displayFact , setDisplayFact] = useState("");

  const facts = [
    "I absolutely love ice cream, that is why I set the favicon to an ice cream cone.",
    "I love surfing, although I definitely need more practice.",
    "My sister introduced me to bird-watching when I moved to Vancouver. My favorite bird is probably the Stellar's Jay.",
    "All my friends call me Kat, and you can too! Even though my name is Kat I am definitely a dog person (but I still love cats).",
    "My favourite hike that I have been on in BC is the Joffre Lakes Trail.",
    "My all time favourite TV show is Mad Men, followed by Friends as a close second.",
    "I believe pineapple belongs on pizza!",
    "My middle name means cherry blossom in Japanese."
  ]

  function generateRandomInt() {
    return Math.floor(Math.random() * 8); // generates a random integer between 0 and 6
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
    <section id="contact">
      <h1>Contact</h1>
      
      <p className="contact-info"><a href='https://www.linkedin.com/in/katherine-nishimura-89824b175/' target='_blank' rel="noreferrer noopener"><FiLinkedin /></a> LinkedIn: Katherine Nishimura</p>
        <p className="contact-info"><a href='https://github.com/ksakuran' target='_blank' rel="noreferrer noopener"><FiGithub /></a> GitHub: ksakuran</p>
        <p className="contact-info"><a href='https://mail.google.com/mail/?view=cm&source=mailto&to=katherine.nishimura@live.ca' target='_blank' rel="noreferrer noopener"><FiMail /></a> Email: katherine.nishimura@live.ca</p>
        <p className="contact-info"><FiPhone></FiPhone> Mobile Phone: 1-204-740-0205</p>

        <div id="fun-fact">
          <button id="fact-button" onClick={() => factClick()}>Fun Facts</button>
          {fact && <p id="kat-fact">{displayFact}</p>}
        </div>


    </section>
  );
}
