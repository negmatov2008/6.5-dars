import { useEffect, useState } from "react";
let numbers = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"];

function App() {
  const [resolt, setResolt] = useState([]);
  const handleNumber = (index) => {
    if (index !== 3 && resolt.length < 15) {
      setResolt([...resolt, numbers[index]]);
    } else if (index == 3) {
      const delResolt = resolt;
      setResolt(delResolt.slice(0, delResolt.length - 1));
    }
  };
  const handleResoult = () => {
    resolt.forEach((res, i) => {
      if (res === numbers[7]) {
        const qosh1 = resolt
          .slice(0, resolt.length - (resolt.length - i))
          .join("");
        const qosh2 = resolt.slice(qosh1.length, resolt.length).join("");
        const qoshilish = Number(qosh1) + Number(qosh2);
        const qoshilishArr = String(qoshilish)
          .split("")
          .map((qoshilish) => {
            return Number(qoshilish);
          });
        setResolt(qoshilishArr);
      }

      if (res === numbers[11]) {
        const ayir1 = resolt
          .slice(0, resolt.length - (resolt.length - i))
          .join("");
        const ayir2 = resolt.slice(ayir1.length, resolt.length).join("");
        const ayirish = Number(ayir1) + Number(ayir2);
        console.log(ayir2);
        const ayirishArr = String(ayirish)
          .split("")
          .map((ayirish) => {
            return Number(ayirish);
          });
        setResolt(ayirishArr);
      }

      if (res === numbers[14]) {
        const ayir1 = resolt
          .slice(0, resolt.length - (resolt.length - i))
          .join("");
        const ayir2 = resolt.slice(ayir1.length + 1, resolt.length).join("");
        const ayirish = Number(ayir1) / Number(ayir2);
        console.log(ayir2);
        const ayirishArr = String(ayirish)
          .split("")
          .map((ayirish) => {
            return Number(ayirish);
          });
        setResolt(ayirishArr);
      }

      if (res === numbers[15]) {
        const ayir1 = resolt
          .slice(0, resolt.length - (resolt.length - i))
          .join("");
        const ayir2 = resolt.slice(ayir1.length + 1, resolt.length).join("");
        const ayirish = Number(ayir1) * Number(ayir2);
        console.log(ayir2);
        const ayirishArr = String(ayirish)
          .split("")
          .map((ayirish) => {
            return Number(ayirish);
          });
        setResolt(ayirishArr);
      }
    });
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <span>calc</span>
          <img src="theme.png" alt="" />
        </div>
        <div className="card-display">{resolt}</div>
        <div className="card-number">
          {numbers.map((number, index) => (
            <button
              onClick={() => {
                handleNumber(index);
              }}
              className="number"
            >
              {number}
            </button>
          ))}
          <div className="number-control">
            <div
              onClick={() => {
                setResolt([]);
              }}
              className="number-reset"
            >
              RESET
            </div>
            <div onClick={handleResoult} className="number-resoult">
              =
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
