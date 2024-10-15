interface ParagraphProps {
  text: string;
  styles: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ styles, text }) => (
  <p className={styles}>{text}</p>
);

export default Paragraph;
