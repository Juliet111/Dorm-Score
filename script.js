const username=document.getElementById("name-id")
const email=document.getElementById("email-id")
const university=["USC","UCLA","CSUN","Cal Poly Panoma","UCI","LMU"]
const univ=document.getElementsByClassName('uni')
const dorm=document.getElementsByClassName('dorm')
const referal=document.getElementById('referal')
const feedback=document.getElementById('feedback')
const submitbutton=document.getElementById("submit-button")

submitbutton.addEventListener('click',()=>{
    var items=localStorage.getItem("reviews")
    var uni;
    var dorms=[]
   for(let i=0;i<univ.length;i++){
    if(univ[i].checked==true){
        uni=university[i]
    }
   }
   for(let i=0;i<dorm.length;i++){
    if(dorm[i].checked==true){
        dorms.push(dorm[i].value)
    }
   }
    var data={
        "name":username.value,
        "email":email.value,
        "university":uni,
        "dorm":dorms,
        "referal":referal.value,
        "feedback":feedback.value
    }
    
    if(items===null)
    {
        let finaldata=[]
        finaldata.push(data)
        localStorage.setItem("reviews",JSON.stringify(finaldata));
    }else{
        items=((JSON.parse(items)))
        items.push(data)
        localStorage.setItem("reviews",JSON.stringify(items));
    }   
})

