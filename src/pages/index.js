import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import About from "@/components/About";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kat Nishimura Portfolio</title>
        <meta name="description" content="Katherine Nishimura's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,400;0,500;1,200&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,500;1,100;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Why></Why>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
