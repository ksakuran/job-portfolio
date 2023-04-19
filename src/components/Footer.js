import React from 'react';
import {FiLinkedin, FiGithub, FiMail, FiArrowUp} from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <div class='footer'>
      <div id='contact-footer'>
        <a href='https://www.linkedin.com/in/katherine-nishimura-89824b175/' target='_blank' rel='noreferrer noopener'><FiLinkedin /></a>
        <a href='https://github.com/ksakuran' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
        <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=katherine.nishimura@live.ca' target='_blank' rel='noreferrer noopener'><FiMail /></a>
      </div>
      <div id='back-top'>
        <Link href={'#header'}><FiArrowUp></FiArrowUp></Link>
      </div>
    </div>
  )
}