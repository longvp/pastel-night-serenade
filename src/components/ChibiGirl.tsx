import chibiBody from "@/assets/chibi-body.png";
import facePhoto from "@/assets/face-photo.jpg";

const ChibiGirl = () => {
  return (
    <div className="relative animate-float flex flex-col items-center">
      {/* User's photo as head */}
      <div className="relative z-10">
        <img
          src={facePhoto}
          alt="Face"
          className="w-24 md:w-28 lg:w-32 rounded-full object-cover aspect-square border-4 border-pink-200 shadow-lg"
          style={{
            marginBottom: "-20px",
          }}
        />
      </div>
      
      {/* Chibi body (cropped to hide the head) */}
      <div className="relative overflow-hidden" style={{ marginTop: "-30px" }}>
        <img
          src={chibiBody}
          alt="Chibi body"
          className="w-20 md:w-24 lg:w-28 drop-shadow-[0_0_15px_rgba(255,182,193,0.6)]"
          style={{
            clipPath: "inset(45% 0 0 0)",
            marginTop: "-45%",
          }}
        />
      </div>
    </div>
  );
};

export default ChibiGirl;
