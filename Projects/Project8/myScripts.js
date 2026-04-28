// JavaScript Document

 var imgArray = new Array(
			'JelloCakeSm.jpg',
			'DutchOvenSm.jpg',
			'ForkSalad.jpg',
			'RasberryIceCreamSm.jpg'
    );
	
		var titleArray = new Array(
			'Jello Cake',
			'Dutch Oven Cooking',
			'Salad',
			'Raspberry Ice Cream'
			
		);
			
		var imgPath = "Images/Fullsize/";
		
		     function swapImage(imgID) 
			{
				var theImage = document.getElementById('theImage');
				var textDiv = document.getElementById('bottomText');

				var newImg = imgArray[imgID];
				theImage.src = imgPath + newImg;

				var textTitle = titleArray[imgID];
				textDiv.innerHTML = textTitle;
			}


    function preloadImages() {
        for (var i = 0; i < imgArray.length; i++) {
            var tmpImg = new Image;
            tmpImg.src = imgPath + imgArray[i];
        }
    }