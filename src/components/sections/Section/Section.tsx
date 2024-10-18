import BG from "@/assets/img/bg/bg.png";

function Section() {
  return (
    <div
      className="w-100 mb-120"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover", 
        height: "60vh",
        width: "100%",
      }}
    ></div>
  );
}

export default Section;
