console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'green'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'pink'){
		document.getElementById('theme-style').href = 'pink.css'
	}

	if(mode == 'black'){
		document.getElementById('theme-style').href = 'black.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}
var typed = new Typed(".typing-2", {
        strings: ["programmer", "Developer", "artist", "sports person"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
