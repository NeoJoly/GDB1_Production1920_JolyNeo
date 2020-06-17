
/******************************************************************************************************************************/
/**********************************************************VARIABLES***********************************************************/
/******************************************************************************************************************************/

var scene; var _score = 1000; var restartgame=0;

/******************************************************************************************************************************/
/************************************************COMPTE À REBOURS + CHRONOMÈTRE************************************************/
/******************************************************************************************************************************/

var car3; var car2; var car1; var isEnd=0;
var chrono10; var chrono9; var chrono8; var chrono7; var chrono6; var chrono5; var chrono4; var chrono3; var chrono2; var chrono1;


/******************************************************************************************************************************/
/*******************************************************VICTOIRE/DÉFAITE*******************************************************/
/******************************************************************************************************************************/

var ecran_victoire; var ecran_defaite; var loopfalse=0; var bouton_continue; var bouton_yes; var bouton_no;


/******************************************************************************************************************************/
/*************************************************************MENU*************************************************************/
/******************************************************************************************************************************/

var logo; var menu_play; var menu_ranking; var menu_cyd; var menu_novice; var menu_intermediate; var menu_expert;


/******************************************************************************************************************************/
/**********************************************************BLACKJUMP***********************************************************/
/******************************************************************************************************************************/

var background1; var background2; var background3; var background4; var background5; var background6; var background7; var background8; 
var decor_arriere1; var decor_arriere2; var decor_arriere3; var decor_arriere4;
var decor_avant1; var decor_avant2; var decor_avant3; var decor_avant4;     var decor_haut;
var perso; var cursors; var camera;
var bloc11; var bloc12; var bloc13; var bloc14; var bloc15;
var bloc21; var bloc22; var bloc23; var bloc24; var bloc25;
var bloc31; var bloc32; var bloc33; var bloc34; var bloc35;



/******************************************************************************************************************************/
/*********************************************************BLACKORWHITE*********************************************************/
/******************************************************************************************************************************/

// novice
var novice_case1couleur; var novice_case2couleur; var novice_case3couleur; var novice_case4couleur; var novice_case5couleur;
var novice_case1noire; var novice_case2noire; var novice_case3noire; var novice_case4noire; var novice_case5noire;
var novice_case1blanche; var novice_case2blanche; var novice_case3blanche; var novice_case4blanche; var novice_case5blanche;


// intermediaire
var intermediaire_case1couleur; var intermediaire_case2couleur; var intermediaire_case3couleur; var intermediaire_case4couleur;
var intermediaire_case5couleur; var intermediaire_case6couleur; var intermediaire_case7couleur; var intermediaire_case8couleur;

var intermediaire_case1noire; var intermediaire_case2noire; var intermediaire_case3noire; var intermediaire_case4noire;
var intermediaire_case5noire; var intermediaire_case6noire; var intermediaire_case7noire; var intermediaire_case8noire;

var intermediaire_case1blanche; var intermediaire_case2blanche; var intermediaire_case3blanche; var intermediaire_case4blanche;
var intermediaire_case5blanche; var intermediaire_case6blanche; var intermediaire_case7blanche; var intermediaire_case8blanche;


// expert
var expert_case1couleur; var expert_case2couleur; var expert_case3couleur; var expert_case4couleur; var expert_case5couleur;
var expert_case6couleur; var expert_case7couleur; var expert_case8couleur; var expert_case9couleur; var expert_case10couleur;

var expert_case1noire; var expert_case2noire; var expert_case3noire; var expert_case4noire; var expert_case5noire;
var expert_case6noire; var expert_case7noire; var expert_case8noire; var expert_case9noire; var expert_case10noire;

var expert_case1blanche; var expert_case2blanche; var expert_case3blanche; var expert_case4blanche; var expert_case5blanche;
var expert_case6blanche; var expert_case7blanche; var expert_case8blanche; var expert_case9blanche; var expert_case10blanche;



/******************************************************************************************************************************/
/*****************************************************BLACKANDWHITEMATCHES*****************************************************/
/******************************************************************************************************************************/

var static1; var static2; var static3; var static4; var static5; var static6;
var forme1; var forme2; var forme3; var forme4; var forme5; var forme6; var forme7; var forme8; var forme9; var forme10; var forme11; var forme12;
var croix1 = "false"; var croix2 = "false";



