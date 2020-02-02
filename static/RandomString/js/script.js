function handleClick() {
	var inputData = document.getElementById("inputTextBox").value;
	if(inputData.length <= 4){
		document.getElementById("outputHeading").innerHTML = "Please enter a string longer than 4 characters";
	}
	else{
		sendData(inputData);
	}
}

function sendData(data) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log("Response received successfully");
			onReceivingData(this.responseText);
		}
		else {
			console.log("Waiting.....")
			document.getElementById("outputHeading").innerHTML = "Generation failed. Try again!";
		}
	};
	xhttp.open("POST", "https://ranstrgen.herokuapp.com/?data=" + data, true);
	xhttp.send();
	document.getElementById("outputHeading").innerHTML = "Generating random string......";
	console.log("Request sent, waiting for response....");
}

function onReceivingData(responseData) {
	document.getElementById("outputHeading").innerHTML = responseData;
}