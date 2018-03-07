let nil = 'nil';

let example = [[1, 2], [10, nil], [5, 4], [7, 3], [10, nil], [10, nil], [1, 4], [6, 2], [7, 3], [10, 3, 7]];

let scoreGame = (game) => {
  let roundCount = 0;
  game.map((frames) => {
      let frame = 0;
      frames.map((roll)=>{
        frame += roll
      });
      roundCount++;
      console.log(`The frame nº${roundCount} value: ${frame}`);
    });
  };