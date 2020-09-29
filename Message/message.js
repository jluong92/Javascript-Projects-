//declare sendBtn variable and target sendBTN class
const sendBtn = document.querySelector("#sendBtn");

//declare messageIn variable and target messageIn class
const messageIn = document.querySelector("#messageIn");

//declare messageOut variable and target messageOut class
const messageOut = document.querySelector("#messageOut");

//add click event listener to send button along with creating new vairable sendMsg
sendBtn.addEventListener("click", sendMsg);

function sendMsg() {
  //store type in value to "content" variable
  let content = messageIn.value;
  if (content === "") {
    alert("Please Pass A Message");
  } else {
    //print out "content"
    messageOut.innerHTML = content;
    //clear out "content"
    messageIn.value = "";
  }
}

//array of birthdays
const birthdays = [{ name: "Jeremy Luong", birthMonth: 6, birthDate: 1 }];

//get today's date & month
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDay();

//function to compare today's date & month to array of birthdays
birthdays.find((it) => {
  if (it.birthDate === date && it.birthMonth === month) {
    return alert("Happy Birthday, " + it.name + "!" + "🎂");
  }
});
