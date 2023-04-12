import React from "react";

export default function About() {
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
              I can admit that at first I am not the most extroverted person but
              I love meeting new people and inviting in new perspectives and
              ideas. As much as I love coding and problem solving, I love
              designing websites and choosing theme colors and fonts. I believe
              that design is as important as the functionalities of a website.
              Overcoming problems and finding solutions with my teammates is a
              feeling that keeps me motivated. When I'm not coding, I'm most
              likely hiking, birdwatching, or trying new restaurants! I also
              love using my creativity through{" "}
              <a href="https://www.sakuramoonstudio.com/">jewellery making</a>.
            </p>
          </div>
        </article>
        <div id="story-desc">
          <h4>My Story</h4>
          <article>
            <h4>Winnipeg</h4>
            <p className="story">
              I grew up in a small city, a few hours from Winnipeg. I moved to
              Winnipeg after recieving a promotion for work. I worked in retail
              management and then transitioned restaurant management. I fell in
              love with the city and it's charms and made some lifelong friends
              but soon I realized I wanted to have new experiences.
            </p>
          </article>
          <article>
            <h4>Toronto</h4>
            <p className="story">
              I wanted to pursue my love for painting and drawing and my desire
              to be creative. In 2019 decided to move to Toronto to attend OCAD
              University. Then the pandemic hit, and the education I longed for
              had become an entirely unexpected experience. I felt very
              dissatisifed with the path I was on. I started to wonder about
              other ways I could be creative and decided that I wanted to try
              Web Development.
            </p>
          </article>
          <article>
            <h4>Vancouver</h4>
            <p className="story">
              Once the pandemic had slowed down I decided to move to Vancouver
              to be closer to nature and to my sister. In 2022 I decided to go
              to Lighthouse Labs to try the bootcamp and see if Web Development
              was for me. By March 2023 I successfully earned a diploma in Web
              Development. I loved every step of the way and felt like I finally
              was on the right path.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
