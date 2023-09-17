import React from 'react';
import '../css/footer.css';

type FooterProps = {
  text: string;
  copyRight: string;
  githubLink: string;
};
export const Footer: React.FC<FooterProps> = ({
  text,
  copyRight,
  githubLink,
}: FooterProps) => {
  return (
    <footer>
      <p>
        {text}
        <a href={githubLink} target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </p>
      <p>
        <i className="fas fa-copyright"></i>
        {copyRight}
      </p>
    </footer>
  );
};
