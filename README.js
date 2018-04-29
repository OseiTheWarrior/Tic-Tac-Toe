# Tic-Tac-Toe
Trying to make Tic-Tac-Toe Board

Experimenting with README EDITS

Code Attempt 1 

<!DOCTYPE html>


<html> 
  
  
  <body>
  
  <h1>TIC-TAC-TOE BOARD</h1>
  
print(' | |');
print(' ' + x7 + ' |' + x8 + ' |' + x9+ ' ');
print('-------------');
print(x4+' |' +x5+ ' |' +x6);
print('-------------');
print(x1+' |' +x2+ ' |' +x3);
    

<form>
  <select id="mySelect" onchange="myFunction7()"> //runs function when list is selected/changed
    <option>X</option>
    <option>O</option>
  </select>
</form>


<script>
function myFunction7() {
    var x7 = document.getElementById("mySelect");//here option is picked from mySelect id
    var i = x7.selectedIndex;
    document.getElementById("demo").innerHTML = x7.options[i].text;
}
</script>

  
  
  
  
  <form>
  <select id="mySelect" onchange="myFunction8()">
    <option>X</option>
    <option>O</option>
  </select>
</form>



<script>
function myFunction8() {
    var x8 = document.getElementById("mySelect");
    var i = x8.selectedIndex;
    document.getElementById("demo").innerHTML = x8.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction9()">
    <option>X</option>
    <option>O</option>
  </select>
</form>



<script>
function myFunction() {
    var x9 = document.getElementById("mySelect");
    var i = x9.selectedIndex;
    document.getElementById("demo").innerHTML = x9.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction4()">
    <option>X</option>
    <option>O</option>
  </select>
</form>



<script>
function myFunction4() {
    var x4 = document.getElementById("mySelect");
    var i = x4.selectedIndex;
    document.getElementById("demo").innerHTML = x4.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction5()">
    <option>X</option>
    <option>O</option>
  </select>
</form>


<script>
function myFunction() {
    var x5 = document.getElementById("mySelect");
    var i = x5.selectedIndex;
    document.getElementById("demo").innerHTML = x5.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction6()">
    <option>X</option>
    <option>O</option>
  </select>
</form>



<script>
function myFunction6() {
    var x6 = document.getElementById("mySelect");
    var i = x6.selectedIndex;
    document.getElementById("demo").innerHTML = x6.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction1()">
    <option>X</option>
    <option>O</option>
  </select>
</form>


<script>
function myFunction1() {
    var x1 = document.getElementById("mySelect");
    var i = x1.selectedIndex;
    document.getElementById("demo").innerHTML = x1.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction2()">
    <option>X</option>
    <option>O</option>
  </select>
</form>



<script>
function myFunction2() {
    var x2 = document.getElementById("mySelect");
    var i = x2.selectedIndex;
    document.getElementById("demo").innerHTML = x2.options[i].text;
}
</script>

<form>
  <select id="mySelect" onchange="myFunction3()">
    <option>X</option>
    <option>O</option>
  </select>
</form>



<script>
function myFunction() {
    var x3 = document.getElementById("mySelect");
    var i = x3.selectedIndex;
    document.getElementById("demo").innerHTML = x3.options[i].text;
}
</script>


  
  
  
  
  </body>



</html>
  
