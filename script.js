//your JS code here. If required.
const boxes=document.querySelectorAll(".box")
boxes.forEach((box)=>{
	box.addEventListener("mouseover",(e)=>{
		console.log(e.target.id)
		changeColor(e.target.id)
	})
})

function changeColor(hoveredBoxId){
	boxes.forEach((box)=>{
		if(box.id!=hoveredBoxId){
			box.style.background=`#6F4E37`
		}
	})
}