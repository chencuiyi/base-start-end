const panels = document.querySelectorAll(".panel");
panels.forEach((panel)=>{
	panel.addEventListener('click',()=>{
		console.log('click');
		//消除其他的active
		removeActiveClass();
		// 添加焦点
		panel.classList.add('active');
	})
});
function removeActiveClass(){
	panels.forEach(panel=>{
		panel.classList.remove('active');
	})
}