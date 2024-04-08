
// var el=document.querySelector("h2");

// var el1=document.getElementById("but");
// el1.addEventListener("click",()=>{el.textContent="hai da!!";
// el.style.color="green",el1.style.color="white"})
// el.textContent="vai da phone aa!!";

// function display(a,b){
// return a+b;
// }

// console.log(display(5,4));
// function add(a){
//     a()
// }
// function hello(){
//     alert("hello hai");
// }
// add(hello)

// let arr=["1","22","33","45","55"];
// arr.splice(2,0,"39");
// arr.push("pushed");
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
//  const display1=()=>{
// arr.map((c)=>{
    
//         console.log(c);
//     })
//  }
//  const car={type:"hatch",color:"black",tyre:"radial",serial_no:456};
//  console.log(car.type+" "+car.color);
//  display1();
// var data=[{name:"Surya",age:21},{name:"Deepak",age:22},{name:"SreeKrishnnaa",age:21}];
// data.filter(age).map((c)=>{console.log(c.age),console.log(c.name);})
// function age(c){
//     if(c.age>20){
//         console.log(c.name);
//     }
// }
// //category:Work,Personal Space    sub_category:meeting ,project duration:00:40:21 Task:client meeting,daily scrum

var datas=[{category:"Work",Sub_category:"meeting",project_duration:"00:40:21",Task:"dailyscrum"},
{category:"Personalspace",Sub_category:"project",project_duration:"00:40:11",Task:"clientmeeting"},
{category:"Work",Sub_category:"meeting",project_duration:"00:30:21",Task:"clientmeeting"},
{category:"Personalspace",Sub_category:"meeting",project_duration:"01:00:21",Task:"dailyscrum"},
{category:"Work",Sub_category:"meeting",project_duration:"01:00:21",Task:"Mall_handlermod"},
{category:"Work",Sub_category:"meeting",project_duration:"01:00:21",Task:"Mall_handlermod"}

];
function renderData() {
    const dataContainer = document.getElementById("dataContainer");


    datas.forEach(data => {
        const dataItem = document.createElement("div");
        dataItem.classList.add("dataItem");
        dataItem.innerHTML = `
            <p><strong>Category:</strong> ${data.category}</p>
            <p><strong>Sub Category:</strong> ${data.Sub_category}</p>
            <p><strong>Project Duration:</strong> ${data.project_duration}</p>
            <p><strong>Task:</strong> ${data.Task}</p> <br>
        `;
        dataContainer.appendChild(dataItem);
    });
}