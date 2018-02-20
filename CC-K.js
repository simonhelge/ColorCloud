document.getElementById("skiftbillede6").onclick = function() {myFunction()};

// her er den funktion, der startes:
function myFunction() {
    document
		.getElementById("skiftbillede6")
		.innerHTML = '<img src="images/billede6-2.png" width="100%">';
}


function doven( id, foto ){
    document
		.getElementById(id)
		.innerHTML = '<img src="images/' + foto + '" width="100%">';
}

//doven("enId","billede9.jpg");

document.getElementById("skiftbillede4").onclick = function() {
    doven("skiftbillede4","billede4-2.JPG");
};

document.getElementById("skiftbillede5").onclick = function() {
    doven("skiftbillede5","billede5-2.jpg");
};

document.getElementById("skiftbillede7").onclick = function() {
    doven("skiftbillede7","billede7-2.jpg");
};

document.getElementById("skiftbillede8").onclick = function() {
    doven("skiftbillede8","billede8-2.jpg");
};

document.getElementById("skiftbillede9").onclick = function() {
    doven("skiftbillede9","billede9-2.jpg");
};

document.getElementById("skiftbillede10").onclick = function() {
    doven("skiftbillede10","billede10-2.JPG");
};