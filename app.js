const hamburger = document.querySelector(
	'.header .nav-bar .nav-list .hamburger'
);

const mobile_menu = document.querySelector(
	'.header .nav-bar .nav-list ul'
);



hamburger.addEventListener('click',() =>{
 hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

window.onscroll = function()
{
	if(document.body.scrollTop>200||document.documentElement.scrollTop>200){
		document.getElementById("header").style.backgroundColor = 'black';
	}else{
		document.getElementById("header").style.backgroundColor = 'transparent';
	}
}
