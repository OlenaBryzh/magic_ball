const answers = [
  "It depends on the context.",
  "That's a complex issue with no easy answer.",
  "I'm not sure.",
  "Yes, in some cases, but not all.",
  "No, in some cases, but not all.",
  "It's a matter of personal preference.",
  "It varies from person to person.",
  "Generally speaking, yes.",
  "Generally speaking, no.",
  "It's a topic of ongoing debate.",
  "It's possible, but not guaranteed.",
  "It's unlikely, but not impossible.",
  "That's a subjective question.",
  "It's a matter of perspective.",
  "Some people believe that, while others don't.",
  "In some situations, yes, and in others, no.",
  "Ultimately, the decision is up to you."
]

// animations related consts
const keyframes = {
  shake: [
    { transform: "translate(-2px, -2px)" },
    { transform: "translate(-10px, 0px)" },
    { transform: "translate(10px, 12px)"},
    { transform: "translate(1px, -1px)"},
  ],
  rotate: [
    { transform: "rotateY(0deg) rotateZ(0deg)" },
    { transform: "rotateY(360deg) rotateZ(360deg)" },
  ]
}

const timingOptions = {
  shake: {
    duration: 300,
    iterations: 3.5,
  },
  rotate: {
    duration: 700,
    iterations: 1.8,
  }
}

// animations related functions
const shakeIt = () => {
  document.getElementById("shake")
  .animate(keyframes.shake,timingOptions.shake);
  document.getElementById("hole")
  .animate(keyframes.shake,timingOptions.shake);
}

const fastSpining = () => {
  document.getElementById("cube")
  .animate(keyframes.rotate,timingOptions.rotate);
}

// 'asking-aswering' flow logic
const giveAnswer = (event) => {
  if(event.key === "Enter" && document.getElementById("question").value.length > 1){
    shakeIt();
    fastSpining()
    let timeout
    timeout = setTimeout(randomAnswer, 1100);
  }  
}

const randomAnswer = () => {
  let answer = answers[(Math.floor(Math.random() * answers.length))]
  document.getElementById("bubble").style.opacity = "0.6"
  document.getElementById("bubbleContent").innerHTML = answer
}

const clearAswer = () => {
  document.getElementById("bubble").style.opacity = "0"
}

const clearInput = () => {
  document.getElementById("question").value = "";
}

// execution
window.onload = clearInput;
document.getElementById("shake").onclick = shakeIt
document.getElementById("question").addEventListener("keypress", giveAnswer)
document.getElementById("question").addEventListener("input", clearAswer)
