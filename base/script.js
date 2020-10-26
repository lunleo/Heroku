const name = document.getElementById("name")
const email = document.getElementById("email")
const avatar = document.getElementById("avatar")

const defaultData = {
    name: name.innerText,
    email: email.innerText,
    avatar: avatar.src
}

let i = 1;
name.onclick = function(){
    if (i === 12)
        i = 2
    if (i % 5 == 0){
        name.innerText = defaultData.name
        email.innerText = defaultData.email;
        avatar.src = defaultData.avatar;
    }else
      $ajaxUtils.sendGetRequest("https://reqres.in/api/users/" + i,
          (res) => {
              const json = JSON.parse(res.responseText).data;
              name.innerText = (json.first_name + ' ' + json.last_name)
              email.innerText = json.email
              avatar.src = json.avatar;
          }
      )
    i++;
}
