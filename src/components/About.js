import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { GrLocationPin } from "react-icons/gr";

export default function About() {
  const [winnipeg, setWinnipeg] = useState(true);
  const [toronto, setToronto] = useState(false);
  const [vancouver, setVancouver] = useState(false);

  const winnipegClick = () => {
    setToronto(false);
    setVancouver(false);
    setWinnipeg(true);
  };

  const torontoClick = () => {
    setToronto(true);
    setVancouver(false);
    setWinnipeg(false);
  };

  const vancouverClick = () => {
    setToronto(false);
    setVancouver(true);
    setWinnipeg(false);
  };

  return (
    <section id="about">
      <div className="about-headshot">
        <h1>About Me</h1>
        <img id="headshot" src="katheadshot.jpg"></img>
      </div>
      <div>
        <article className="about-me">
          <div id="kat-desc">
            <h4>I am a full stack web developer with a passion for design.</h4>
            <p>
              I will admit that at first I am not the most extroverted person but
              I love meeting new people and inviting in new perspectives and
              ideas. As much as I love coding and problem solving, I love
              designing websites and choosing theme colors and fonts. I believe
              that design is as important as the functionalities of a website.
              Overcoming problems and finding solutions with my teammates is a
              something that deeply motivates me. When I'm not coding, I'm most
              likely hiking, birdwatching, or trying new restaurants! I also
              love using my creativity through{" "}
              <a href="https://www.sakuramoonstudio.com/">jewellery making</a>.
            </p>
          </div>
        </article>
        <div id="story-desc">
          <h4>My Story</h4>
          <article>
            <span>
              <button classNames={winnipeg ? "city-selected" : ""} onClick={() => {winnipegClick()}}>
                Winnipeg <FiArrowRight></FiArrowRight>
              </button>
              <button classNames={toronto ? "city-selected" : ""} onClick={() => {torontoClick()}}>
                Toronto <FiArrowRight></FiArrowRight>
              </button>
              <button classNames={vancouver ? "city-selected" : ""} onClick={() => {vancouverClick()}}>
                Vancouver <GrLocationPin></GrLocationPin>
              </button>
            </span>
            {winnipeg && (
              <p className="story">
                I was born in Winnipeg, but grew up in a small city a few hours
                away. I moved back to Winnipeg in 2015 after recieving a
                promotion for work. I worked in retail management and then
                transitioned into restaurant management. I fell in love with the
                city and it's charms, and made some lifelong friends. After a few years I
                realized I wanted to have new experiences and explore my creative nature.
              </p>
            )}
            {toronto && (
              <p className="story">
                I wanted to pursue my love for painting and drawing so in 2019 decided to move to Toronto to
                attend OCAD University. When the pandemic hit the education
                I had longed for became an entirely unexpected experience. I
                felt very dissatisifed with the path I was on and I did not want to feel trapped by the "sunken cost fallacy". I started to
                wonder about other ways I could be creative and decided that I
                wanted to pivot into Web Development.
              </p>
            )}
            {vancouver && (
              <p className="story">
                In 2022 once the pandemic had slowed down I moved to Vancouver
                to be closer to nature and closer to my sister. I decided to go
                to Lighthouse Labs to try their bootcamp and see if Web
                Development was for me. In March 2023 I successfully earned a
                diploma in Web Development. I loved every step of the way and
                felt like I finally was on the right path.
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
