class expert_blackjump extends Phaser.Scene {
    constructor() {
      super('expert_blackjump');
  
    }
  
  
    init(){}
    preload(){}
  
  
    create(){

      // mise en place
      scene = 'expert_blackjump';

      this.physics.resume();
      loopfalse=0;
      isEnd=0;
      
      background1 = this.add.sprite(0,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      background2 = this.add.sprite(1920,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      background3 = this.add.sprite(3840,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      background4 = this.add.sprite(5760,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      background5 = this.add.sprite(7680,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      background6 = this.add.sprite(9600,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      //background7 = this.add.sprite(11520,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      //background8 = this.add.sprite(13440,0,'background').setOrigin(0,0).setScale(4).setDepth(-5);
      this.anims.create({
        key: 'anim_background',
        frames: this.anims.generateFrameNumbers('background',{start:0,end:45}),
        frameRate: 8,
        repeat: -1
      });
      background1.anims.play('anim_background',true);
      background2.anims.play('anim_background',true);
      background3.anims.play('anim_background',true);
      background4.anims.play('anim_background',true);
      background5.anims.play('anim_background',true);
      background6.anims.play('anim_background',true);
      //background7.anims.play('anim_background',true);
      //background8.anims.play('anim_background',true);

      decor_arriere1 = this.add.image(0,0,'decor_arriere').setOrigin(0,0).setDepth(-4);
      decor_arriere2 = this.add.image(3840,0,'decor_arriere').setOrigin(0,0).setDepth(-4);
      decor_arriere3 = this.add.image(7680,0,'decor_arriere').setOrigin(0,0).setDepth(-4);
      decor_arriere4 = this.add.image(11520,0,'decor_arriere').setOrigin(0,0).setDepth(-4);
      decor_avant1 = this.physics.add.image(0,0,'decor_avant').setImmovable(true).setSize(3840,100).setOffset(0,980).setOrigin(0,0).setDepth(-3);
      decor_avant1.body.setAllowGravity(false);
      decor_avant2 = this.physics.add.image(1106,0,'decor_avant').setImmovable(true).setSize(3840,100).setOffset(0,980).setOrigin(0,0).setDepth(-3);
      decor_avant2.body.setAllowGravity(false);
      decor_avant3 = this.physics.add.image(7680,0,'decor_avant').setImmovable(true).setSize(3840,100).setOffset(0,980).setOrigin(0,0).setDepth(-3);
      decor_avant3.body.setAllowGravity(false);
      decor_avant4 = this.physics.add.image(11520,0,'decor_avant').setImmovable(true).setSize(3840,100).setOffset(0,980).setOrigin(0,0).setDepth(-3);
      decor_avant4.body.setAllowGravity(false);
      
      decor_haut = this.add.image(3840,0,'decor_haut').setOrigin(0,0).setDepth(5000);

      /*contrôles*/cursors = this.input.keyboard.createCursorKeys();
      perso = this.physics.add.sprite(1500,875,'course').setSize(90,200);
      this.anims.create({
        key: 'anim_course',
        frames: this.anims.generateFrameNumbers('course',{start:0,end:13}),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: 'anim_saut',
        frames: this.anims.generateFrameNumbers('saut',{start:0,end:1}),
        frameRate: 10,
        repeat: -1
      });
      perso.anims.play('anim_course',true);
      this.physics.add.collider(perso,decor_avant1);
      this.physics.add.collider(perso,decor_avant2);
      this.physics.add.collider(perso,decor_avant3);
      this.physics.add.collider(perso,decor_avant4);

      camera = this.cameras.main.startFollow(perso);


      // win/lose
      ecran_victoire = this.add.sprite(960,540,'win').setDepth(9).setScrollFactor(0,0).setVisible(false);
      this.anims.create({
        key: 'anim_win',
        frames: this.anims.generateFrameNumbers('win',{start:0,end:13}),
        frameRate: 20,
        repeat: 0
      });
      ecran_defaite = this.add.sprite(960,540,'lose').setDepth(9).setScrollFactor(0,0).setVisible(false);
      this.anims.create({
        key: 'anim_lose',
        frames: this.anims.generateFrameNumbers('lose',{start:0,end:13}),
        frameRate: 20,
        repeat: 0
      });

      bouton_continue = this.add.image(960,900,'bouton_continue').setScrollFactor(0,0).setDepth(10).setVisible(false).setInteractive();
      bouton_continue.on('pointerdown',onClickContinue,this);

      bouton_yes = this.add.image(560,950,'bouton_yes').setScrollFactor(0,0).setDepth(10).setVisible(false).setInteractive();
      bouton_yes.on('pointerdown',onClickYes,this);
      bouton_no = this.add.image(1360,950,'bouton_no').setScrollFactor(0,0).setDepth(10).setVisible(false).setInteractive();
      bouton_no.on('pointerdown',onClickNo,this);


      // compte à rebours + chronomètre
      car3 = this.add.image(960,540,'car3').setScrollFactor(0,0).setVisible(true);
      car2 = this.add.image(960,540,'car2').setScrollFactor(0,0).setVisible(false);
      car1 = this.add.image(960,540,'car1').setScrollFactor(0,0).setVisible(false);

      chrono10 = this.add.image(100,100,'chrono10').setScrollFactor(0,0).setVisible(false);
      chrono9 = this.add.image(100,100,'chrono9').setScrollFactor(0,0).setVisible(false);
      chrono8 = this.add.image(100,100,'chrono8').setScrollFactor(0,0).setVisible(false);
      chrono7 = this.add.image(100,100,'chrono7').setScrollFactor(0,0).setVisible(false);
      chrono6 = this.add.image(100,100,'chrono6').setScrollFactor(0,0).setVisible(false);
      chrono5 = this.add.image(100,100,'chrono5').setScrollFactor(0,0).setVisible(false);
      chrono4 = this.add.image(100,100,'chrono4').setScrollFactor(0,0).setVisible(false);
      chrono3 = this.add.image(100,100,'chrono3').setScrollFactor(0,0).setVisible(false);
      chrono2 = this.add.image(100,100,'chrono2').setScrollFactor(0,0).setVisible(false);
      chrono1 = this.add.image(100,100,'chrono1').setScrollFactor(0,0).setVisible(false);



      // obstables
      bloc11 = this.physics.add.image(2500,300,'bloc1').setDepth(-2).setOrigin(0,0).setSize(200,200).setOffset(47,39).setImmovable(true);
      bloc11.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc11);

      bloc12 = this.physics.add.image(4000,750,'bloc1').setDepth(-2).setOrigin(0,0).setSize(200,200).setOffset(47,39).setImmovable(true);
      bloc12.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc12);

      bloc13 = this.physics.add.image(4500,750,'bloc1').setDepth(-2).setOrigin(0,0).setSize(200,200).setOffset(47,39).setImmovable(true);
      bloc13.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc13);

      bloc31 = this.physics.add.image(4700,540,'bloc3').setDepth(-2).setOrigin(0,0).setSize(200,400).setOffset(46,43).setImmovable(true);
      bloc31.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc31);

      bloc21 = this.physics.add.image(5300,330,'bloc2').setDepth(-2).setOrigin(0,0).setSize(400,200).setOffset(45,46).setImmovable(true);
      bloc21.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc21);

      bloc22 = this.physics.add.image(6600,740,'bloc2').setDepth(-2).setOrigin(0,0).setSize(400,200).setOffset(45,46).setImmovable(true);
      bloc22.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc22,persoOnBloc22,null,this);

      bloc32 = this.physics.add.image(7300,1000,'bloc3').setDepth(-2).setOrigin(0,0).setSize(200,400).setOffset(46,43).setImmovable(true);
      bloc32.body.setAllowGravity(false);
      this.physics.add.collider(perso,bloc32);




      // compte à rebours + chronomètre
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

      

    }
  
  
    update(){


      // perso
      perso.setVelocityX(500);
      if (perso.body.touching.down && cursors.up.isDown) {
        perso.setVelocityY(-700);
      }
      if (!perso.body.touching.down && cursors.up.isDown) {
        perso.anims.play('anim_saut',true);
        perso.setSize(150,120);
      }
      else {
        perso.anims.play('anim_course',true);
        perso.setSize(90,200);
      }




      // mouvement bloc 11
      if (bloc11.x <= 2500 && bloc11.y <= 300) {
        bloc11.setVelocityX(0).setVelocityY(500);
      }
      else if (bloc11.x <= 2500 && bloc11.y >= 700) {
        bloc11.setVelocityX(500).setVelocityY(0);        
      }
      else if (bloc11.x >= 3500 && bloc11.y >= 700) {
        bloc11.setVelocityX(0).setVelocityY(-500);        
      }
      else if (bloc11.x >= 3500 && bloc11.y <= 300) {
        bloc11.setVelocityX(-500).setVelocityY(0);        
      }


      // mouvement bloc 21
      if (bloc21.y <= 330) {
        bloc21.setVelocityY(300);
      }
      else if (bloc21.y >= 600) {
        bloc21.setVelocityY(-300);
      }


      // mouvement bloc 22
      if (bloc22.x <= 6060) {
        bloc22.setVelocityX(500);
      }
      else if (bloc22.x >= 6600) {
        bloc22.setVelocityX(-500);
      }


      // mouvement bloc 32
      if (bloc32.y <= 300) {
        bloc32.setVelocityY(500);
      }
      else if (bloc32.y >= 1000) {
        bloc32.setVelocityY(-500);
      }











      // condition de victoire
      if (isEnd == 1 && perso.x > 8100 && perso.y < 1180 && loopfalse == 0) {
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
      if (isEnd == 1 && perso.x < 7500 && loopfalse == 0 || perso.y > 1280 && loopfalse == 0) {
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


function persoOnBloc22(perso,bloc22){
  perso.setVelocityX(0);
}