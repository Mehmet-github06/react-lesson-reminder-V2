import { useState } from "react";
import LessonCard from "../LessonCard.jsx/LessonCard";

const Lesson = () => {
  const [sayi, setSayi] = useState(6);
  const [cards, setCards] = useState(true);
  const handClear = () => {
    setCards(false)
    setSayi(0);
  };

  return (
    <main>
      <div className="container">
        <h2>{sayi} Lesson Today</h2>
        <div className="card-container">{cards && <LessonCard />}</div>

        <button onClick={handClear}>Clear List</button>
      </div>
    </main>
  );
};

export default Lesson;
