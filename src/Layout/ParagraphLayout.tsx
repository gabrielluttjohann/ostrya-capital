interface ParagraphProps {
  text: string;
  styles: string;
}
const ParagraphLayout: React.FC<ParagraphProps> = ({ styles, text }) => (
  <p className={styles}>{text}</p>
);

export default ParagraphLayout;
