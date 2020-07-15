console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Imagem de fundo
const backgroundImage = {
  spriteX: 390, spriteY: 0,
  width: 275, height: 204,
  positionX: 0, positionY: canvas.height - 204,

  draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.drawImage(
      sprites,
      backgroundImage.spriteX, backgroundImage.spriteY,
      backgroundImage.width, backgroundImage.height,
      backgroundImage.positionX, backgroundImage.positionY,
      backgroundImage.width, backgroundImage.height,
    );

    context.drawImage(
      sprites,
      backgroundImage.spriteX, backgroundImage.spriteY,
      backgroundImage.width, backgroundImage.height,
      (backgroundImage.positionX + backgroundImage.width), backgroundImage.positionY,
      backgroundImage.width, backgroundImage.height,
    );
  },
};

// Chão
const floor = {
  spriteX: 0, spriteY: 610,
  width: 224, height: 112,
  positionX: 0, positionY: canvas.height - 112,

  draw() {
    context.drawImage(
      sprites,
      floor.spriteX, floor.spriteY,
      floor.width, floor.height,
      floor.positionX, floor.positionY,
      floor.width, floor.height,
    );

    context.drawImage(
      sprites,
      floor.spriteX, floor.spriteY,
      floor.width, floor.height,
      (floor.positionX + floor.width), floor.positionY,
      floor.width, floor.height,
    );
  },
};

// Flappy Bird
const flappyBird = {
  spriteX: 0, spriteY: 0,
  width: 33, height: 24,
  positionX: 10, positionY: 50,

  draw() {
    context.drawImage(
      sprites,
      flappyBird.spriteX, flappyBird.spriteY, // spriteX, spriteY
      flappyBird.width, flappyBird.height, // tamanho do recorte no sprite
      flappyBird.positionX, flappyBird.positionY, // posição do sprite no canvas
      flappyBird.width, flappyBird.height // tamanho do sprite
    );
  }
}

function loop() {
  backgroundImage.draw();
  flappyBird.draw();
  floor.draw();
  requestAnimationFrame(loop);
}

loop();