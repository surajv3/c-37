class Game {
constructor(){

}

getState(){

    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    })
}

update(state){
    database.ref('/').update({
        gameState:state 
    })
}





start(){

if(gameState===0){
    player = new Player();
    /*var playerCountRef=await database.ref("playerCount").onse("value");
    if(playerCountRef.exsits()){
        
        playerCount=playerCountRef.val();
        player.getCount();
    }*/
    player.getCount();

    form= new Form();
    form.display();
}

}

play(){
    form.hide();
    textSize(15)
    text("The Race Has Started",150,100)
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        var displayPosition=130;
        for(var plr in allPlayers){
            if (plr==="player"+player.index)
            fill("red")
            else{fill("black")}
        
        displayPosition+=20;
        textSize(15)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
        }
    }

if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=50
player.update()
}




}





















}