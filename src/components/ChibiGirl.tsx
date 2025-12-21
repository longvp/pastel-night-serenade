import chibiGirl from "@/assets/chibi-girl.png";

const ChibiGirl = () => {
  return (
    <div className="relative animate-float">
      <img
        src={chibiGirl}
        alt="Chibi girl"
        className="w-32 md:w-40 lg:w-48 drop-shadow-[0_0_15px_rgba(255,182,193,0.6)]"
      />
    </div>
  );
};

export default ChibiGirl;
