class menu extends Phaser.Scene {
    constructor() {
      super('menu');
  
    }
  
  
    init(){}
    preload(){}
  
  
    create(){

      this.sound.add('MusiqueFond');
      this.sound.play('MusiqueFond');

      logo = this.add.image(960,300,'logo');

      menu_play = this.add.image(560,900,'menu_play').setInteractive();
      menu_play.on('pointerdown',onClickPlay,this);
      menu_ranking = this.add.image(1360,900,'menu_ranking').setInteractive();
      menu_ranking.on('pointerdown',onClickRanking,this);

      menu_cyd = this.add.image(960,540,'menu_cyd').setVisible(false);
      menu_novice = this.add.image(960,500,'menu_novice').setVisible(false).setInteractive();
      menu_novice.on('pointerdown',onClickNovice,this);
      menu_intermediate = this.add.image(960,700,'menu_intermediate').setVisible(false).setInteractive();
      menu_intermediate.on('pointerdown',onClickIntermediate,this);
      menu_expert = this.add.image(960,900,'menu_expert').setVisible(false).setInteractive();
      menu_expert.on('pointerdown',onClickExpert,this);


    }
  
  
    update(){

    }
  
  
}

function onClickPlay(pointer,gameObject){

  logo.setVisible(false);
  menu_play.setVisible(false);
  menu_ranking.setVisible(false);

  menu_cyd.setVisible(true);
  menu_novice.setVisible(true);
  menu_intermediate.setVisible(true);
  menu_expert.setVisible(true);

}

function onClickRanking(pointer,gameObject){

  this.scene.start('ranking');

}


function onClickNovice(pointer,gameObject){

  this.scene.start('novice_blackjump');
  
}

function onClickIntermediate(pointer,gameObject){

  this.scene.start('intermediaire_blackjump');
  
}

function onClickExpert(pointer,gameObject){

  this.scene.start('expert_blackjump');
  
}