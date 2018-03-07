//nil of array

let nil = 'nil';

//example for trial

let example = [[1, 2], [10, nil], [5, 4], [7, 3], [10, nil], [10, nil], [1, 4], [6, 2], [7, 3], [10, 3, 7]];

//results of frames (no nil)

let scoreGame = (game) => {
  let roundCount = 0;
  game.map((frames) => {
  	//console.log(frames) -> list of each frame
      let frame = 0;
      frames.map((roll)=>{
      	//console.log(roll) -> list of each roll
        frame += roll
      });
      roundCount++;

  if (frame < 10) {
        console.log('This is less than 10. There`s nothing to do')
        console.log(`The frame nº${roundCount} value is: ${frame}`);
        console.log(`--------------------------------------------------------`);
      } else if (frame == 10){
        frame + // the first roll of the next frame;  
        console.log('This is 10(spare). Define spare')
        console.log(`The frame nº${roundCount} value is: ${frame}`);
        console.log(`--------------------------------------------------------`);
      } else if (frame == '10nil') {
        parseInt(frame) + //the entire frame of the next frame(if the frame of the next fame is 10nil parseInt(next frame + 1))
        console.log('This is 10(Splite). Define Splite')
        console.log(`The frame nº${roundCount} value is: ${frame}`);
        console.log(`--------------------------------------------------------`);
      } else if (frame > 10){
        console.log('This is the last frame. There`s nothing to do');
        console.log(`The frame nº${roundCount} value is: ${frame}`);
        console.log(`--------------------------------------------------------`);
      }

   });
};