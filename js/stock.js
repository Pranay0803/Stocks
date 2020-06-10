var stock=["12/5/20", "Pranay", "Cement", 200000]
var par = document.getElementById("view_stocks_1");
var body=document.body;

var tab=document.createElement('table')
var row = tab.insertRow();
for(let i=0;i<4;i++){
    var cell=row.insertCell();
    var text = document.createElement("input");
    text.type="text";
    text.value=stock[i];
    cell.appendChild(text);
    cell.style.marginTop="200px";
}
document.body.appendChild(tab);