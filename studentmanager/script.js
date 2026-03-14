let students = [
{ name:"Rahul", marks:[80,75,90] },
{ name:"Anita", marks:[85,70,88] },
{ name:"Kiran", marks:[60,65,70] },
{ name:"Meena", marks:[45,55,50] }
];

let table = document.querySelector("#studentTable tbody");

students.forEach(function(student){

let total = 0;

student.marks.forEach(function(mark){
total += mark;
});

let avg = total / student.marks.length;

let gradeClass = "";

if(avg >= 75){
gradeClass = "good";
}
else if(avg >= 50){
gradeClass = "average";
}
else{
gradeClass = "low";
}

let row = document.createElement("tr");

row.innerHTML =
"<td>"+student.name+"</td>"+
"<td>"+student.marks.join(", ")+"</td>"+
"<td><span class='badge "+gradeClass+"'>"+avg.toFixed(2)+"</span></td>";

table.appendChild(row);

});