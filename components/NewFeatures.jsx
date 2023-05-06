import styles from "../styles";

const NewFeatures = ({ title, imgUrl, subtitle }) => (
  <div className="flex flex-1 flex-col sm:max-w-[270px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[20px] bg-[#324169]`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-[36px] h-[30px] object-contain"
      />
    </div>
    <h3 className="text-white flex-1 mt-[20px]">{title}</h3>
    <p className="text-white flex-1 mt-[16px] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
