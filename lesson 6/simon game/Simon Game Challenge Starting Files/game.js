const buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let isFirstStarting = true
let level = 0
// תפקידה של הפעולה להתקדם שלב
function nextSequence() {
  level++
  $("#level-title").text("Level " + level)

  // יצירת מספר רנדומלי
  const randomNumber = Math.floor(Math.random() * 4)
  // קבלת צבע רנדומלי מתוך מערך הצבעים ע"י המספר הרנדומלי
  const randomChosenColour = buttonColours[randomNumber]
  //   הוספת הצבע הנבחר למערך המשחק
  gamePattern.push(randomChosenColour)
  //   הוספת אנימצי לכפתור שנבחר
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
  // קריאה לפונקציה שתשמיע קול
  // מעבירים לה את הצבע
  makeSound(randomChosenColour)
}

// האזנה ללחיצות על הכפתורים ומיפוי הצבעים שנלחצו לתוך מערך
// userClickedPattern[]
$(".btn").on("click", function () {
  const userChosenColor = $(this).attr("id")
  userClickedPattern.push(userChosenColor)
  // קריאה לפונקציה שתשמיע קול
  // מעבירים לה את הצבע
  makeSound(userChosenColor)
  animatePress(userChosenColor)
  checkAnswer(userClickedPattern.length - 1)
})

// האזנה ללחיצה על כל כפתור שהוא לצורך התחלת המשחק
$(document).on("keydown", function () {
  if (isFirstStarting) {
    nextSequence()
    isFirstStarting = false
  }
})

// פונקציה שיודעת לקבל צבע ולהשמיע את הצבע לפי הנתיב
function makeSound(colorName) {
  const sound = new Audio("sounds/" + colorName + ".mp3")
  sound.play()
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed")
  // השהיה של עשירית שנייה ולאחר מכן הפפרמטר הראשון יתבצע - הפונקציה שסופקה
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed")
  }, 100)
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] != userClickedPattern[currentLevel]) {
    makeSound("wrong")
    $("body").addClass("game-over")
    setTimeout(function () {
      $("body").removeClass("game-over")
    }, 200)
    $("#level-title").text("Game Over, Press Any Key to Restart")
    return restart()
  }

  if (gamePattern.length == userClickedPattern.length) {
    userClickedPattern = []
    setTimeout(function () {
      nextSequence()
    }, 1000)
  }
}

function restart() {
  gamePattern = []
  userClickedPattern = []
  level = 0
  isFirstStarting = true
}
