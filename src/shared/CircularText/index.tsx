import "./circularText.css";

interface CircularTextProps {
  text: string;
  radius: number;
}
const CircularText = ({ text, radius }: CircularTextProps) => {
  const characters = text.split("");
  const degreeIncrement = 360 / characters.length;

  return (
    <div className="circular-text">
      {characters.map((char, index) => {
        const rotate = index * degreeIncrement;
        const rotateReverse = -rotate;
        return (
          <span
            key={index}
            className="circular-text__char"
            style={{
              transform: `rotate(${rotate}deg) translate(${radius}px) rotate(${rotateReverse}deg)`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText;
