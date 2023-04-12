import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TbPlant, TbSparkles } from "react-icons/tb";

export default function Why() {
  return (
    <section id="why">
      <div className="why-div">
        <h2>Why I Want To Work For This Company</h2>
        <h6>some things that I love about this company...</h6>
        <div className="why-desc">
          <article className="why-reasons">reason 1</article>
          <article className="why-reasons">reason 2</article>
          <article className="why-reasons"> reason 3</article>
        </div>
      </div>

      <div className="why-div">
        <h2>Why You Should Hire Me</h2>
        <div className="why-desc">
          <article className="why-reasons">
            <h5>
              I am passionate <TbSparkles></TbSparkles>
            </h5>
            <p>
              Getting to utilize my creative side and contribute to something greater than
              myself fuels me with passion. It motivates me to produce high quality work, and
              deliver seamless experiences through the art of web development.
            </p>
          </article>
          <article className="why-reasons">
            <h5>
              I am a lifelong learner <TbPlant></TbPlant>
            </h5>
            <p>
              I am committed to my personal growth. It is important to me to
              always keep learning new things both in my personal and
              professional lives. I'm a fast learner and am always excited to
              expand my skillset.
            </p>
          </article>
          <article className="why-reasons">
            <h5>
              I am a great teammate <FaRegHandshake></FaRegHandshake>
            </h5>
            <p>
              I have always worked with people. My previous management
              experience has allowed me to develop a strong skillset in
              communication, and has helped me better understand people. I love
              to encourage my teammates, as well as learn from them.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
