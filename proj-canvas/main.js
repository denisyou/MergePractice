$(document).ready(function(){
    let mapArray, ctx, currentImgMainX, currentImgMainY;
    let imgMountain, imgMain, imgEnemy;
    
    // Map info
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    // draw main char
    imgMain = new Image();
    imgMain.src = "proj-canvas/images/spriteSheet.png"
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function() {
      ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);  
    };
    
    // Mountain and enemy
    imgMountain = new Image();
    imgMountain.src = "proj-canvas/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "proj-canvas/images/Enemy.png";
    imgMountain.onload = function() {
        imgEnemy.onload = function() {
            for ( let x in mapArray ) {
                if (mapArray[x] == 1) { // mountain
                    ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                } else if (mapArray[x] == 3) { // enemy
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        };
    };
    
    // Key Control
    $(document).keydown(function(e) {
        let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
        e.preventDefault();
        switch(e.which) {
            case 37:
                targetImgMainX = currentImgMainX - 200;
                targetImgMainY = currentImgMainY;
                cutImagePositionX = 175;
                break;
            case 38:
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY - 200;
                cutImagePositionX = 355;
                break;
            case 39:
                targetImgMainX = currentImgMainX + 200;
                targetImgMainY = currentImgMainY;
                cutImagePositionX = 540;
                break;
            case 40:
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY + 200;
                cutImagePositionX = 0;
                break;
            default:
                return;
                        
        }
    
    
        // 
        if (targetImgMainX <= 400 && targetImgMainX >= 0 && targetImgMainY <= 400 && targetImgMainY >= 0) {
            targetBlock = targetImgMainX/200 + targetImgMainY/200*3;
        } else {
            targetBlock = -1;
        }

        ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
        if (targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3) {

        } else {
            $("#talkBox").text("")
            currentImgMainX = targetImgMainX;
            currentImgMainY = targetImgMainY;
        }
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX, currentImgMainY,200,200);

        switch(mapArray[targetBlock]) {
            case undefined:
                $("#talkBox").text("邊界");
                break;
            case 1:
                $("#talkBox").text("有山");
                break;
            case 2:
                $("#talkBox").text("抵達終點!");
                break;
            case 3:
                $("#talkBox").text("嗨~");
                break;

        }
    });
});

