import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Profile />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
