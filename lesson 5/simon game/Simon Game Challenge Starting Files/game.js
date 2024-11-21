const buttonColours = ["red", "blue", "green", "yellow"]
const gamePattern = []
const userClickedPattern = []

// תפקידה של הפעולה להתקדם שלב
function nextSequence() {
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
})

// פונקציה שיודעת לקבל צבע ולהשמיע את הצבע לפי הנתיב
function makeSound(colorName) {
  const sound = new Audio("sounds/" + colorName + ".mp3")
  sound.play()
}
