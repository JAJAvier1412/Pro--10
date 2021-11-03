var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","a23635a2-832a-48cc-a9c4-7fee741e0e06"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z3HO0RuKfTLy7NznCwOxksrQ38KzDaz3","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":10,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"TgvK3SzEzyFf9BI79LKj0I9qlTJQpOzK","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":14},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"Hen3ToZuFpAx5jZu0eRzqFpUy3js_iWd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"a23635a2-832a-48cc-a9c4-7fee741e0e06":{"name":"kidportrait_13_1","sourceUrl":null,"frameSize":{"x":10,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"4b4s4mDQ2TyHrsTIBRybE4HsVTj1Yju9","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":14},"rootRelativePath":"assets/a23635a2-832a-48cc-a9c4-7fee741e0e06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 10;
var win = createSprite(364, 280, 70, 60);
win.shapeColor = "gold";

var player = createSprite(30, 51, 10, 10);
player.setAnimation("kidportrait_13_1");
//Todas las lineas
var top1 = createSprite(20,120,150,5);
top1.shapeColor = "black";
var top2 = createSprite(134,0,5,220);
top2.shapeColor = "black";
var top3 = createSprite(3,156,350,5);
top3.shapeColor = "black";
var top4 = createSprite (171,110,5,90);
top4.shapeColor = "black";
var top5 = createSprite(269,92,200,5);
top5.shapeColor = "black";
var top6 = createSprite(300,132,190,5);
top6.shapeColor = "black";
var top7 = createSprite(210,175,5,80);
top7.shapeColor = "black";
var top8 = createSprite(127,216,170,5);
top8.shapeColor = "black";
var top9 = createSprite(62,289,5,150);
top9.shapeColor = "black";
var top10= createSprite(199,360,280,5);
top10.shapeColor = "black";
var top11 = createSprite(250,315,300,5);
top11.shapeColor = "black";
var top12 = createSprite(203, 277, 5, 70);
top12.shapeColor = "black";
var top13 = createSprite(262, 200, 5, 140);
top13.shapeColor = "black";
var top14 = createSprite(321, 240, 5, 150);
top14.shapeColor = "black";
//Fin de las lineas 
//Todos los obstaculos

