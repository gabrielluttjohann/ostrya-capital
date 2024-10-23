import BG from "@/assets/img/bg/bg-02.png";

function Section() {
  return (
    <div
      className="mb-60"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        objectFit: "fill",
        backgroundPosition: "center",
        height: "60vh",
        width: "100%",
      }}
    ></div>
  );
}

export default Section;
