import Link from "next/link";
import classes from './page.module.css';
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste and shared food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>Join the Community</Link>
            <Link href='/meals'>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it work</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime ipsam iste asperiores illum atque aliquam quia reiciendis libero laborum!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime ipsam iste asperiores illum atque aliquam quia reiciendis libero laborum!</p>
        </section>
        <section className={classes.section}>
          <h2>How it work</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime ipsam iste asperiores illum atque aliquam quia reiciendis libero laborum!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid maxime ipsam iste asperiores illum atque aliquam quia reiciendis libero laborum!</p>
        </section>
      </main>
    </>
  );
}
