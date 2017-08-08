window.onload = function () {
	
	/*==selecting all elements==*/
	const panels = document.querySelectorAll('.panel');
	/*==End of selecting all elements==*/
	
	
	/*==Function that toggles the open class==*/
	function toggleOpen() {
		this.classList.toggle('open');
	};
	/*==end of Function that toggles the open class==*/
	
	/*==Function that pulls in the hidden items==*/
	function toggleActive(e) {
		
		if (e.propertyName.includes('flex')) {
			this.classList.toggle('open-active');
		};
		
	};
	/*==End of Function that pulls in the hidden items==*/
	
	/*==looping through each of the children and adding an eventlistener to it==*/
	panels.forEach(panel => panel.addEventListener('click', toggleOpen));
	panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
	/*==End of looping through each of the children and adding an eventlistener to it==*/
}