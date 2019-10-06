import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/layout';

export default () => {

  return (
    <Layout>
      <section>
        <p>My name is Krystal Klumpp and I'm a Senior UI Engineer at SoFi. I primarily work with JavaScript, HTML5, CSS3 & responsive design techniques.</p>
      </section>
      <section>
        <img src="../icon_dev.svg" alt="" />
        <h2>Why I'm an engineer</h2>
        <p>Programming is a field where an overly developed sense of curiosity is a basic requirement just to remain relevant.</p>
      </section>
      <section>
        <div>
          <img src="../icon_preso.svg" alt="" />
          <h2>Presentations</h2>
          <Link to="/presentations">Check them out</Link>
        </div>
      </section>
      <section>
        <h2>About me</h2>
        <p>After graduating with a BA in Japanese Language and Literature from the University of Georgia, I took the next logical step and enlisted in the U.S. Army. While in the Army I worked as a target audience analyst and cultural expert over the course of two deployments to Afghanistan.</p>
        <p>Post-Army I spent two months on a solo bike tour across the U.S. before moving to Harbin, China for 7 months. After Harbin taught me what cold really means, I headed over to Japan where I lived off of ramen and Pocky for 3 years (yes, I know you're likely weeping with jealousy right now). In Tokyo, I attended the Communication Studies program at Temple University in Tokyo, Japan. Though I had intended to become a journalist, I quickly became more interested in how information was being presented than in the information itself.</p>
        <p>Aside from the aspects of multimedia journalism that initially caught my attention, the main draw of programming for me was the need to continuously learn and grow.</p>
      </section>
    </Layout>
  )
};
