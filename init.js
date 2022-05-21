(function () {
  console.log('hello');
  const overworld = new Overworld({
    element: document.querySelector('.game-container')
  });

  overworld.init();
})();
