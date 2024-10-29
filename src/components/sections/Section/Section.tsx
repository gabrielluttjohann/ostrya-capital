import BG from "@/assets/img/bg/bg-02.png";

function Section() {
  return (
    <div
      className="my-60 bg-light"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        objectFit: "fill",
        backgroundPosition: "center",
        minHeight: "500px",
        width: "100%",
      }}
    ></div>
  );
}

export default Section;
