class intermediaire_blackandwhitematches extends Phaser.Scene {
    constructor() {
      super('intermediaire_blackandwhitematches');
  
    }
  
  
    init(){}
    preload(){}
  
  
    create(){

      // mise en place
      scene = 'intermediaire_blackandwhitematches';

      this.physics.resume();
      loopfalse=0;
      isEnd=0;

      background1 = this.add.sprite(0,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      this.anims.create({
        key: 'anim_background',
        frames: this.anims.generateFrameNumbers('background',{start:0,end:45}),
        frameRate: 8,
        repeat: -1
      });
      background1.anims.play('anim_background',true);

      // win/lose
      ecran_victoire = this.add.sprite(960,540,'win').setDepth(5).setVisible(false);
      this.anims.create({
        key: 'anim_win',
        frames: this.anims.generateFrameNumbers('win',{start:0,end:13}),
        frameRate: 20,
        repeat: 0
      });
      ecran_defaite = this.add.sprite(960,540,'lose').setDepth(5).setVisible(false);
      this.anims.create({
        key: 'anim_lose',
        frames: this.anims.generateFrameNumbers('lose',{start:0,end:13}),
        frameRate: 20,
        repeat: 0
      });

      bouton_continue = this.add.image(960,900,'bouton_continue').setDepth(10).setVisible(false).setInteractive();
      bouton_continue.on('pointerdown',onClickContinue,this);

      bouton_yes = this.add.image(560,950,'bouton_yes').setDepth(10).setVisible(false).setInteractive();
      bouton_yes.on('pointerdown',onClickYes,this);
      bouton_no = this.add.image(1360,950,'bouton_no').setDepth(10).setVisible(false).setInteractive();
      bouton_no.on('pointerdown',onClickNo,this);

      // compte à rebours + chronomètre
      car3 = this.add.image(960,540,'car3').setDepth(2).setVisible(true);
      car2 = this.add.image(960,540,'car2').setDepth(2).setVisible(false);
      car1 = this.add.image(960,540,'car1').setDepth(2).setVisible(false);

      chrono10 = this.add.image(100,100,'chrono10').setDepth(2).setVisible(false);
      chrono9 = this.add.image(100,100,'chrono9').setDepth(2).setVisible(false);
      chrono8 = this.add.image(100,100,'chrono8').setDepth(2).setVisible(false);
      chrono7 = this.add.image(100,100,'chrono7').setDepth(2).setVisible(false);
      chrono6 = this.add.image(100,100,'chrono6').setDepth(2).setVisible(false);
      chrono5 = this.add.image(100,100,'chrono5').setDepth(2).setVisible(false);
      chrono4 = this.add.image(100,100,'chrono4').setDepth(2).setVisible(false);
      chrono3 = this.add.image(100,100,'chrono3').setDepth(2).setVisible(false);
      chrono2 = this.add.image(100,100,'chrono2').setDepth(2).setVisible(false);
      chrono1 = this.add.image(100,100,'chrono1').setDepth(2).setVisible(false);

      this.time.addEvent({
        delay: 1000,
        callback: ()=>{
          car3.setVisible(false);
          car2.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 2000,
        callback: ()=>{
          car2.setVisible(false);
          car1.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 3000,
        callback: ()=>{
          car1.setVisible(false);
          chrono10.setVisible(true);
        },
        loop: false
      });      
      this.time.addEvent({
        delay: 4000,
        callback: ()=>{
          chrono10.setVisible(false);
          chrono9.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 5000,
        callback: ()=>{
          chrono9.setVisible(false);
          chrono8.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 6000,
        callback: ()=>{
          chrono8.setVisible(false);
          chrono7.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 7000,
        callback: ()=>{
          chrono7.setVisible(false);
          chrono6.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 8000,
        callback: ()=>{
          chrono6.setVisible(false);
          chrono5.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 9000,
        callback: ()=>{
          chrono5.setVisible(false);
          chrono4.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 10000,
        callback: ()=>{
          chrono4.setVisible(false);
          chrono3.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 11000,
        callback: ()=>{
          chrono3.setVisible(false);
          chrono2.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 12000,
        callback: ()=>{
          chrono2.setVisible(false);
          chrono1.setVisible(true);
        },
        loop: false
      });
      this.time.addEvent({
        delay: 13000,
        callback: ()=>{
          chrono1.setVisible(false);
          isEnd=1;
        },
        loop: false
      });


      // formes
      static1 = this.add.image(170,600,'carre_noir').setScale(1.5);
      static2 = this.add.image(500,340,'triangle_blanc').setScale(1.5);
      static3 = this.add.image(800,180,'rond_noir').setScale(1.5);
      static4 = this.add.image(1120,180,'rond_blanc').setScale(1.5);
      static5 = this.add.image(1420,340,'triangle_noir').setScale(1.5).setInteractive();
      static6 = this.add.image(1750,600,'carre_blanc').setScale(1.5);



      forme1 = this.add.image(960,800,'carre_blanc').setScale(1.5).setVisible(true).setInteractive();
      this.input.setDraggable(forme1);

      forme2 = this.add.image(960,800,'carre_noir').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme2);

      forme3 = this.add.image(960,800,'rond_blanc').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme3);

      forme4 = this.add.image(960,800,'rond_noir').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme4);

      forme5 = this.add.image(960,800,'carre_blanc').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme5);

      forme6 = this.add.image(960,800,'rond_noir').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme6);

      forme7 = this.add.image(960,800,'rond_blanc').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme7);

      forme8 = this.add.image(960,800,'triangle_blanc').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme8);

      forme9 = this.add.image(960,800,'carre_noir').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme9);

      forme10 = this.add.image(960,800,'triangle_blanc').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme10);

      forme11 = this.add.image(960,800,'triangle_noir').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme11);

      forme12 = this.add.image(960,800,'triangle_noir').setScale(1.5).setInteractive().setVisible(false);
      this.input.setDraggable(forme12);



      this.input.on('dragstart', function (pointer, gameObject) {this.children.bringToTop(gameObject);}, this);

      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });


      




      
    }

    


  
  
    update(){

      if (forme1.x<1850 && forme1.x>1650 && forme1.y<700 && forme1.y>500) {
        forme1.destroy();
        forme2.setVisible(true);
      }

      if (forme2.x<270 && forme2.x>70 && forme2.y<700 && forme2.y>500) {
        forme2.destroy();
        forme3.setVisible(true);
      }

      if (forme3.x<1220 && forme3.x>1020 && forme3.y<280 && forme3.y>80) {
        forme3.destroy();
        forme4.setVisible(true);
      }

      if (forme4.x<900 && forme4.x>700 && forme4.y<280 && forme4.y>80) {
        forme4.destroy();
        forme5.setVisible(true);
      }

      if (forme5.x<1850 && forme5.x>1650 && forme5.y<700 && forme5.y>500) {
        forme5.destroy();
        forme6.setVisible(true);
      }

      if (forme6.x<900 && forme6.x>700 && forme6.y<280 && forme6.y>80) {
        forme6.destroy();
        forme7.setVisible(true);
      }

      if (forme7.x<1220 && forme7.x>1020 && forme7.y<280 && forme7.y>80) {
        forme7.destroy();
        forme8.setVisible(true);
      }

      if (forme8.x<600 && forme8.x>400 && forme8.y<440 && forme8.y>240) {
        forme8.destroy();
        forme9.setVisible(true);
      }

      if (forme9.x<270 && forme9.x>70 && forme9.y<700 && forme9.y>500) {
        forme9.destroy();
        forme10.setVisible(true);
      }

      if (forme10.x<600 && forme10.x>400 && forme10.y<440 && forme10.y>240) {
        forme10.destroy();
        forme11.setVisible(true);
      }

      if (forme11.x<1520 && forme11.x>1320 && forme11.y<440 && forme11.y>240) {
        forme11.destroy();
        forme12.setVisible(true);
      }

      if (forme12.x<1520 && forme12.x>1320 && forme12.y<440 && forme12.y>240) {
        forme12.destroy();
      }






      // condition de victoire
      if (forme12.x<1520 && forme12.x>1320 && forme12.y<440 && forme12.y>240 && loopfalse == 0) {
        isEnd=0;
        loopfalse = 1;
        this.physics.pause();
        ecran_victoire.setVisible(true);
        ecran_victoire.anims.play('anim_win',true);
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            bouton_continue.setVisible(true);
          },
          loop: false
        });
      }
      // condition de défaite
      if (isEnd == 1 && loopfalse == 0) {
        isEnd=0;
        loopfalse = 1;
        this.physics.pause();
        ecran_defaite.setVisible(true);
        ecran_defaite.anims.play('anim_lose',true);
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            bouton_yes.setVisible(true);
          },
          loop: false
        });
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            bouton_no.setVisible(true);
          },
          loop: false
        });
      }






    }
  
  
}

