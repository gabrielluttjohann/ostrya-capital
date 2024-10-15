import SplitScreen from "@/layouts/SplitScreen/SplitScreen";

const Footer = () => {
  return (
    <div className="bg-green py-5">
      <SplitScreen colSizes={[4, 4, 4]} showColumns={[true, true, true]}>
        <div className="bg-white">col1</div>
        <div className="bg-white">col2</div>
        <div className="bg-white">col3</div>
      </SplitScreen>
    </div>
  );
};

export default Footer;
