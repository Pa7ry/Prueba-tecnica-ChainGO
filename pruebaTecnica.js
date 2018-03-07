const nil = 'nil';

//TESTS
let example = [[1, 2], [10, nil], [5, 4], [7, 3], [10, nil], [10, nil], [1, 4], [6, 2], [7, 3], [10, 3, 7]];

let example2 = [[3, 6], [1,1], [10, nil], [3, 3], [7, 3], [2, 4], [10, nil], [10, nil], [7,2], [7,2,10]];

let example3 = [[4, 3], [2, 0], [8, 2], [5, 1], [4, 1], [10, nil], [10, nil], [10, nil], [3, 2], [8, 1, 9]];

let example4 = [[10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, nil], [10, 10, 10]];


//THAT'S THE FUNTION TO CALCULATE THE SCORES OF THE FRAMES AND THE GLOBAL SCORE
//TO OBTAIN THE SCORES, WRITE IN CONSOLE THE NAME OF THE FUNCTION AND THE PARAMETER (THE NAME OF THE SCORES' ARRAY) THAT YOU WANT TO PROCESS E.G.-> scoreGame(example)
let scoreGame = (game) => {
  let results = []
  let roundCount = 0;
  for (let i in game) { //Reads the global array 
    let frame = 0;
    for (item of game[i]) {frame += item}; //Reads the frames' array and adds the scores in the frames, but with the conditions explained below
      roundCount++;
    if (frame < 10) { //Adds the frames' score if they're less than 10
      results.push(frame)
    } else if (frame === 10){ //If there's a Spare (frame's score = 10),  adds the frame's score and the next roll
      let nextRound = parseInt(i) + 1;
      let pick = game[nextRound];
      frame = frame + pick[0];
      results.push(frame);
    } else if (frame === '10nil') { //If there's a Strike (frame's score = 10, nil), adds the frame's score and the next two rolls
      let ronda = parseInt(i) + 1;
      let pick = game[parseInt(i) + 1];
      frame = parseInt(frame) + pick[0] + pick[1];
      if (frame == '20nil') { //If there's more than a Strike continued, adds the frame's score and the next two
        let pickNext = game[parseInt(i)+2];
        frame = parseInt(frame) + pickNext[0];
      }
      results.push(frame)
    } else if (frame > 10){results.push(frame)}}; //Adds the scores of the last frame

  let total = results.toString();
  let scoreGlobal = 0;
  results.forEach((framePoints)=>{scoreGlobal += framePoints}) //Adds the frames' score
  console.log(`The frames score are: ${total}.`) //Shows the scores of each frame
  console.log(`The score Global is: ${scoreGlobal}.`); //Shows the global score
}