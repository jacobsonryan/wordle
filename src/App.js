import React, { useState, useEffect } from 'react'
import './App.css';
import Words from './allwords.json'
function App() {
	const [input, setInput] = useState('')
	const [word, setWord] = useState([])
	const [guesses, setGuesses] = useState([])
	const [valid, setValid] = useState(true)

	useEffect(() => {
		setWord(Words.valid[Math.floor(Math.random() * Words.valid.length)])
	}, [])

	function submitGuess(e) {
		e.preventDefault()
			if(!Words.valid.includes(input)) {
				console.log('Not in list')
				return
			}
		
		let inputArr = []
		for(let i = 0; i < input.length; i++) {
			inputArr.push({
				letter: input[i],
				color: '#3a3a3c'
			})
		}

		let inputGuess = inputArr

		setGuesses(guesses.concat(inputGuess))
			
		let remainingLetters = word
		for(let i = 0; i < 5; i++) {
			if(inputArr[i].letter === word[i]) {
				remainingLetters = remainingLetters.replace(inputArr[i].letter, '')
				inputArr[i].color = '#538E4E'
			} else {
				inputArr[i].color = '#3a3a3c'
			}			
		}
		
		for(let i = 0; i < 5; i++) {
			if(remainingLetters.includes(inputArr[i].letter) && word[i].includes(inputArr[i].letter) !== -1) {
				inputArr[i].color = '#B49F3A'
				remainingLetters = remainingLetters.replace(inputArr[i].letter, '')
			}
		}

		setInput('')
		if(guesses.length === 25) {
			console.log(word.toString())
		}
	}

	function handleChange(e) {
		setInput(e.target.value)
		if(e.target.value.length === 5 && !Words.valid.includes(e.target.value)) {
			setValid(false)
		} else {
			setValid(true)
		}
	}

  return (
		<>
			<h1>Wordle Clone</h1>
			<form onSubmit={(e) => submitGuess(e)}>
				<input spellCheck='false' type='text' maxLength='5' onChange={(e) => handleChange(e)} value={input}  autoFocus={true} onBlur={({ target }) => target.focus()}/>
			</form>
			<div className='guesses'>
				{guesses.map((word, index) => {
					return <p key={index} className='animate' style={{border: '2px solid ' + word.color, backgroundColor: word.color, animationDelay: (index % 5) * 0.10 + 's'}}>{word.letter}</p>
				})}
				{[...input].map((letter, index) => {
					return <p key={index} className='shaking' style={{border: valid ? '2px solid #565758' : '2px solid #a82d2d', backgroundColor: valid ? '#121213': '#a82d2d'}}>{letter}</p>
				})}
				<div className='empty'>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
					<p style={{border: '2px solid #3a3a3c'}}></p>
				</div>
			</div>
		</>
  );
}

export default App;
