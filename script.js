//your JS code here. If required.
const boxes=document.querySelectorAll(".square")
boxes.forEach((square)=>{
	box.addEventListener("mouseover",(e)=>{
		console.log(e.target.id)
		changeColor(e.target.id)
	})
	// box.addEventListener("mouseout",(e)=>{
	// 	square.style.background=`#E6E6FA`
	// })
})

function changeColor(hoveredBoxId){
	boxes.forEach((square)=>{
		if(square.id!=hoveredBoxId){
			square.style.background=`#6F4E37`
		}
	})
}