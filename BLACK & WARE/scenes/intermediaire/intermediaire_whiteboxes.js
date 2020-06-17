class intermediaire_whiteboxes extends Phaser.Scene {
    constructor() {
      super('intermediaire_whiteboxes');
  
    }
  
  
    init(){}
    preload(){}
  
  
    create(){

      // mise en place
      scene = 'intermediaire_whiteboxes';
      casecounter = 0;
      isEnd=0;

      this.physics.resume();
      loopfalse=0;

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




      // cases
      wbcasenoire1 = this.add.image(0,0,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire2 = this.add.image(384,0,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire3 = this.add.image(768,0,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire4 = this.add.image(1152,0,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire5 = this.add.image(1536,0,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire6 = this.add.image(0,360,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire7 = this.add.image(384,360,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire8 = this.add.image(768,360,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire9 = this.add.image(1152,360,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire10 = this.add.image(1536,360,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire11 = this.add.image(0,720,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire12 = this.add.image(384,720,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire13 = this.add.image(768,720,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire14 = this.add.image(1152,720,'casenoire').setVisible(true).setOrigin(0,0);
      wbcasenoire15 = this.add.image(1536,720,'casenoire').setVisible(true).setOrigin(0,0);

      
      wbcaseblanche1 = this.add.image(0,0,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche1.on('pointerdown',onClickWB,this);
      wbcaseblanche2 = this.add.image(384,0,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche2.on('pointerdown',onClickWB,this);
      wbcaseblanche3 = this.add.image(768,0,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche3.on('pointerdown',onClickWB,this);
      wbcaseblanche4 = this.add.image(1152,0,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche4.on('pointerdown',onClickWB,this);
      wbcaseblanche5 = this.add.image(1536,0,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche5.on('pointerdown',onClickWB,this);
      wbcaseblanche6 = this.add.image(0,360,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche6.on('pointerdown',onClickWB,this);
      wbcaseblanche7 = this.add.image(384,360,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche7.on('pointerdown',onClickWB,this);
      wbcaseblanche8 = this.add.image(768,360,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche8.on('pointerdown',onClickWB,this);
      wbcaseblanche9 = this.add.image(1152,360,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche9.on('pointerdown',onClickWB,this);
      wbcaseblanche10 = this.add.image(1536,360,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche10.on('pointerdown',onClickWB,this);
      wbcaseblanche11 = this.add.image(0,720,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche11.on('pointerdown',onClickWB,this);
      wbcaseblanche12 = this.add.image(384,720,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche12.on('pointerdown',onClickWB,this);
      wbcaseblanche13 = this.add.image(768,720,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche13.on('pointerdown',onClickWB,this);
      wbcaseblanche14 = this.add.image(1152,720,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche14.on('pointerdown',onClickWB,this);
      wbcaseblanche15 = this.add.image(1536,720,'caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      wbcaseblanche15.on('pointerdown',onClickWB,this);


    }


    update(){

        if (casecounter==0) {
            wbcaseblanche3.setVisible(true);
        }
        if (casecounter==1) {
            wbcaseblanche3.setVisible(false);
            wbcaseblanche11.setVisible(true);
        }
        if (casecounter==2) {
            wbcaseblanche11.setVisible(false);
            wbcaseblanche8.setVisible(true);
        }
        if (casecounter==3) {
            wbcaseblanche8.setVisible(false);
            wbcaseblanche14.setVisible(true);
        }
        if (casecounter==4) {
            wbcaseblanche14.setVisible(false);
            wbcaseblanche13.setVisible(true);
        }
        if (casecounter==5) {
            wbcaseblanche13.setVisible(false);
            wbcaseblanche5.setVisible(true);
        }
        if (casecounter==6) {
            wbcaseblanche5.setVisible(false);
            wbcaseblanche10.setVisible(true);
        }
        if (casecounter==7) {
            wbcaseblanche10.setVisible(false);
            wbcaseblanche5.setVisible(true);
        }
        if (casecounter==8) {
            wbcaseblanche5.setVisible(false);
            wbcaseblanche10.setVisible(true);
        }
        if (casecounter==9) {
            wbcaseblanche10.setVisible(false);
            wbcaseblanche5.setVisible(true);
        }
        if (casecounter==10) {
            wbcaseblanche5.setVisible(false);
            wbcaseblanche14.setVisible(true);
        }
        if (casecounter==11) {
            wbcaseblanche14.setVisible(false);
            wbcaseblanche7.setVisible(true);
        }
        if (casecounter==12) {
            wbcaseblanche7.setVisible(false);
            wbcaseblanche2.setVisible(true);
        }
        if (casecounter==13) {
            wbcaseblanche2.setVisible(false);
            wbcaseblanche5.setVisible(true);
        }
        if (casecounter==14) {
            wbcaseblanche5.setVisible(false);
            wbcaseblanche13.setVisible(true);
        }
        

      // condition de victoire
      if (casecounter==15 && loopfalse == 0) {
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


function onClickWB(){
    casecounter+=1;
}