var game = new Phaser.Game(320,480, Phaser.AUTO, 'game', {preload: preload, create: create, update: update, render: render});
var figur;
/*
    Lade Grafiken, Figuren etc.
*/
function preload() {
    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/phaser-dude.png');
}

/*
    Erstelle dein Spiel
*/
function create(){
    figur = game.add.sprite(0, 0, 'phaser');

    // Starte Spielphysik
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Ermögliche Spielphysik auf der Figur
    game.physics.enable(figur, Phaser.Physics.ARCADE);

}

/*
    Lass etwas passieren nachdem dein Spiel erstellt wurde.
*/
function update(){
    // Lösche die // vor der nächsten Codezeile und schaue was passiert, wenn du mit der Maus über das Spielfeld fährst
    // figur.rotation = game.physics.arcade.moveToPointer(figur, 30, game.input.activePointer, 300);
}

/*
    Nachdem dein Spiel auf dem Bildschirm erscheint, mache folgendes...
*/
function render() {
    //game.debug.spriteInfo(figur, 32, 32);
}