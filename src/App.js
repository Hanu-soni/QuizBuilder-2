import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { MyQuizzes } from "./Components/MyQuizzes/MyQuizzes";
import { CreateNew } from "./Components/CreateNew/CreateNew";
import { PlayQuiz } from "./Components/PlayQuiz/PlayQuiz";
import { Quiz } from "./Components/PlayQuiz/Quiz";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/QuizBuilder-2" element={<Home />} />
        <Route path="/QuizBuilder-2/my-quizzes" element={<MyQuizzes />} />
        <Route path="/QuizBuilder-2/create-new" element={<CreateNew />} />
        <Route path="/QuizBuilder-2/play-quiz" element={<PlayQuiz />} />
        <Route path="/QuizBuilder-2/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
