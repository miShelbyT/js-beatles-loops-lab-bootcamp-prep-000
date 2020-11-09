console.log ('please work')
// add solution here
function theBeatlesPlay(musicians, instruments) {
	let musiciansPlay = []
	for (let i = 0; i < musicians.length; i++) {
		{ 
			musiciansPlay.push(`${musicians[i]} plays ${instruments[i]}`)
		}
	}
	return musiciansPlay
}

function johnLennonFacts(facts) {
	let updatedFacts = []
	let i = 0
	while (i < facts.length) {
		updatedFacts.push(facts[i].concat("!!!"))
		i++
	}
	return updatedFacts
}

function iLoveTheBeatles(num) {
	let beatlesLove = []
	
	do { beatlesLove.push('I love the Beatles!')
		num += 1
	} while (num < 15)

	return beatlesLove
}