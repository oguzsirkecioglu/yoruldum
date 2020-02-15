import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
            <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="boss">Oğuz Sirkecioğlu</h1>
<h2 className="intro"> Industrial Engineering Student and Developer </h2>
      <div className="hero-social-links">

      
        <Link href="https://www.twitter.com/oloading1">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://tr.linkedin.com/in/oğuz-sirkecioğlu-37a200198">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/oguzsirkecioglu">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>



    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 1 auto;
        padding-top: 120px;
      }
      
      .intro{
        font-family: arial;
        font-size:15px;
        color: grey;
        padding-top:12px;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
        
      }

      .social-link {
        margin-right: 8px;

      }
      
      .hero-social-links{
        padding-top:34px;
      }

      .boss {
        font-size: 48px;
        font-family: "Times New Roman", Times, serif;
        padding-top:1px;

        }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);
Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://oguzsirkecioglu.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
