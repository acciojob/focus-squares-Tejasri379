//your JS code here. If required.
const boxes=document.querySelectorAll(".square")
boxes.forEach((square)=>{
	square.addEventListener("mouseover",(e)=>{
		console.log(e.target.id)
		changeColor(e.target.id)
	})
	square.addEventListener("mouseout",(e)=>{
		boxes.forEach((square)=>{
			square.style.background=`#E6E6FA`
		})
	})
})

function changeColor(hoveredBoxId){
	boxes.forEach((square)=>{
		if(square.id!=hoveredBoxId){
			square.style.background=`#6F4E37`
		}
	})
}