var obs1 = createSprite(4, 139, 8, 8);
obs1.setAnimation("enemy1");
var obs2 = createSprite(200, 86, 10, 10);
obs2.setAnimation("enemy1");
var obs3 = createSprite(240, 4, 10, 10);
obs3.setAnimation("enemy1");
var obs4 = createSprite(276, 0, 10, 10);
obs4.setAnimation("enemy1");
var obs5 = createSprite(299, 80, 10, 10);
obs5.setAnimation("enemy1");
var obs6 = createSprite(331, 80, 10, 10);
obs6.setAnimation("enemy1");
var obs7 = createSprite(356, 123, 10, 10);
obs7.setAnimation("enemy1");
var obs8 = createSprite(310, 94, 10, 10);
obs8.setAnimation("enemy1");
var obs9 = createSprite(268, 123, 10, 10);
obs9.setAnimation("enemy1");
var obs10 = createSprite(227, 113, 10, 10);
obs10.setAnimation("enemy1");
var obs11 = createSprite(3, 177, 10, 10);
obs11.setAnimation("enemy1");
var obs12 = createSprite(3, 197, 10, 10);
obs12.setAnimation("enemy1");
var obs13 = createSprite(13, 392, 10, 10);
obs13.setAnimation("enemy1");
var obs14 = createSprite(48, 222, 10, 10);
obs14.setAnimation("enemy1");
var obs15 = createSprite(62, 380, 10, 10);
obs15.setAnimation("enemy1");
var obs16 = createSprite(290, 352, 10, 10);
obs16.setAnimation("enemy1");
var obs17 = createSprite(243, 324, 10, 10);
obs17.setAnimation("enemy1");
var obs18 = createSprite(185, 324, 10, 10);
obs18.setAnimation("enemy1");
var obs19 = createSprite(135, 348, 10, 10);
obs19.setAnimation("enemy1");
var obs20 = createSprite(120, 297, 10, 10);
obs20.setAnimation("enemy1");
var obs21 = createSprite(152, 220, 10, 10);
obs21.setAnimation("enemy1");
var obs22 = createSprite(185, 300, 10, 10);
obs22.setAnimation("enemy1");
var obs23 = createSprite(217, 300, 10, 10);
obs23.setAnimation("enemy1");
var obs24 = createSprite(243, 152, 10, 10);
obs24.setAnimation("enemy1");
var obs25 = createSprite(272, 304, 10, 10);
obs25.setAnimation("enemy1");
var obs26 = createSprite(294, 165, 10, 10);
obs26.setAnimation("enemy1");
createEdgeSprites();
function draw() {
 background("#00adbc");
 fill("#030317");
 textSize(24);
 text("Lives : " + life,25,27);
 drawSprites();
 if (keyDown("space")) {
obs1.velocityX = 7;
obs2.velocityY = 5;
obs3.velocityY = 5;
obs4.velocityY = 5;
obs5.velocityY = 5;
obs6.velocityY = .5;
obs7.velocityY = .5;
obs8.velocityY = .5;
obs9.velocityY = .5;
obs10.velocityY = .5;
obs11.velocityX = 3;
obs12.velocityX = -1;
obs13.velocityY = 3;
obs14.velocityY = 8;
obs15.velocityX = 6;
obs16.velocityY = 2;
obs17.velocityY = 2;
obs18.velocityY = 2;
obs19.velocityY = 2;
obs20.velocityY = 11;
obs21.velocityY = 11;
obs22.velocityY = 11;
obs23.velocityY = 11;
obs24.velocityY = 10;
obs25.velocityY = 10;
obs26.velocityY = 10;
 }
 if (keyDown("up")) {
   player.y = player.y + -3;
 }
 if (keyDown("down")) {
   player.y = player.y + 3;
 }
 if (keyDown("right")) {
   player.x = player.x + 3;
 }
 if (keyDown("left")) {
   player.x = player.x + -3;
 }
 player.bounceOff(edges);
 player.bounceOff(top1);
 player.bounceOff(top2);
 player.bounceOff(top3);
 player.bounceOff(top4);
 player.bounceOff(top5);
 player.bounceOff(top6);
 player.bounceOff(top7);
 player.bounceOff(top8);
 player.bounceOff(top9);
 player.bounceOff(top10);
 player.bounceOff(top11);
 player.bounceOff(top12);
 player.bounceOff(top13);
 player.bounceOff(top14);
 //Rebote de obstaculos
 obs1.bounceOff(top4);
 obs1.bounceOff(edges);
 obs2.bounceOff(top5);
 obs2.bounceOff(edges);
 obs3.bounceOff(edges);
 obs3.bounceOff(top5);
 obs4.bounceOff(edges);
 obs4.bounceOff(top5);
 obs5.bounceOff(edges);
 obs5.bounceOff(top5);
 obs6.bounceOff(edges);
 obs6.bounceOff(top5);
 obs7.bounceOff(edges);
 obs7.bounceOff(top5);
 obs7.bounceOff(top6);
 obs8.bounceOff(edges);
 obs8.bounceOff(top5);
 obs8.bounceOff(top6);
 obs9.bounceOff(edges);
 obs9.bounceOff(top5);
 obs9.bounceOff(top6);
 obs10.bounceOff(edges);
 obs10.bounceOff(top5);
 obs10.bounceOff(top6);
 obs11.bounceOff(edges);
 obs11.bounceOff(top7);
 obs12.bounceOff(edges);
 obs12.bounceOff(top7);
 obs13.bounceOff(edges);
 obs13.bounceOff(top3);
 obs14.bounceOff(edges);
 obs14.bounceOff(top8);
 obs15.bounceOff(edges);
 obs16.bounceOff(top10);
 obs16.bounceOff(top11);
 obs17.bounceOff(top10);
 obs17.bounceOff(top11);
 obs18.bounceOff(top10);
 obs18.bounceOff(top11);
 obs19.bounceOff(top10);
 obs19.bounceOff(top11);
 obs20.bounceOff(top11);
 obs20.bounceOff(top8);
 obs21.bounceOff(top11);
 obs21.bounceOff(top8);
 obs22.bounceOff(top11);
 obs22.bounceOff(top8);
 obs23.bounceOff(top11);
 obs23.bounceOff(top6);
 obs24.bounceOff(top11);
 obs24.bounceOff(top6);
 obs25.bounceOff(top11);
 obs25.bounceOff(top6);
 obs26.bounceOff(top11);
 obs26.bounceOff(top6);
 //condiciones si toca algun obstaculo
 if (player.isTouching(obs1) || (player.isTouching(obs2) || (player.isTouching(obs3) || (player.isTouching(obs4) || (player.isTouching(obs5) || (player.isTouching(obs6) || (player.isTouching(obs7) || (player.isTouching(obs8) || (player.isTouching(obs9) || (player.isTouching(obs10) || (player.isTouching(obs11) || (player.isTouching(obs12) || (player.isTouching(obs13) || (player.isTouching(obs14) || ((player.isTouching(obs15) || player.isTouching(obs16)) || (player.isTouching(obs17) || (player.isTouching(obs18) || (player.isTouching(obs19) || (player.isTouching(obs20) || (player.isTouching(obs21) || (player.isTouching(obs22) || (player.isTouching(obs23) || (player.isTouching(obs24) || (player.isTouching(obs25) || player.isTouching(obs26))))))))))))))))))))))))) {
   player.x = 30;
   player.y = 31;
   player.x = 30;
   player.y = 31;
   //Condicion de perder vidas 
   life = life - 1;
 }
 if (player.isTouching(win)) {
   fill("white");
   textSize(24);
   text("Ganaste!!!!", 200, 200);
 }
 
 if (life == 0-1) {
   fill("white");
   textSize(23);
   text("FIN DEL JUEGO :(", 145, 233);
   //grupo de velocidad X
   obs1.velocityX = 0;
   obs11.velocityX = 0;
   obs12.velocityX = 0;
   obs15.velocityX = 0;
   //grupo velocidad y
   obs2.velocityY = 0;
   obs3.velocityY = 0;
   obs4.velocityY = 0;
   obs5.velocityY = 0;
   obs6.velocityY = 0;
   obs7.velocityY = 0;
   obs8.velocityY = 0;
   obs9.velocityY = 0;
   obs10.velocityY = 0;
   obs13.velocityY = 0;
   obs14.velocityY = 0;
   obs16.velocityY = 0;
 }
 
 
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
