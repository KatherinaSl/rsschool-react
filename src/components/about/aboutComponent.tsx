import './aboutComponent.css';
import { Link } from 'react-router';

export default function AboutComponent() {
  return (
    <div  data-testid="about" className="about">
      <h3>
        Hi! My name is Kate and I&apos;m an author of this app. This is my&nbsp;
        <Link to="https://github.com/KatherinaSl">GithHub Profile</Link>.
      </h3>
      <p>
        This application is created to search for Astronomical Objects within
        the&nbsp;
        <Link to="https://rs.school/courses/reactjs">
          RS School React course programme.
        </Link>
      </p>
    </div>
  );
}
