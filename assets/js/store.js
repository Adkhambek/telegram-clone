const data = [
    {
        id: 1,
        name: "Adham Muzaffarov",
        phone: "+998 99 8000334",
        avatar: "1.jpg",
        username: "Heaven_8",
        bio: "",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 2,
        name: "Abdulboriy",
        phone: "+998 99 8612931",
        avatar: "4.jpg",
        username: "Straight_path0599",
        bio: "",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 3,
        name: "Bobir aka",
        phone: "+998 93 6667626",
        avatar: "3.jpg",
        username: "MrBobyr",
        bio: "Мммм дааа зачем",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 4,
        name: "Abdulloh English",
        phone: "+998 97 7413933",
        avatar: "5.jpg",
        username: "Ismoilov_Abdulloh",
        bio: "Beshikdan to qabrgacha ilm izla",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 5,
        name: "Alisher",
        phone: "+998 94 6611082",
        avatar: "7.jpg",
        username: "LazyPerfectionist",
        bio: "Receive the message to realise the messenger",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 6,
        name: "Fotima",
        phone: "+998 93 1600663",
        avatar: "6.jpg",
        username: "",
        bio: "",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 7,
        name: "Muhammad",
        phone: "+998 90 1270111",
        avatar: "8.jpg",
        username: "givmeaproofthatiexist",
        bio: "Give me proof that i exist",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 8,
        name: "Abdulazizkhan",
        phone: "+998 99 8835336",
        avatar: "9.jpg",
        username: "Richkhan",
        bio: "ما أصابك لم يكن ليخطئُك وما يخطئُك لم يكن ليُصيبك",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            },
            {
                body: "Qalesan",
                date: "12:16 AM",
                isMine: false  
            }
        ]
    },
    {
        id: 9,
        name: "Sarvar",
        phone: "Hidden",
        avatar: "10.jpg",
        username: "Richkhan",
        bio: "",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    },
    {
        id: 10,
        name: "Bahtiyor",
        phone: "+998 99 8970047",
        avatar: "11.jpg",
        username: "",
        bio: "",
        messages: [
            {
                body: "Assalomu alekum",
                date: "12:15 AM",
                isMine: false
            },
            {
                body: "Valekum Assalom",
                date: "12:16 AM",
                isMine: true  
            }
        ]
    }
] 



renderUser(data) 

function renderUser(data){
    for(let item of data){
       let lastMessage = item.messages[item.messages.length-1]
       newDealogElement(item.avatar, item.name, lastMessage.isMine, lastMessage.body, lastMessage.date)  
      
    }
} 


function newDealogElement(image, username, isMine, lastMessage, time){
    let dialogList = document.querySelector(".dialog__list")
    const dialogItem = document.createElement("li")
    dialogItem.setAttribute("class","dialog__item")
    const dialogAvatar = document.createElement("img")
    dialogAvatar.setAttribute("src","./assets/images/placeholder/"+image)
    dialogAvatar.setAttribute("alt","dialog avatar")
    dialogAvatar.setAttribute("class","dialog__avatar")
    const detailBox =  document.createElement("div")
    detailBox.setAttribute("class","dialog__detail")
    const userName = document.createElement("h2")
    userName.setAttribute("class","dialog__user-name")
    userName.textContent = username
    const dialogMessage = document.createElement("p")
    dialogMessage.setAttribute("class","dialog__message")
    dialogMessage.textContent = lastMessage
    const sender = document.createElement("span")
    sender.setAttribute("class", "sender")  
    sender.textContent = "You:"
    const dialogRight = document.createElement("div")
    dialogRight.setAttribute("class","dialog__right")
    const faCheck = document.createElement("span")
    faCheck.setAttribute("class","fas fa-check")
    const dialogTime = document.createElement("p")
    dialogTime.setAttribute("class","dialog__time")
    dialogTime.textContent = time

    if(isMine){
        dialogRight.appendChild(faCheck)
        dialogMessage.prepend(sender)
    }
    dialogItem.appendChild(dialogAvatar)
    detailBox.appendChild(userName)
    detailBox.appendChild(dialogMessage)
    dialogItem.appendChild(detailBox)
    dialogRight.appendChild(dialogTime)
    dialogItem.appendChild(dialogRight)
    dialogList.appendChild(dialogItem)


}

