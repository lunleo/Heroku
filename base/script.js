let counter=1;

document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const btn = document.getElementById("change");
    const first_name=document.getElementById("first_name");
    const last_name=document.getElementById("last_name");
    const image=document.getElementById("image");
    const email=document.getElementById("email");
    const company_name=document.getElementById("company_name");
    
    btn.onclick=()=>{
       $ajaxUtils
          .sendGetRequest("https://nodejs-serv.herokuapp.com/users/1", 
            (request) => {
              const data = (JSON.parse(request.responseText));
              first_name.innerHTML=data.first_name;
              last_name.innerHTML=' ' + data.last_name;
              image.src=data.avatar;
              email.innerHTML=data.email;
              Job.innerHTML='Experience';
              console.log(data);
            if (counter==12){
                  counter=0;
              }
              counter++;
              
            });
            
            
   }
  });