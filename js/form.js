class Form{
constructor(){

this.input=createInput("Player Name: ")
this.button=createButton("Start Race")
this.greeting=createElement("h1")


}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();

}

display(){
var title=createElement("h2");
title.html("Car Racing");
title.position(430,0);


this.input.position(300,160);


this.button.position(300,200);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1
player.index=playerCount;
player.update();
player.updateCount(playerCount);


this.greeting.html("Welcome To The Race "+player.name)
this.greeting.position(240,160)


})

}







}
















