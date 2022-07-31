//Adding Event Listeners For Buttons

let number = document.getElementsByClassName("numbers");
for (let j=0;j<number.length;j++){
    number.item(j).addEventListener('click',(e)=>{
        document.getElementById("calculation").textContent+=number.item(j).textContent;}
    )}
let operator=document.getElementsByClassName("operators");
for (let o=0;o<operator.length;o++){
    operator.item(o).addEventListener('click',(e)=>{
        document.getElementById("calculation").textContent+=operator.item(o).textContent;}
    )}

let allclear=document.getElementById("all-clear");
allclear.addEventListener('click',(e)=>{
    document.getElementById("calculation").textContent='';
    document.getElementById("result").textContent='';
    document.querySelector("#calculation").style.fontSize="x-large";
    document.querySelector("#result").style.fontSize="large"
})

let clear=document.getElementById("clear");
clear.addEventListener('click',(e)=>{
    let calculn=document.getElementById("calculation").textContent;
    calculn=calculn.slice(0,Number(calculn.length)-1)
    document.getElementById("calculation").textContent=calculn;
})

let trigo=document.getElementsByClassName("trigo-buttons");
for (let t=0;t<trigo.length;t++){
    trigo.item(t).addEventListener('click',(e)=>{
        document.getElementById("calculation").textContent+=trigo.item(t).textContent;}
)}

eql=document.getElementById("equals");
let s='';
eql.addEventListener('click',(e)=>{
    let calc=document.getElementById("calculation").textContent;
    for (let i=0;i<calc.length;i++){
        if (calc[i]=='x'){
            s+='*'
        }
        else if(calc[i]=='÷'){
            s+='/'
        }
        else if(calc[i]=='√'){
            rt=calc.slice(i+1,calc.length);      
            console.log(rt)
            s=Math.sqrt(rt)
            console.log(s)
            break
        }
        else{
            s+=calc[i]  
        }
       
    }
    if(calc.slice(0,3)=='Sin'){
        if (calc.slice(3)=='180'){
            s=0
        }
        else{
            s=Math.sin(Number((calc.slice(3))* (Math.PI / 180)))
        }  
    }
    else if(calc.slice(0,3)=='Cos'){
        if (calc.slice(3)=='90'){
            s=0
        }
        else{
            s=Math.cos(Number(calc.slice(3))* Math.PI / 180)}
    }
    else if(calc.slice(0,3)=='Tan'){
        if (calc.slice(3)=='90'){
            document.getElementById('result').textContent='∞'
        }
        else if(calc.slice(3)=='180'){
            s=0
        }
        else{
            s=Math.tan(Number(calc.slice(3))* Math.PI / 180) }
    }
    document.querySelector("#calculation").style.fontSize="large";
    document.getElementById('result').textContent=eval(s);
    document.querySelector("#result").style.fontSize="xx-large"
    s='';  
})