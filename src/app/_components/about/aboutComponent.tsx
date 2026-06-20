import Link from 'next/link';
import styles from './aboutComponent.module.css';

export default function AboutComponent() {
  return (
    <div className={styles.about}>
      <h3>
        Hi! My name is Kate and I&apos;m an author of this app. This is my&nbsp;
        <Link href="https://github.com/KatherinaSl">GithHub Profile</Link>.
      </h3>
      <p>
        This application is created to search for Astronomical Objects within
        the&nbsp;
        <Link href="https://rs.school/courses/reactjs">
          RS School React course programme.
        </Link>
      </p>
    </div>
  );
}
