// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;  
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			document.getElementById("show_text").innerHTML="YOU DID NOT JUST CLICK ON ON AN ALPHABET KEY";
        }else if((keyPressed >=48 && keyPressed<=57))
		{
			document.getElementById("show_text").innerHTML="YOU DID NOT JUST CLICK ON ON AN NUMBER KEY";
        }else if((keyPressed >=37 && keyPressed <=40))
		{
            document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN ARROW KEY >:<";
		}else if((keyPressed == 17)){		
			document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN SPECIAL KEY >:<";
		}else if((keyPressed == 18)){		
			document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN SPECIAL KEY >:<";
		}else if((keyPressed == 13)){		
			document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN SPECIAL KEY >:<";
		}else if((keyPressed == 16)){		
			document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN SPECIAL KEY >:<";
		}else if((keyPressed == 32)){		
			document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN SPECIAL KEY >:<";
		}else{
			document.getElementById("show_text").innerHTML="HOW DARE YOU PRESE AN RANDOM KEY >:<";
		}
}