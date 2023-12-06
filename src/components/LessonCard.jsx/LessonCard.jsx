import data from "../../helper/data";
import "./lesson.css";

const LessonCard = () => {
  return (
    <>
      {data.map(({ id, name, image, hour }) => (
        <div key={id} className="lesson">
          <div>
            <img src={image} alt={name} />
          </div>
          <div className="lesson-text">
            <p>
              Lesson Name:<span>{name}</span>
            </p>
            <p>
              Lesson Hoour:<span>{hour}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default LessonCard;
