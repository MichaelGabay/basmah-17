"use strict"

const h1 = document.querySelector("h1")
// הוספת קלאס
// h1.classList.add("color-red")
// הסרת קלאס
// h1.classList.remove("color-red")

// קבלת ערך של אטריביוט
document.querySelector("ul a").getAttribute("href")
// הוספת אטריביוט
document.querySelector("ul a").setAttribute("href", "https://youtube.com")
// שינוי טקסט
document.querySelector("ul a").textContent = "youtube"
