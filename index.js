let inputD = document.getElementById("DAY")
let inputM = document.getElementById("MONTH")
let inputY = document.getElementById("YEAR")

let outputD= document.querySelector(".DD")
let outputM= document.querySelector(".MM")
let outputY= document.querySelector(".YY")

let btn = document.querySelector(".bttn")





btn.addEventListener("click",(e)=>{
    //start days
    if(inputD.value.length == 2 || inputD.value.length == 1){
        
    }else{
        buttonInpu(inputD)
        document.querySelector(".Lday").classList.add("wrongColor")
        // e.preventDefault()
    }
    //end days
    //start month
    if(inputM.value.length == 2 || inputM.value.length == 1){
        
    }else{
        buttonInpu(inputM)
        document.querySelector(".Lday1").classList.add("wrongColor")
        // e.preventDefault()
    }
    //end month

    //start Years
    if(inputY.value.length == 4){
        
    }else{
        buttonInpu(inputY)
        document.querySelector(".Lday2").classList.add("wrongColor")
        
        // e.preventDefault()
    }
    //end Years
    calcDays()
})

function buttonInpu(name){
        name.classList.add("wrong")
    }

    function editTheOutput(input){
        input.innerHTML="- -"
        console.log(input);
    }

    function calcDays(){
        let today = new Date();
        let dob = new Date(parseInt(inputY.value), parseInt(inputM.value) - 1, parseInt(inputD.value)); // تاريخ الميلاد
    
        // حساب الفارق بين التاريخين
        let diffYears = today.getFullYear() - dob.getFullYear();
        let diffMonths = today.getMonth() - dob.getMonth();
        let diffDays = today.getDate() - dob.getDate();
    
        // التأكد من أن الفارق بالشهور يكون صحيحًا (بين 0 و 11)
        if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
            diffYears--;
            diffMonths += 12;
        }
    
        // عرض النتيجة
        outputY.innerHTML = diffYears ;
        outputM.innerHTML = diffMonths ;
        outputD.innerHTML = diffDays ;
    
        // في الواقع، يمكنك عرض الفارق الكلي بالأيام أيضًا
        // ولكن هذا يمكن أن يكون غير دقيق بناءً على الشهر والسنة الحالية
    }
    

    
    