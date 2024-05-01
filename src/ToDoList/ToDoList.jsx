import React, { useEffect, useRef, useState } from "react";
import "./toDoList.css";
const ToDoList = () => {
  const [stateInput, setStateInput] = useState(``);
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setStateInput(e.target.value);
    console.log(stateInput);
  };
  const liRef = useRef(null);

  const [isDisabled, setIsDisabled] = useState(true);
  const handleRemoveButtonClick = (removeList) => {
    let filteredToDo = list.filter((item) => item !== removeList);
    setList(filteredToDo);
  };
  const [isVisible, setIsVisible] = useState(false);
  const handleCreateButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const handleAddButtonClick = () => {
    if (stateInput.trim() !== "") {
      setIsVisible(!isVisible);
      setList((prev) => [...prev, stateInput]);
      setStateInput("");
    }
  };
  const [isSorted, setIsSorted] = useState(true);
  const handleArrangementButtonClick = () => {
    isSorted
      ? setList(() =>
          list.sort(
            (a, b) =>
              a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
          )
        )
      : setList(() =>
          list
            .sort(
              (a, b) =>
                a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
            )
            .reverse()
        );
    setIsSorted(!isSorted);
  };
  console.log(list);
  return (
    <div className="main">
      <div className="empty"></div>
      <h1>To Do List</h1>
      <button
        onClick={handleArrangementButtonClick}
        className="arrangement-button"
      >
        <img src="./ToDoList/Images/Group 38.png" alt="Sorting Logo" />
      </button>
      <div
        className="input-and-delete-button"
        style={{
          display: isVisible ? "block" : "none",
        }}
      >
        <input
          value={stateInput}
          onChange={handleInputChange}
          type="text"
          name="input-text"
          className="input-text"
        />
        <button className="delete-button">X</button>
      </div>
      <ul className="added-list">
        {list.map((input, index) =>
          isDisabled ? (
            <li ref={liRef} key={index}>
              <div className="input-and-delete-button">
                <input
                  value={input}
                  disabled={true}
                  type="text"
                  name="input-text"
                  className="input-text"
                />
                <button
                  className="delete-button"
                  onClick={() => handleRemoveButtonClick(input)}
                >
                  X
                </button>
              </div>
            </li>
          ) : (
            ""
          )
        )}
      </ul>

      <div className="create-and-add-buttons">
        <button className="create-button" onClick={handleCreateButtonClick}>
          +
        </button>
        <button className="add-button" onClick={handleAddButtonClick}>
          Əlavə et
        </button>
      </div>
    </div>
  );

  // const [stateInput, setStateInput] = useState("");
  // const [list, setList] = useState([]); // To-Do listesi için state
  // const [isVisible, setIsVisible] = useState(false); // Görünürlük durumu
  // const inputRef = useRef(null);

  // // Input değişikliği
  // const handleInputChange = (e) => {
  //   setStateInput(e.target.value);
  // };
  // useEffect(() => {}, []);

  // // Eleman ekleme
  // const handleAddButtonClick = () => {
  //   if (stateInput.trim() !== "") {
  //     setList([...list, stateInput]); // Yeni öge ekle
  //     setStateInput(""); // Input'u temizle
  //     setIsVisible(false); // Formu kapat
  //   }
  // };

  // // Eleman silme
  // const handleRemoveButtonClick = (index) => {
  //   setList(list.filter((_, i) => i !== index)); // İlgili ögeyi sil
  // };

  // // Input alanını göstermek veya gizlemek için
  // const handleCreateButtonClick = () => {
  //   console.log(isVisible)
  //   setIsVisible(!isVisible);
  //   inputRef.current?.focus(); // Yeni input alanını odakla
  // };

  // return (
  //   <div className="main">
  //     <h1>To Do List</h1>

  //     {isVisible && ( // Form görünür mü
  //       <div className="input-and-delete-button">
  //         <input
  //           ref={inputRef} // Ref ile ilişkilendirilmiş
  //           value={stateInput}
  //           onChange={handleInputChange}
  //           type="text"
  //           placeholder="Yeni görev ekle"
  //         />
  //       </div>
  //     )}
  //     <ul className="added-list">
  //       <li>
  //         <div className="input-and-delete-button">
  //           <input
  //             disabled={true}
  //             type="text"
  //             name="input-text"
  //             className="input-text"
  //           />
  //           <button className="delete-button" onClick={handleRemoveButtonClick}>
  //             X
  //           </button>
  //         </div>
  //       </li>
  //       {list.map((item, index) => (
  //         <li key={index}>
  //           <div className="input-and-delete-button">
  //             <input
  //               value={item}
  //               disabled={true}
  //               type="text"
  //               name="input-text"
  //               className="input-text"
  //             />
  //             <button
  //               className="delete-button"
  //               onClick={() => handleRemoveButtonClick(index)}
  //             >
  //               X
  //             </button>
  //           </div>
  //         </li>
  //       ))}
  //       <div className="create-and-add-buttons">
  //         <button className="create-button" onClick={handleCreateButtonClick}>
  //           +
  //         </button>
  //         <button className="add-button" onClick={handleAddButtonClick}>
  //           Əlavə et
  //         </button>
  //       </div>
  //     </ul>
  //   </div>
  // );
};

export default ToDoList;

// silmeye basanda divi silsin .
// 1 statenin icinde hem divin ozun hem de gorunub gorunmediyini tutmaqi yoxla div:  <li>aaa</li>  isDisabled: true ve ya false. Bunu necese ele ki elave et deyende yeni obyekt elave olunsun bu stateye

// birinci mesele nedi?
// -+e basanda input acilir
//ikinci elave ete basanda ulnin listine elave olunur stateInputun deyeri
//ucuncu x e basanda   uygun   list silinmelidi. demeli listi useRefle tutmaliyiq ki, sile de bilek
//xe basanda uygun listi filerle silmek olar yeqinki . YOXLA useRef
