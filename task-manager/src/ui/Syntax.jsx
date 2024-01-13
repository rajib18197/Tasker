import { useState } from "react";

// export default function Syntax() {
//   const list = ["tomato", "tom cruise", "tetul", "technology"];
//   const [value, setValue] = useState("");
//   //   console.log(list.join(","));
//   const filterList = list.filter((el) => {
//     value.split(" ").at(-1).startsWith("t") ||
//       value.split(" ").at(-1).startsWith("c");
//     return value.includes(el);
//   });

//   console.log(filterList);
//   return (
//     <div>
//       <input
//         type="text"
//         className="border-2 border-cyan-300"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       {filterList.length && (
//         <div>
//           {filterList.map((el) => (
//             <h3 key={el}>{el}</h3>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

const TextEntry = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;

    // Check if the typed text contains the word "tomato"
    if (newText.toLowerCase().includes("tomato")) {
      setInputText(newText);
    } else {
      setInputText(newText);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText((prevText) => prevText + suggestion);
  };

  const getSuggestions = () => {
    const keywords = ["tomato", "tom cruise", "tetul", "technology"];

    return keywords.filter((word) => word.includes(inputText.toLowerCase()));
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        maxLength={64}
        placeholder="Type here..."
      />
      <div>
        <p
          style={{
            color: inputText.toLowerCase().includes("tomato") ? "red" : "black",
          }}
        >
          {inputText}
        </p>
      </div>
      <div>
        <p>Suggestions:</p>
        <ul>
          {getSuggestions().map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Text Entry with Color Coding and Suggestions</h1>
      <TextEntry />
    </div>
  );
};

export default App;
