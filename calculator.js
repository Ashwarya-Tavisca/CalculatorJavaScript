var historyScreen="";
var flag=0;
var input="";
function showHistory()
{
	document.getElementById("history-screen").innerHTML=historyScreen;
}
function show(number) {
	if(flag == 1)
	{
		flag =0;
		clearScreen();
	}
    input += number;
    document.getElementById("screen").value=input;
}
function clearScreen() {
    input="";
    show("");
}
function calculate() {
    input = document.getElementById("screen").value;
    try{
        number = eval(input);
		historyScreen=historyScreen+input+"="+number+"<br>";
        input="";
        show(number);
		flag=1;
    }
    catch(error){
        input="";
        show("Error: Syntax error");
		flag=1;
    }
}
document.addEventListener("keypress",function(e){
	if(e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-")
	{
		flag=0;
	}
	if(flag==1)
	{
		flag=0;
		clearScreen();
	}
	if (e.keyCode == 13) {
        input = document.getElementById("screen").value;
        try {
            number = eval(input);
			historyScreen=historyScreen+input+"="+number+"<br>";
            input = "";
            show(number);
			flag=1;
        }
        catch (error) {
            input = "";
            show("Error: Syntax error");
			flag=1;
        }
    }
});