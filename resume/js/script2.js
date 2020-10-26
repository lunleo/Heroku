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
          .sendGetRequest(`https://reqres.in/api/users/${counter}`, 
            (request) => {
              const data = (JSON.parse(request.responseText));
              first_name.innerHTML=data.data.first_name;
              last_name.innerHTML=' ' + data.data.last_name;
              image.src=data.data.avatar;
              email.innerHTML=data.data.email;
              Job.innerHTML='Experience';
              const company_name=data.ad.company;
              const url=data.ad.url;
              const text=data.ad.text;
              content.innerHTML=`
                <ul>
                    <li>${company_name} <span><a href="${url}">${url}</a></span></li>
                    <div class="Text">${text}</div>
                </ul>
                                `;
            
              if (counter==12){
                  counter=0;
              }
              counter++;
              
            });
            
            
   }
  });