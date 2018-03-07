const nil = 'nil';
let example = [[1, 2], [10, nil], [5, 4], [7, 3], [10, nil], [10, nil], [1, 4], [6, 2], [7, 3], [10, 3, 7]];
let example2 = [
  [3, 6], //9
  [1,1], // 2
  [10, nil], //16
  [3, 3], // 6
  [7, 3], // 12
  [2, 4], // 6
  [10, nil], //21
  [10, nil], //19
  [7,2], // 9
  [7,2,10] //19
]
let results = []


let scoreGame = (game) => {
  let roundCount = 0;
  for (let i in game) {
    let frame = 0;
    for (item of game[i]) {
      frame += item
    }
    roundCount++;
    //console.log(`The frame nº${roundCount} value is: ${frame}`);

    if (frame < 10) {
      results.push(frame)
        //console.log('This is less than 10. There`s nothing to do')
        //console.log(`The frame nº${roundCount} value is: ${frame}`);
        //console.log(`--------------------------------------------------------`);
    } else if (frame === 10){
      // the first roll of the next frame;
      // console.log('this is the value of the frame ' + frame)
      let nextRound = parseInt(i) + 1
      let pick = game[nextRound]
      frame = frame + pick[0]
      // console.log('this is the value of the final frame ' + frame)
      // console.log('this is in the group of 10(Spare). Define Spare')
      // console.log(`The frame nº${roundCount} value is: ${frame}`);
      // console.log(`--------------------------------------------------------`);
      results.push(frame)
    } else if (frame === '10nil') {
      //the entire frame of the next frame(if the frame of the next fame is 10nil parseInt(next frame + 1))
      let ronda = parseInt(i) + 1
      // console.log('this is the value of the frame ' + frame)
      let pick = game[ronda]
      // console.log('pick 0 es ' + pick[0])
      // console.log('pick1 es ' + pick[1])
      // console.log('frame es ' + frame)
      frame = parseInt(frame) + pick[0] + pick[1];
      // console.log('THIS IS THE FINAL VALUE OF THE FRAME ' + frame)
      if (frame == '20nil') {
        frame = parseInt(frame) + 1
      }
      //console.log('THIS IS THE FINAL VALUE OF THE FRAME ' + frame)
      //console.log('this is in the group of 10(Strike). Define Strike')
      //console.log(`The frame nº${roundCount} value is: ${frame}`);
      //console.log(`--------------------------------------------------------`);
      results.push(frame)
    } else if (frame > 10){
      results.push(frame)
      // console.log('This is the last frame. There`s nothing to do');
      // console.log(`The frame nº${roundCount} value is: ${frame}`);
      // console.log(`--------------------------------------------------------`);
    }
  };
}