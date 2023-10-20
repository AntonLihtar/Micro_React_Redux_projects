import {useState} from 'react'
import './App.css'
import Select from "./components/UI/Select/Select.jsx";
import {colors, options} from "./arrs.jsx";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {setState} from "./store/actions.js";


function App() {

  const dispatch = useDispatch()
  const store = useSelector(state => state)


  const [color, setColor] = useState({color: colors[0].text})
  const [number, setNumber] = useState({number: options[0].text})
  const selectChangeHandler = (event) => {
    if (event.target.id === "Цвет") {
      setColor({
        color: event.target.value
      })
    }
    if (event.target.id === "Цифра") {
      setNumber({
        number: event.target.value
      })
    }
  }

  const setButtonHandler = () => {
    dispatch(setState({
      type: "SET_VALUES",
      payload: {
        num: number.number,
        col: color.color,
        isB: (color.color === null && number.number === null)
      }
    }))
  }

  return (
    <>
      <h1
        style={{color: "#abd9da"}}
      >Практическая Работа на React)</h1>

      <div className="btns">
        <Select
          label="Цвет"
          options={colors}
          selectChangeHandler={selectChangeHandler}
        />
        <Select
          label="Цифра"
          options={options}
          selectChangeHandler={selectChangeHandler}
        />
        <button
          // disabled={state.isButton}
          onClick={setButtonHandler}
        >Установить
        </button>
      </div>

      <div
        id="window"
        className={store.color}
      >
        {store.number}
      </div>
    </>
  )
}


export default App
