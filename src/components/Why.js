import React from "react";

export default function Why() {
  return (
    <section id="why">
      <div>
        <h2>Why I Want To Work With You</h2>
        <div className="why-desc">
          <article className="why-reasons" >reason 1</article>
          <article className="why-reasons" >reason 2</article>
          <article className="why-reasons" > reason 3</article>
        </div>
      </div>

      <div>
        <h2>Why You Should Hire Me</h2>
        <div className="why-desc">
        <article className="why-reasons" >skill 1</article>
          <article className="why-reasons" >skill 2</article>
          <article className="why-reasons" >skill 3</article>
        </div>
      </div>
    </section>
  );
}
