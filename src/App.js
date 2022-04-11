import React, { useState, useEffect } from 'react'
import './App.css';
import Words from './words.json'
function App() {
	const [input, setInput] = useState('')
	const [word, setWord] = useState([])
	const [guesses, setGuesses] = useState([])

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
				inputArr[i].color = '#538E4E'
				remainingLetters = remainingLetters.replace(inputArr[i].letter, '')
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

  return (
		<>
			<h1>Wordle Clone</h1>
			<form onSubmit={(e) => submitGuess(e)}>
				<input spellCheck='false' type='text' maxLength='5' onChange={(e) => setInput(e.target.value)} value={input}  autoFocus={true} onBlur={({ target }) => target.focus()}/>
			</form>
			<div className='guesses'>
				{guesses.map((word, index) => {
					return <p key={index} className='animate' style={{border: '2px solid ' + word.color, backgroundColor: word.color, animationDelay: (index % 5) * 0.40 + 's'}}>{word.letter}</p>
				})}
				{[...input].map((letter, index) => {
					return <p key={index} className='shaking' style={{border: '2px solid #565758'}}>{letter}</p>
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
