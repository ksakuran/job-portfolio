import React from "react";
import {FiLinkedin, FiGithub, FiMail, FiPhone} from 'react-icons/fi';
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <p><a href='https://www.linkedin.com/in/katherine-nishimura-89824b175/' target='_blank' rel="noreferrer noopener"><FiLinkedin /></a> LinkedIn: Katherine Nishimura</p>
        <p><a href='https://github.com/ksakuran' target='_blank' rel="noreferrer noopener"><FiGithub /></a> GitHub: ksakuran</p>
        <p><a href='https://mail.google.com/mail/?view=cm&source=mailto&to=katherine.nishimura@live.ca' target='_blank' rel="noreferrer noopener"><FiMail /></a> Email: katherine.nishimura@live.ca</p>
        <p><FiPhone></FiPhone> Mobile Phone: 1-204-740-0205</p>
    </section>
  );
}
