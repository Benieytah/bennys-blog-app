import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/benny.JPG"
          alt="An Image showing Benny"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Benny</h1>
      <p>I blog about web development</p>
    </section>
  );
}
