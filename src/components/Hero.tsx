import Image from "next/image";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.profileImage}>
        <Image
          src="/images/profile.jpg?v=2"
          alt="Constant Nortey"
          width={300}
          height={300}
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Hero; 