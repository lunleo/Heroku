let counter=1;

document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const btn = document.getElementById("change");
    const first_name=document.getElementById("first_name");
    const last_name=document.getElementById("last_name");
    const image=document.getElementById("image");
    const email=document.getElementById("email");
    const company_name=document.getElementById("company_name");
    const Job=document.getElementById("Job");
    const content=document.getElementById("content");
    btn.onclick=()=>{
       $ajaxUtils
          .sendGetRequest(`https://leonidlunin-practice8.herokuapp.com/users/${counter}`, 
            (request) => {
              const data = (JSON.parse(request.responseText))[0];
              first_name.innerHTML=data.first_name;
              last_name.innerHTML=' ' + data.last_name;
              //image.src=data.avatar;
              image.src=data.avatar;
              email.innerHTML=data.email;
                  
              if (counter==12){
                  counter=0;
              }
              counter++;
              
            });
    }
  });