var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixao;

function preload() {
    this.load.image('mar', 'assets/fundoazul.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixao', 'assets/peixes/peixe_serio.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo') .setScale(0.5);

    peixao = this.add.image(400, 300, 'peixao');

    peixao.setFlip(true, false);
}

function update() {

    peixao.x = this.input.x;
    peixao.y = this.input.y;
};