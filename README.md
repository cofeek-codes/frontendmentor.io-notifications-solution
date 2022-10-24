# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

<!-- **Note: Delete this note and update the table of contents based on what sections you keep.** -->

## Overview

### The challenge

Users able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero **Counter issue**
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/cofeek-codes/frontendmentor.io-notifications-solution)
- Live Site URL: [Add live site URL here](https://frontendmentor-io-notifications-solution.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Plain JS
  <!-- **Note: These are just examples. Delete this note and replace the list above with your own choices** -->

### What I learned

I improved my html, css and js skills

```js
for (let i = 0; i < cards.length; i++) {
	let card = cards[i]
	let dot = unreadDots[i]

	card.addEventListener('click', () => {
		card.classList.toggle('unread')
		dot.classList.toggle('active')
	})
}
```

<!-- **Note: Delete this note and the content within this section and replace with your own learnings.** -->

## Author

- Website - [cofeek-codes](https://cofeek-codes.online)
- Frontend Mentor - [@cofeek-codes](https://www.frontendmentor.io/profile/cofeek-codes)

<!-- **Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.** -->
