import { useState, useEffect } from 'react'
import './App.css';
import {Message} from './components/message'
import {Button} from './components/button'

function App() {

  const randomGenerator = () => {
    return Math.round(Math.random() * 100)

  }
  const [secret, setSecret] = useState(randomGenerator())
  const [message, setMessage] = useState('have a guess')
  const [guessCount, setGuessCount] = useState(5)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (guessCount == 0) {
      setMessage('out of guesses')
      setPlaying(false)
    }
  })
  const submitHandler = (evt) => {
    evt.preventDefault()
    const data = new FormData(evt.target)
    const userGuess = parseInt(data.get('guess'))
    evt.target.reset()
    if (playing === true) {


      if (userGuess > secret) {
        setMessage('The Number is Smaller Than ' + userGuess)
        setGuessCount(guessCount - 1)
      }
      else if (userGuess < secret) {
        setMessage('The Number is larger Than ' + userGuess)
        setGuessCount(guessCount - 1)
      }
      else if (userGuess === secret) {
        setMessage('The Number is correct ' + userGuess)
      }
    }
    else {
      setPlaying (true)
      setGuessCount (5)
      setMessage ('have a guess')
      setSecret (randomGenerator())
    }
  }
  return (
    <div className="App">
      <h1>Guess My Number in {guessCount} guesses {secret}</h1>
      <form id="form" onSubmit={submitHandler}  >
        <input type="text" name="guess" disabled={(playing === true) ? false : true} autoComplete="password" />
        {/* <button type="submit">
          {(playing === true) ? "submit" : "playagain"}
        </button> */}
        <Button status={playing} />
      </form>
      {/* <p className="message">{message}</p> */}
      <Message text={message} /> 
    </div>
  );
}

export default App;
