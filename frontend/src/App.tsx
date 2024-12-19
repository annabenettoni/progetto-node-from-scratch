import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Esame } from "../../api-types/esame";

function App() {
  const [exam, setExam] = useState<Esame>({});

  const addExam = () => {
    // const esame: Esame = {
    //   studente: "123",
    //   materie: [
    //     {
    //       nome: "React",
    //       voto: 3,
    //     },
    //     {
    //       nome: "Java",
    //       voto: 10,
    //     },
    //   ],
    // };
    fetch("http://localhost:3000/esami", {
      method: "POST",
      body: JSON.stringify(exam),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <div>
        <form>
          <label>
            Studente:
            <input
              type="text"
              value={exam.studente}
              onChange={(e) => setExam({ ...exam, studente: e.target.value })}
            ></input>
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
