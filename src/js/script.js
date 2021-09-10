const buttonsTime = document.querySelectorAll('.buttonsTime');
const buttonInitTime = document.querySelector('.buttonsInit');
const buttonModalClose = document.querySelector('.close');		
const buttonReInit = document.querySelector(".rInit");

// empurrando número do botão para o input
buttonsTime.forEach(element => {
    element.addEventListener('click', event =>{
        const inputField = document.querySelector('.inputForm')
        if(event.target.textContent === "pomodoro"){
            inputField.value = "25 minutos";
        }else{
            inputField.value = event.target.textContent; 
        };
    });
});

// função botão de iniciar timer
buttonInitTime.addEventListener('click', () => {
    const inputField = document.querySelector('.inputForm');
    const numberInput = inputField.value.split(" ");
    const modal = document.querySelector('.containerModal');
    const timerValue = document.querySelector('.timerCount');

	// validando formulário do timer
    if(inputField.value === ""){
        alert("Digite um tempo!");
    }else{
        const body = document.body;
        const container = document.querySelector('.container');
        const numberIntTime = parseInt(numberInput[0]);	
	
		// mostrando pop-up
        body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        container.style.visibility = "hidden";
        modal.style.display = "inline";

		// setando valores do tempo
        var segundos = 59;
        var minutos = 0;
	    minutos = numberIntTime - 1;		
	
		// executando timer 
		var timer = setInterval(function () {
			var time;
			segundos--;
			if(segundos === 0){
				minutos--;
				segundos = 59;
				if(minutos < 0){
					clearInterval(timer);
					minutos = 0;
					segundos = 0;
				};
			};		
			time = minutos <= 10 ? `0${minutos}:${segundos}` : `${minutos}:${segundos}`;
			timerValue.innerHTML = time;
		}, 1000);	
		inputField.value = "";
	};	
	
	// modal close X
		buttonModalClose.addEventListener('click', event => {
   		const modal = document.querySelector('.containerModal');
		const body = document.body;
    	const container = document.querySelector('.container');

    	modal.style.display = "none";
    	body.style.backgroundColor = "#fff";
    	container.style.visibility = "visible"
		clearInterval(timer);	
		});
	});

