import React from "react";
import { HomeCard } from "./Ui/HomeCard";
import Create from "../images/create.jpg";
import MyQuiz from "../images/show_quiz.png";
import Play from "../images/playquiz.png";

// this is our homepage which will route us to the necessary pages //

export const Home = () => {
  return (
    <div className="home-container">
      <HomeCard

        heading=""
        path="create-new"
        delay={0.15}
        image={Create}
        size={"500px"}
      />
      <HomeCard
        heading=""
        path="my-quizzes"
        delay={0.25}
        image={MyQuiz}
        size={"700px"}
      />
      <HomeCard
        heading="Play"
        path="play-quiz"
        delay={0.35}
        image={Play}
        size={"800px"}
      />
    </div>
  );
};
