// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    /**
     * This is a function declaration so It is hoisted globally. so It will console log 20
     * window.volume = 20;
     */
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    /**
     * This is an arrow function, and we said from before arrow functions aren't
     * hoisted globally, so It will refer to the closest volume and console log it.
     */
    (() => {
      console.log("this.volume in arrow function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));
