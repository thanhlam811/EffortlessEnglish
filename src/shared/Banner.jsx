import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

const TypingEffect = ({ text }) => {
  const characters = text.split(""); // Tách văn bản thành từng ký tự

  return (
    <div className="inline-block">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }} // Ban đầu là ẩn
          animate={{ opacity: 1 }} // Khi hiển thị, làm cho chữ cái xuất hiện
          transition={{
            duration: 0.65, // Thời gian để chữ cái xuất hiện
            delay: index * 0.05, // Độ trễ tăng dần cho mỗi chữ cái
          }}
          className="font-sans text-white"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

// Banner component với TypingEffect
const Banner = ({ banner, heading, subheading, subheading1, btn1, btn2 }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 relative">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 relative z-10">
        {/* Hình ảnh banner */}
        <motion.div
          variants={FadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="glow-container w-2/3 md:w-3/4"
        >
          <motion.img
            src={banner}
            className="w-3/4 img-hover lighting-effect"
            alt="Effortless English Banner"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </motion.div>

        {/* Nội dung */}
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="md:w-3/5"
        >
         <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed font-sans">
  <TypingEffect text={heading} />
</h2>
<p className="text-base md:text-lg text-[#EBEBEB] pb-6 font-serif">{subheading}</p>
<p className="text-base md:text-lg text-[#EBEBEB] pb-6 font-serif">{subheading1}</p>

          <div className="space-x-5 space-y-4">
            <a href="#pricing">
              <button className="btnPrimary">{btn1}</button>
            </a>
            {btn2 && (
              <a href="#pricing">
                <button className="btnPrimary">{btn2}</button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  subheading1: PropTypes.string,
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string,
};

export default Banner;