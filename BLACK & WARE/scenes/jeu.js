var config = {
    width: 1920,
    height: 1080,
    physics: {
          default: 'arcade',
          arcade: {
              gravity: {y:1000},
              debug: false
          }
      },
      scene: [
        preload,
        menu,
        ranking,
        score,
        novice_blackjump,
        novice_blackorwhite,
        novice_blackandwhitematches,
        novice_whiteboxes,
        novice_fastblackclicker,
        intermediaire_blackjump,
        intermediaire_blackorwhite,
        intermediaire_blackandwhitematches,
        intermediaire_whiteboxes,
        intermediaire_fastblackclicker,
        expert_blackjump,
        expert_blackorwhite,
        expert_blackandwhitematches,
        expert_whiteboxes,
        expert_fastblackclicker
      ]
    }
  
  var game = new Phaser.Game(config);
  