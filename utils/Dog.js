class Dog {
	constructor(data) {
		Object.assign(this, data);
	}

	setMatchStatus(bool) {
		this.hasBeenLiked = bool;
		this.hasBeenSwiped = true;
	}
	getFinishedHtml() {
		return `
        <div class="search-finished-div">
            <img class="finished-img" src="images/dog-sad.jpg"/>
            <h2 class="finished-top-text">
                There are no more dogs in your area. Try again later!
            </h2>
            <h2 class="finished-bottom-text">⛔</h2>
        </div>
        `;
	}
	getDogHtml() {
		const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;
		const likedHtml = `<div class="like-display">
                <img src="./images/badge-like.png" class="like hidden" id="like-div"/>
            </div>`;
		const nopeHtml = `<div class="nope-display">
                <img src="./images/badge-nope.png" class="nope hidden" id="nope-div"/>
            </div>`;
		// ${hasBeenSwiped && hasBeenLiked ? likedHtml : dislikedHtml}
		return `
            ${likedHtml}
            ${nopeHtml}
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`;
	}
}

export default Dog;
