interface CTAButtonProps {
  text: string;
  href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href }) => (
  <div className="wow fadeInRight animated">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary btn p-4 rounded-pill smoth-scroll"
    >
      {text}
    </a>
  </div>
);

export default CTAButton;
