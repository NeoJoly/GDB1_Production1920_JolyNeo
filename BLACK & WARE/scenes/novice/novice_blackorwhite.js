class novice_blackorwhite extends Phaser.Scene {
    constructor() {
      super('novice_blackorwhite');
  
    }
  
  
    init(){}
    preload(){}
  
  
    create(){

      // mise en place
      scene = 'novice_blackorwhite';

      this.physics.resume();
      loopfalse=0;
      isEnd=0;

      novice_case1couleur='noir';
      novice_case2couleur='blanc';
      novice_case3couleur='noir';
      novice_case4couleur='blanc';
      novice_case5couleur='blanc';

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
      novice_case1noire = this.add.image(0,0,'5x1_casenoire').setVisible(true).setOrigin(0,0).setInteractive();
      novice_case1noire.on('pointerdown',onClickNoviceCase1,this);
      novice_case1blanche = this.add.image(0,0,'5x1_caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      novice_case1blanche.on('pointerdown',onClickNoviceCase1,this);
      
      novice_case2noire = this.add.image(384,0,'5x1_casenoire').setVisible(false).setOrigin(0,0).setInteractive();
      novice_case2noire.on('pointerdown',onClickNoviceCase2,this);
      novice_case2blanche = this.add.image(384,0,'5x1_caseblanche').setVisible(true).setOrigin(0,0).setInteractive();
      novice_case2blanche.on('pointerdown',onClickNoviceCase2,this);
      
      novice_case3noire = this.add.image(768,0,'5x1_casenoire').setVisible(true).setOrigin(0,0).setInteractive();
      novice_case3noire.on('pointerdown',onClickNoviceCase3,this);
      novice_case3blanche = this.add.image(768,0,'5x1_caseblanche').setVisible(false).setOrigin(0,0).setInteractive();
      novice_case3blanche.on('pointerdown',onClickNoviceCase3,this);
      
      novice_case4noire = this.add.image(1152,0,'5x1_casenoire').setVisible(false).setOrigin(0,0).setInteractive();
      novice_case4noire.on('pointerdown',onClickNoviceCase4,this);
      novice_case4blanche = this.add.image(1152,0,'5x1_caseblanche').setVisible(true).setOrigin(0,0).setInteractive();
      novice_case4blanche.on('pointerdown',onClickNoviceCase4,this);
      
      novice_case5noire = this.add.image(1536,0,'5x1_casenoire').setVisible(false).setOrigin(0,0).setInteractive();
      novice_case5noire.on('pointerdown',onClickNoviceCase5,this);
      novice_case5blanche = this.add.image(1536,0,'5x1_caseblanche').setVisible(true).setOrigin(0,0).setInteractive();
      novice_case5blanche.on('pointerdown',onClickNoviceCase5,this);



    }
  
  
    update(){

      if (novice_case1couleur=='noir') {
        novice_case1noire.setVisible(true);
        novice_case1blanche.setVisible(false);
      }
      if (novice_case1couleur=='blanc') {
        novice_case1blanche.setVisible(true);
        novice_case1noire.setVisible(false);
      }

      if (novice_case2couleur=='noir') {
        novice_case2noire.setVisible(true);
        novice_case2blanche.setVisible(false);
      }
      if (novice_case2couleur=='blanc') {
        novice_case2blanche.setVisible(true);
        novice_case2noire.setVisible(false);
      }

      if (novice_case3couleur=='noir') {
        novice_case3noire.setVisible(true);
        novice_case3blanche.setVisible(false);
      }
      if (novice_case3couleur=='blanc') {
        novice_case3blanche.setVisible(true);
        novice_case3noire.setVisible(false);
      }

      if (novice_case4couleur=='noir') {
        novice_case4noire.setVisible(true);
        novice_case4blanche.setVisible(false);
      }
      if (novice_case4couleur=='blanc') {
        novice_case4blanche.setVisible(true);
        novice_case4noire.setVisible(false);
      }

      if (novice_case5couleur=='noir') {
        novice_case5noire.setVisible(true);
        novice_case5blanche.setVisible(false);
      }
      if (novice_case5couleur=='blanc') {
        novice_case5blanche.setVisible(true);
        novice_case5noire.setVisible(false);
      }


      // condition de victoire
      if (novice_case1couleur=='blanc' && novice_case2couleur=='blanc' && novice_case3couleur=='blanc' && novice_case4couleur=='blanc' && novice_case5couleur=='blanc' && loopfalse == 0 || novice_case1couleur=='noir' && novice_case2couleur=='noir' && novice_case3couleur=='noir' && novice_case4couleur=='noir' && novice_case5couleur=='noir' && loopfalse == 0) {
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



function onClickNoviceCase1(pointer,gameObject){
  
  if (novice_case5couleur=='noir') {
    novice_case5couleur='blanc';
  }
  else if (novice_case5couleur=='blanc') {
    novice_case5couleur='noir';
  }
  
  if (novice_case1couleur=='noir') {
    novice_case1couleur='blanc';
  }
  else if (novice_case1couleur=='blanc') {
    novice_case1couleur='noir';
  }

  if (novice_case2couleur=='noir') {
    novice_case2couleur='blanc';
  }
  else if (novice_case2couleur=='blanc') {
    novice_case2couleur='noir';
  }

}

function onClickNoviceCase2(pointer,gameObject){
  
  if (novice_case1couleur=='noir') {
    novice_case1couleur='blanc';
  }
  else if (novice_case1couleur=='blanc') {
    novice_case1couleur='noir';
  }

  if (novice_case2couleur=='noir') {
    novice_case2couleur='blanc';
  }
  else if (novice_case2couleur=='blanc') {
    novice_case2couleur='noir';
  }

  if (novice_case3couleur=='noir') {
    novice_case3couleur='blanc';
  }
  else if (novice_case3couleur=='blanc') {
    novice_case3couleur='noir';
  }

}

function onClickNoviceCase3(pointer,gameObject){
  
  if (novice_case2couleur=='noir') {
    novice_case2couleur='blanc';
  }
  else if (novice_case2couleur=='blanc') {
    novice_case2couleur='noir';
  }

  if (novice_case3couleur=='noir') {
    novice_case3couleur='blanc';
  }
  else if (novice_case3couleur=='blanc') {
    novice_case3couleur='noir';
  }

  if (novice_case4couleur=='noir') {
    novice_case4couleur='blanc';
  }
  else if (novice_case4couleur=='blanc') {
    novice_case4couleur='noir';
  }

}

function onClickNoviceCase4(pointer,gameObject){
  
  if (novice_case3couleur=='noir') {
    novice_case3couleur='blanc';
  }
  else if (novice_case3couleur=='blanc') {
    novice_case3couleur='noir';
  }

  if (novice_case4couleur=='noir') {
    novice_case4couleur='blanc';
  }
  else if (novice_case4couleur=='blanc') {
    novice_case4couleur='noir';
  }

  if (novice_case5couleur=='noir') {
    novice_case5couleur='blanc';
  }
  else if (novice_case5couleur=='blanc') {
    novice_case5couleur='noir';
  }


}

function onClickNoviceCase5(pointer,gameObject){
  
  if (novice_case4couleur=='noir') {
    novice_case4couleur='blanc';
  }
  else if (novice_case4couleur=='blanc') {
    novice_case4couleur='noir';
  }

  if (novice_case5couleur=='noir') {
    novice_case5couleur='blanc';
  }
  else if (novice_case5couleur=='blanc') {
    novice_case5couleur='noir';
  }
  
  if (novice_case1couleur=='noir') {
    novice_case1couleur='blanc';
  }
  else if (novice_case1couleur=='blanc') {
    novice_case1couleur='noir';
  }

}

