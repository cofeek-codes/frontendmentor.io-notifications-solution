console.log(`script ${document.querySelector('script').src}`)
let cards = document.querySelectorAll('.notitfication__card ')
let unread = document.querySelectorAll('.unread')
let asRead = document.querySelector('.as__read__button')
let unreadDots = document.querySelectorAll('.red__dot')
let conunter = document.querySelector('.counter')
conunter.innerHTML = unread.length

for (let i = 0; i < cards.length; i++) {
	let card = cards[i]
	let dot = unreadDots[i]

	card.addEventListener('click', () => {
		card.classList.toggle('unread')
		dot.classList.toggle('active')
	})
}

asRead.addEventListener('click', () => {
	cards.forEach(c => {
		if (c.classList.contains('unread')) {
			c.classList.remove('unread')
		}
	})
})
