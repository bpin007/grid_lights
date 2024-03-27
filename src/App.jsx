// import { useState } from "react";
// import "./App.css";
// import Cell from "./components/Cell";

// function App() {
//   const [order, setOrder] = useState([]);
//   const [isDeactivating, setIsDeactivating] = useState(false);
//   const config = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ];

//   console.log("bipin");

//   const deactivateCell = () => {
//     setIsDeactivating(true);
//     const time = setInterval(() => {
//       setOrder((origOrder) => {
//         const newOrder = origOrder.slice();
//         newOrder.pop();
//         if (newOrder.length === 0) {
//           clearInterval(time);
//           setIsDeactivating(false);
//         }
//         return newOrder;
//       });
//     }, 300);
//   };

//   const activateCells = (index) => {
//     const newOrder = [...order, index];
//     setOrder(newOrder);
//     console.log(newOrder);
//     if (newOrder.length === config.flat(1).filter(Boolean)) {
//       deactivateCell();
//     }
//   };

//   return (
//     <>
//       <div className="flex  items-center justify-center flex-col p-9">
//         <div
//           className="grid   max-w[300px] w-[100%] md:w-[30%] p-[20px] gap-[20px] border-black border-2 border-solid"
//           style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
//         >
//           {config.flat(1).map((value, index) => {
//             return value ? (
//               <Cell
//                 key={index}
//                 filled={order.includes(index)}
//                 onClick={() => activateCells(index)}
//                 isDisabled={order.includes(index) || isDeactivating}
//               />
//             ) : (
//               <span />
//             );
//           })}
//         </div>
//       </div>
//       {/* <h1 className="bg-orange-900">heyy</h1> */}
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function Cell({ filled, onClick, isDisabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

export default function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}
