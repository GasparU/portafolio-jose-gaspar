const app = document.querySelector("#app");
const animation = document.querySelector("#animation");
const BLOCKS_NR = 20;
const blocks = [];
const b_width = Math.ceil(700 / BLOCKS_NR);
const b_height = Math.ceil(window.innerHeight / BLOCKS_NR);

const data = ["fall", "random", "oval", "middle"];
const random = Math.floor(Math.random() * 4);
const results = data[random];
// console.log(results);

createBlocks("random");
animation.addEventListener("change", (e) => {
  const animation = e.target.value;
  cleanUp();
  createBlocks(animation);
});
function createBlocks(animation) {
  for (let i = 0; i < BLOCKS_NR; i++) {
    const row = [];
    for (let j = 0; j < BLOCKS_NR; j++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.width = b_width + "px";
      block.style.height = b_height + "px";
      switch (results) {
        case "fall": {
          block.style.top = -b_height + "px";
          block.style.left = j * b_width + "px";
          break;
        }
        case "random": {
          block.style.top = Math.random() * window.innerHeight + "px";
          block.style.left = Math.random() * 700 + "px";
          break;
        }
        case "oval": {
          block.style.top = "100vh";
          block.style.left = "500px";
          break;
        }
        case "middle": {
          block.style.top = "50vh";
          block.style.left = "350px";
          break;
        }
      }
      block.style.backgroundPosition = `${-b_width * j}px ${-b_height * i}px`;
      row.push(block);
      app.appendChild(block);
    }
    blocks.push(row);
  }
  setTimeout(() => {
    animateBlocks(animation);
  }, 10);
}

function animateBlocks(animation) {
  blocks.forEach((row, i) => {
    row.forEach((block, j) => {
      block.style.top = b_height * i + "px";
      block.style.left = b_width * j + "px";
      switch (results) {
        case "fall": {
          block.style.transitionDelay = Math.random() * 400 + "ms";
          break;
        }
        case "random": {
          block.style.transitionDelay = Math.random() * 10 + "ms";
          break;
        }
        case "oval": {
          block.style.transitionDelay = i * BLOCKS_NR + j * BLOCKS_NR + "ms";
          break;
        }
        case "middle": {
          block.style.transitionDelay = i * BLOCKS_NR + j * BLOCKS_NR + "ms";
          break;
        }
      }
    });
  });
}

function cleanUp(animation) {
  blocks.forEach((row, i) => {
    row.forEach((block, j) => {
      block.remove();
    });
  });
  blocks.splice(0, blocks.length);
}
