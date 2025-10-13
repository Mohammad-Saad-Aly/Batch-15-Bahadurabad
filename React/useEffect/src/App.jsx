import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [quiz, setQuiz] = useState([])
  let [index, setIndex] = useState(0)


  useEffect(()=>{
    getDataFromAPI()
  }, [])

  function getDataFromAPI() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(data => data.json())
      .then(value => setQuiz(value))
      .catch(err => console.log(err))
  }

  function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array
}

  // component did mount
  // component did update
  // component did unmount


  // let [bool, setBool] = useState(false)
  // let [count, setCount] = useState(0)

  // useEffect(() => {
  //   greetUser()
  // }, [])

  // function greetUser() {
  //   console.log('welcome user')
  // }

  // function handleClick(){
  //   setBool(!bool)
  //   setCount(count + 1)
  // }


  if (!quiz.length) {
    return <img src="https://static.wixstatic.com/media/68315b_30dbad1140034a3da3c59278654e1655~mv2.gif" width="100%" alt="" />
  }


  function nextQuestion(){
    if(index < quiz.length - 1){
      setIndex(index + 1) 
    }
    else{
      alert('question end')
    }
  }

  return (
    <>

      <h1>Quiz App</h1>
      <hr />
      <br />

      <h2>
        {
          quiz[index].question.text
        }
      </h2>

      <button onClick={nextQuestion}>Next</button>



      {/* <div>
        <button onClick={handleClick}>+</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <br />
      <button onClick={() => setBool(!bool)}>Click</button> */}

    </>
  )
}

export default App