/******************************************************************************************************************************/
/**********************************************************WHITEBOXES**********************************************************/
/******************************************************************************************************************************/

var wbcasenoire1; var wbcasenoire2; var wbcasenoire3; var wbcasenoire4; var wbcasenoire5;
var wbcasenoire6; var wbcasenoire7; var wbcasenoire8; var wbcasenoire9; var wbcasenoire10;
var wbcasenoire11; var wbcasenoire12; var wbcasenoire13; var wbcasenoire14; var wbcasenoire15;

var wbcaseblanche1; var wbcaseblanche2; var wbcaseblanche3; var wbcaseblanche4; var wbcaseblanche5;
var wbcaseblanche6; var wbcaseblanche7; var wbcaseblanche8; var wbcaseblanche9; var wbcaseblanche10;
var wbcaseblanche11; var wbcaseblanche12; var wbcaseblanche13; var wbcaseblanche14; var wbcaseblanche15;

var casecounter=0; var piege1="false"; var piege2="false";




/******************************************************************************************************************************/
/*******************************************************FASTBLACKCLICKER*******************************************************/
/******************************************************************************************************************************/

var anim_click; var anim_x; var anim_y; var nbclick=0; var fbc_fond;




/******************************************************************************************************************************/
/*************************************************************SCORE************************************************************/
/******************************************************************************************************************************/

var score_0;   var score_10;  var score_20;  var score_30;  var score_40;  var score_50;  var score_60;  var score_70;  var score_80;  var score_90;
var score_100; var score_110; var score_120; var score_130; var score_140; var score_150; var score_160; var score_170; var score_180; var score_190;
var score_200; var score_210; var score_220; var score_230; var score_240; var score_250; var score_260; var score_270; var score_280; var score_290;
var score_300; var score_310; var score_320; var score_330; var score_340; var score_350; var score_360; var score_370; var score_380; var score_390;
var score_400; var score_410; var score_420; var score_430; var score_440; var score_450; var score_460; var score_470; var score_480; var score_490;
var score_500; var score_510; var score_520; var score_530; var score_540; var score_550; var score_560; var score_570; var score_580; var score_590;
var score_600; var score_610; var score_620; var score_630; var score_640; var score_650; var score_660; var score_670; var score_680; var score_690;
var score_700; var score_710; var score_720; var score_730; var score_740; var score_750; var score_760; var score_770; var score_780; var score_790;
var score_800; var score_810; var score_820; var score_830; var score_840; var score_850; var score_860; var score_870; var score_880; var score_890;
var score_900; var score_910; var score_920; var score_930; var score_940; var score_950; var score_960; var score_970; var score_980; var score_990; var score_1000;




class preload extends Phaser.Scene {
  constructor() {
    super('preload');
  }
   
