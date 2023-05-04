import styles from "../styles";

const StartSteps = ({ text, number }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} rounded-[24px] bg-[#324169] w-[70px] h-[70px]`}
    >
      {/* Numbering style */}
      <p className=" text-white font-bold">0{number}</p>
      {/* Paragraph style */}
    </div>
    <p className="flex-1 ml-[60px] leading-[30px] text-white font-normal">{text}</p>
  </div>
);

export default StartSteps;
