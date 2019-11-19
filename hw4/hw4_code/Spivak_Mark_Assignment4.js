// Here are the paths to the images
const fileLocations = {
	woofer: './img/woofer.jpg',
	pupper: './img/pupper.jpg',
	clouds: './img/clouds.jpg',
	snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
	// This next line prevents the reload of the form
	event.preventDefault();
	// Get values of inputs
	let formUsername = document.getElementById('formUsername').value;
	let formCaption = document.getElementById('formCaption').value;
	let formImg = fileLocations[document.getElementById('formImg').value];
	// Pass values to addNewPost()
	addNewPost(formUsername, formCaption, formImg);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
	// Create the parent post div
	let parentDiv = document.createElement('div');
	parentDiv.className = 'post';
	// Create a span for the user
	let span = document.createElement('span');
	span.appendChild(document.createTextNode(username));
	// Create image element
	let img = document.createElement('img');
	img.src = imgLocation;
	img.alt = caption;
	// Create overlay element
	let overlayDiv = document.createElement('div');
	overlayDiv.classList.add('postOverlay');
	overlayDiv.appendChild(document.createTextNode(caption));
	// Add all child elements (order matters)
	parentDiv.appendChild(span);
	parentDiv.appendChild(img);
	parentDiv.appendChild(overlayDiv);
	// Add event listeners to post
	parentDiv.addEventListener('mouseover', function() {
		overlayDiv.style = 'opacity: 1';
	});
	parentDiv.addEventListener('mouseleave', function() {
		overlayDiv.style = 'opacity: 0';
	});
	// Add post element to post list
	document.getElementById('postList').appendChild(parentDiv);
}

window.onload = () => {
	// Once our window is loaded, we add the event listener for our post form
	postForm.addEventListener('submit', handleFormSubmit);
};
