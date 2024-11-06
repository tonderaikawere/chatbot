function chatbot(input) {
    let output="";
    input = input.tolowercase();
    if (input.includes("hello")|| input.includes("hi")){
        output ="Hello, nice to meet you!";
    } else if (input.includes("how are you")){
     output ="I'm doing fine, thank you for asking.";
    }
     else if (input.includes("What is your name")){
     output ="My name is Quinton,i'm a chatbot.";
    }
     else if (input.includes("Who is Quinton from Uncommon")){
     output ="Quinton's education at Uncommon has provided him with a strong foundation in both theoretical knowledge and practical skills, shaping his career goals towards innovative and sustainable technology solutions.";
    }
     else {
     output ="Sorry, i only know Quinton from Uncommon and  his Education, He also teaches scratch in local schools at Emganwini.";
    }
    return output;
    
}
//Display the bot message on the chat
function displayUserMessage(message){
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userText.classList.add("avatar");
    let userText = document.createElement("div")
    userText.classList.add("text");
    userText.innerHTML= message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;

}
//Display the bot message on the chat
function displayBotMessage(message){
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar=document.createElement("div");
    botText.classList.add("avatar");
    let botText=document.createElement("div")
    botText.classList.add("text");
    botText.innerHTML=message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop=chat.scrollHeight;

}
//send the user message and get the bot response
function sendMessage(){
    let input= document.getElementById("input").value ;
    if(input){
        displayUserMessage(input);
        let output= chatbot(input);
        setTimeout(function(){
            displayBotMessage(output);
        },1000);
        document.getElementById("input").value ="";
    }
    
}
//Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);
//Add a keypress event listener to the button
document.getElementById("input").addEventListener("keypress", function(event){
    if(event.keyCode == 13){
        sendMessage();
    }
});