  preload(){

    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /************************************************COMPTE À REBOURS + CHRONOMÈTRE************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    this.load.image('car3','assets/compte_a_rebours/car3.png');
    this.load.image('car2','assets/compte_a_rebours/car2.png');
    this.load.image('car1','assets/compte_a_rebours/car1.png');

    this.load.image('chrono10','assets/chronometre/chrono10.png');
    this.load.image('chrono9','assets/chronometre/chrono9.png');
    this.load.image('chrono8','assets/chronometre/chrono8.png');
    this.load.image('chrono7','assets/chronometre/chrono7.png');
    this.load.image('chrono6','assets/chronometre/chrono6.png');
    this.load.image('chrono5','assets/chronometre/chrono5.png');
    this.load.image('chrono4','assets/chronometre/chrono4.png');
    this.load.image('chrono3','assets/chronometre/chrono3.png');
    this.load.image('chrono2','assets/chronometre/chrono2.png');
    this.load.image('chrono1','assets/chronometre/chrono1.png');




  
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /*******************************************************VICTOIRE/DÉFAITE*******************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    this.load.spritesheet('win','assets/win/win.png',{frameWidth:1920,frameHeight:1080});
    this.load.image('bouton_continue','assets/win/continue.png');

    this.load.spritesheet('lose','assets/gameover/gameover.png',{frameWidth:1920,frameHeight:1080});
    this.load.image('bouton_yes','assets/gameover/yes.png');
    this.load.image('bouton_no','assets/gameover/no.png');





    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /*************************************************************MENU*************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    this.load.image('logo','assets/logo/Logo_3.png');

    this.load.image('menu_play','assets/boutons/menu_play.png');
    this.load.image('menu_ranking','assets/boutons/menu_ranking.png');
    this.load.image('menu_cyd','assets/boutons/menu_cyd.png');
    this.load.image('menu_novice','assets/boutons/menu_novice.png');
    this.load.image('menu_intermediate','assets/boutons/menu_intermediate.png');
    this.load.image('menu_expert','assets/boutons/menu_expert.png');




    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /**********************************************************BLACKJUMP***********************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    
    // décor
    this.load.spritesheet('background','assets/background/background.png',{frameWidth:480,frameHeight:270});
    this.load.image('decor_arriere','assets/minigame_1/decor/decor_arriere.png');
    this.load.image('decor_avant','assets/minigame_1/decor/decor_avant.png');

    this.load.image('decor_haut','assets/minigame_1/decor/decor_haut.png');

    // perso
    this.load.spritesheet('course','assets/perso/anim_course.png',{frameWidth:128.0714285714285,frameHeight:200});
    this.load.spritesheet('saut','assets/perso/anim_saut.png',{frameWidth:163,frameHeight:200});

    // blocs
    this.load.image('bloc1','assets/minigame_1/blocs/bloc1.png');
    this.load.image('bloc2','assets/minigame_1/blocs/bloc2.png');
    this.load.image('bloc3','assets/minigame_1/blocs/bloc3.png');




    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /*********************************************************BLACKORWHITE*********************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    this.load.image('5x1_casenoire','assets/minigame_2/5x1_casenoire.png');
    this.load.image('5x1_caseblanche','assets/minigame_2/5x1_caseblanche.png');

    this.load.image('8x1_casenoire','assets/minigame_2/8x1_casenoire.png');
    this.load.image('8x1_caseblanche','assets/minigame_2/8x1_caseblanche.png');

    this.load.image('10x2_casenoire','assets/minigame_2/10x2_casenoire.png');
    this.load.image('10x2_caseblanche','assets/minigame_2/10x2_caseblanche.png');







    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /*****************************************************BLACKANDWHITEMATCHES*****************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    this.load.image('carre_noir','assets/minigame_3/carre_noir.png');
    this.load.image('triangle_noir','assets/minigame_3/triangle_noir.png');
    this.load.image('rond_noir','assets/minigame_3/rond_noir.png');

    this.load.image('carre_blanc','assets/minigame_3/carre_blanc.png');
    this.load.image('triangle_blanc','assets/minigame_3/triangle_blanc.png');
    this.load.image('rond_blanc','assets/minigame_3/rond_blanc.png');

    this.load.image('croix_blanche','assets/minigame_3/croix_blanche.png');
    this.load.image('croix_noire','assets/minigame_3/croix_noire.png');







    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /**********************************************************WHITEBOXES**********************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/


    this.load.image('casenoire','assets/minigame_4/casenoire.png');
    this.load.image('caseblanche','assets/minigame_4/caseblanche.png');






    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /*******************************************************FASTBLACKCLICKER*******************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/


    this.load.spritesheet('click','assets/minigame_5/click.png',{frameWidth:1196,frameHeight:1050});
    this.load.image('fbc_fond','assets/minigame_5/fbc_fond.png');

    this.load.image('goal_50','assets/minigame_5/goal_50.png');
    this.load.image('goal_75','assets/minigame_5/goal_75.png');
    this.load.image('goal_100','assets/minigame_5/goal_100.png');






    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /*************************************************************SCORE************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/


    this.load.image('score_base','assets/score/score_base.png');
    
    this.load.image('score_0','assets/score/score_0.png');
    this.load.image('score_10','assets/score/score_10.png');
    this.load.image('score_20','assets/score/score_20.png');
    this.load.image('score_30','assets/score/score_30.png');
    this.load.image('score_40','assets/score/score_40.png');
    this.load.image('score_50','assets/score/score_50.png');
    this.load.image('score_60','assets/score/score_60.png');
    this.load.image('score_70','assets/score/score_70.png');
    this.load.image('score_80','assets/score/score_80.png');
    this.load.image('score_90','assets/score/score_90.png');

    this.load.image('score_100','assets/score/score_100.png');
    this.load.image('score_110','assets/score/score_110.png');
    this.load.image('score_120','assets/score/score_120.png');
    this.load.image('score_130','assets/score/score_130.png');
    this.load.image('score_140','assets/score/score_140.png');
    this.load.image('score_150','assets/score/score_150.png');
    this.load.image('score_160','assets/score/score_160.png');
    this.load.image('score_170','assets/score/score_170.png');
    this.load.image('score_180','assets/score/score_180.png');
    this.load.image('score_190','assets/score/score_190.png');
    
    this.load.image('score_200','assets/score/score_200.png');
    this.load.image('score_210','assets/score/score_210.png');
    this.load.image('score_220','assets/score/score_220.png');
    this.load.image('score_230','assets/score/score_230.png');
    this.load.image('score_240','assets/score/score_240.png');
    this.load.image('score_250','assets/score/score_250.png');
    this.load.image('score_260','assets/score/score_260.png');
    this.load.image('score_270','assets/score/score_270.png');
    this.load.image('score_280','assets/score/score_280.png');
    this.load.image('score_290','assets/score/score_290.png');
    
    this.load.image('score_300','assets/score/score_300.png');
    this.load.image('score_310','assets/score/score_310.png');
    this.load.image('score_320','assets/score/score_320.png');
    this.load.image('score_330','assets/score/score_330.png');
    this.load.image('score_340','assets/score/score_340.png');
    this.load.image('score_350','assets/score/score_350.png');
    this.load.image('score_360','assets/score/score_360.png');
    this.load.image('score_370','assets/score/score_370.png');
    this.load.image('score_380','assets/score/score_380.png');
    this.load.image('score_390','assets/score/score_390.png');
    
    this.load.image('score_400','assets/score/score_400.png');
    this.load.image('score_410','assets/score/score_410.png');
    this.load.image('score_420','assets/score/score_420.png');
    this.load.image('score_430','assets/score/score_430.png');
    this.load.image('score_440','assets/score/score_440.png');
    this.load.image('score_450','assets/score/score_450.png');
    this.load.image('score_460','assets/score/score_460.png');
    this.load.image('score_470','assets/score/score_470.png');
    this.load.image('score_480','assets/score/score_480.png');
    this.load.image('score_490','assets/score/score_490.png');
    
    this.load.image('score_500','assets/score/score_500.png');
    this.load.image('score_510','assets/score/score_510.png');
    this.load.image('score_520','assets/score/score_520.png');
    this.load.image('score_530','assets/score/score_530.png');
    this.load.image('score_540','assets/score/score_540.png');
    this.load.image('score_550','assets/score/score_550.png');
    this.load.image('score_560','assets/score/score_560.png');
    this.load.image('score_570','assets/score/score_570.png');
    this.load.image('score_580','assets/score/score_580.png');
    this.load.image('score_590','assets/score/score_590.png');
    
    this.load.image('score_600','assets/score/score_600.png');
    this.load.image('score_610','assets/score/score_610.png');
    this.load.image('score_620','assets/score/score_620.png');
    this.load.image('score_630','assets/score/score_630.png');
    this.load.image('score_640','assets/score/score_640.png');
    this.load.image('score_650','assets/score/score_650.png');
    this.load.image('score_660','assets/score/score_660.png');
    this.load.image('score_670','assets/score/score_670.png');
    this.load.image('score_680','assets/score/score_680.png');
    this.load.image('score_690','assets/score/score_690.png');
    
    this.load.image('score_700','assets/score/score_700.png');
    this.load.image('score_710','assets/score/score_710.png');
    this.load.image('score_720','assets/score/score_720.png');
    this.load.image('score_730','assets/score/score_730.png');
    this.load.image('score_740','assets/score/score_740.png');
    this.load.image('score_750','assets/score/score_750.png');
    this.load.image('score_760','assets/score/score_760.png');
    this.load.image('score_770','assets/score/score_770.png');
    this.load.image('score_780','assets/score/score_780.png');
    this.load.image('score_790','assets/score/score_790.png');
    
    this.load.image('score_800','assets/score/score_800.png');
    this.load.image('score_810','assets/score/score_810.png');
    this.load.image('score_820','assets/score/score_820.png');
    this.load.image('score_830','assets/score/score_830.png');
    this.load.image('score_840','assets/score/score_840.png');
    this.load.image('score_850','assets/score/score_850.png');
    this.load.image('score_860','assets/score/score_860.png');
    this.load.image('score_870','assets/score/score_870.png');
    this.load.image('score_880','assets/score/score_880.png');
    this.load.image('score_890','assets/score/score_890.png');
    
    this.load.image('score_900','assets/score/score_900.png');
    this.load.image('score_910','assets/score/score_910.png');
    this.load.image('score_920','assets/score/score_920.png');
    this.load.image('score_930','assets/score/score_930.png');
    this.load.image('score_940','assets/score/score_940.png');
    this.load.image('score_950','assets/score/score_950.png');
    this.load.image('score_960','assets/score/score_960.png');
    this.load.image('score_970','assets/score/score_970.png');
    this.load.image('score_980','assets/score/score_980.png');
    this.load.image('score_990','assets/score/score_990.png');

    this.load.image('score_1000','assets/score/score_1000.png');



    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /***********************************************************MUSIQUES***********************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    this.load.audio('MusiqueFond','assets/music/MusiqueFond.mp3');






    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /**********************************************************PRELOADER***********************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/
    /******************************************************************************************************************************/

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 100,
      text: 'Loading...',
      style: {
          font: '50px monospace',
          fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 10,
      text: '0%',
      style: {
          font: '30px monospace',
          fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 100,
      text: '',
      style: {
          font: '30px monospace',
          fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);


    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0xffffff, 0.5);
    progressBox.fillRect(630, 505, 640, 50);


    this.load.on('progress', function (value) {
      console.log(value);
    });
              
    this.load.on('fileprogress', function (file) {
      console.log(file.src);
      assetText.setText('Loading asset : ' + file.src);
    });
   
    this.load.on('complete', function () {
      console.clear();
      console.log('complete');
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });




  }
  
  update(){
    
    this.load.on('progress', function (value) {
      console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(640, 520, 600 * value, 30);
      percentText.setText(parseInt(value * 100) + '%');
    });
    
    
    
    this.scene.start("menu");
  
  }
}


/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/
/**********************************************************FONCTIONS***********************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/
/******************************************************************************************************************************/



function onClickContinue(pointer,gameObject){

  this.scene.stop();
  if (scene=='novice_blackjump') {
    retartgame=0;
    this.scene.start('novice_blackorwhite');
  } else if (scene=='novice_blackorwhite') {
    retartgame=0;
    this.scene.start('novice_blackandwhitematches');
  } else if (scene=='novice_blackandwhitematches') {
    retartgame=0;
    this.scene.start('novice_whiteboxes');
  } else if (scene=='novice_whiteboxes') {
    retartgame=0;
    this.scene.start('novice_fastblackclicker');
  } else if (scene=='novice_fastblackclicker') {
    retartgame=0;
    this.scene.start('score');
  }
  
  else if (scene=='intermediaire_blackjump') {
    retartgame=0;
    this.scene.start('intermediaire_blackorwhite');
  } else if (scene=='intermediaire_blackorwhite') {
    retartgame=0;
    this.scene.start('intermediaire_blackandwhitematches');
  } else if (scene=='intermediaire_blackandwhitematches') {
    retartgame=0;
    this.scene.start('intermediaire_whiteboxes');
  } else if (scene=='intermediaire_whiteboxes') {
    retartgame=0;
    this.scene.start('intermediaire_fastblackclicker');
  } else if (scene=='intermediaire_fastblackclicker') {
    retartgame=0;
    this.scene.start('score');
  }
  
  else if (scene=='expert_blackjump') {
    retartgame=0;
    this.scene.start('expert_blackorwhite');
  } else if (scene=='expert_blackorwhite') {
    retartgame=0;
    this.scene.start('expert_blackandwhitematches');
  } else if (scene=='expert_blackandwhitematches') {
    retartgame=0;
    this.scene.start('expert_whiteboxes');
  } else if (scene=='expert_whiteboxes') {
    retartgame=0;
    this.scene.start('expert_fastblackclicker');
  } else if (scene=='expert_fastblackclicker') {
    retartgame=0;
    this.scene.start('score');
  }

}

function onClickYes(pointer,gameObject){

  this.scene.stop();
  if (scene=='novice_blackjump') {
    _score-=10;
    restartgame+=1;
    this.scene.start('novice_blackjump');
  } else if (scene=='novice_blackorwhite') {
    _score-=10;
    restartgame+=1;
    this.scene.start('novice_blackorwhite');
  } else if (scene=='novice_blackandwhitematches') {
    _score-=10;
    restartgame+=1;
    this.scene.start('novice_blackandwhitematches');
  } else if (scene=='novice_whiteboxes') {
    _score-=10;
    restartgame+=1;
    this.scene.start('novice_whiteboxes');
  } else if (scene=='novice_fastblackclicker') {
    _score-=10;
    restartgame+=1;
    this.scene.start('novice_fastblackclicker');
  }
  
  else if (scene=='intermediaire_blackjump') {
    _score-=10;
    restartgame+=1;
    this.scene.start('intermediaire_blackjump');
  } else if (scene=='intermediaire_blackorwhite') {
    _score-=10;
    restartgame+=1;
    this.scene.start('intermediaire_blackorwhite');
  } else if (scene=='intermediaire_blackandwhitematches') {
    _score-=10;
    restartgame+=1;
    this.scene.start('intermediaire_blackandwhitematches');
  } else if (scene=='intermediaire_whiteboxes') {
    _score-=10;
    restartgame+=1;
    this.scene.start('intermediaire_whiteboxes');
  } else if (scene=='intermediaire_fastblackclicker') {
    _score-=10;
    restartgame+=1;
    this.scene.start('intermediaire_fastblackclicker');
  }
  
  else if (scene=='expert_blackjump') {
    _score-=10;
    restartgame+=1;
    this.scene.start('expert_blackjump');
  } else if (scene=='expert_blackorwhite') {
    _score-=10;
    restartgame+=1;
    this.scene.start('expert_blackorwhite');
  } else if (scene=='expert_blackandwhitematches') {
    _score-=10;
    restartgame+=1;
    this.scene.start('expert_blackandwhitematches');
  } else if (scene=='expert_whiteboxes') {
    _score-=10;
    restartgame+=1;
    this.scene.start('expert_whiteboxes');
  } else if (scene=='expert_fastblackclicker') {
    _score-=10;
    restartgame+=1;
    this.scene.start('expert_fastblackclicker');
  }

}

function onClickNo(pointer,gameObject){

  this.scene.stop();
  if (scene=='novice_blackjump') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('novice_blackorwhite');
  } else if (scene=='novice_blackorwhite') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('novice_blackandwhitematches');
  } else if (scene=='novice_blackandwhitematches') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('novice_whiteboxes');
  } else if (scene=='novice_whiteboxes') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('novice_fastblackclicker');
  } else if (scene=='novice_fastblackclicker') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('score');
  }
  
  else if (scene=='intermediaire_blackjump') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('intermediaire_blackorwhite');
  } else if (scene=='intermediaire_blackorwhite') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('intermediaire_blackandwhitematches');
  } else if (scene=='intermediaire_blackandwhitematches') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('intermediaire_whiteboxes');
  } else if (scene=='intermediaire_whiteboxes') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('intermediaire_fastblackclicker');
  } else if (scene=='intermediaire_fastblackclicker') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('score');
  }
  
  else if (scene=='expert_blackjump') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('expert_blackorwhite');
  } else if (scene=='expert_blackorwhite') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('expert_blackandwhitematches');
  } else if (scene=='expert_blackandwhitematches') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('expert_whiteboxes');
  } else if (scene=='expert_whiteboxes') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('expert_fastblackclicker');
  } else if (scene=='expert_fastblackclicker') {
    _score = _score - 10*restartgame;
    restartgame=0;
    this.scene.start('score');
  }

}