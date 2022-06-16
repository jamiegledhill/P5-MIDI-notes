function setup() {
  console.log('hello world')
  WebMidi
    .enable()
    .then(onEnabled)
    .catch(err => alert(err));
  createCanvas(windowWidth, windowHeight);
  
  // let bb = new BezierBlob(width / 2, height / 2, 120, 120, 150)
  // bb.draw()
  // let bvb = new BezierVertexBlob(width/2, height/2, 200, 200, 20)
  // bvb.draw()
  bManager = new BlobManager()
  scribble = new Scribble()
}
function onEnabled() {
  let noiseAmt = 1
  let kIndex = 0
  let sIndex = 0
  let cIndex = 0
  let inc = width/6
  let drumXPositions = [width/4,width/4+inc, width/4+(inc*2), width/4+(inc*3)]
  let hatXPositions = [width/4,width/4+(inc*0.5),width/4+inc,width/4+(inc*1.5), width/4+(inc*2), width/4+(inc*2.5), width/4+(inc*3), width/4+(inc*3.5)]
  if (WebMidi.inputs.length < 1) {
    console.log("No device detected.")
    return
  }
  WebMidi.inputs.forEach((device, index) => {
    console.log(`${index}: ${device.name}`)
  });
  inputSoftware = WebMidi.inputs[0]
  inputSoftware.addListener('noteon', "1",
  function(e) {
    //Show what we are receiving
    // console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");
    if(e.note.number == 36){
      // kick
      let size = 150
      let xPos = drumXPositions[kIndex++]
      if(kIndex > 3){
        kIndex = 0
      }
      let scribbleCircle = new ScribbleCircle(xPos, height/2, size, size, scribble)
      bManager.add(scribbleCircle)
    }
    if(e.note.number == 38){
      // snare
      let size = 200
      let xPos = drumXPositions[sIndex++]
      if(sIndex > 3){
        sIndex = 0
      }
      let scribbleRect = new ScribbleRect(xPos, height/2, size, size, scribble)
      bManager.add(scribbleRect)
    }
    if(e.note.number == 46){
      // hat
      let size = 70
      let xPos = drumXPositions[cIndex++]
      if(cIndex > 3){
        cIndex = 0
      }
      let scribbleTri = new ScribbleTriangle(xPos, height/2, size, size, scribble)
      bManager.add(scribbleTri)
    }
  }
)

}
function draw() {
  background(0)
  bManager.update()
}
function drawBlob() {

}
class BlobManager {
  maxHistory = 16
  constructor() {
    this.history = []
  }
  add(blob){
    this.history.unshift(blob)
    if(this.history.length >= this.maxHistory){
      this.history.splice(this.maxHistory, 1)
    }
  }
  update(){
    for(let i = 0; i < this.history.length; i++){
      this.history[i].draw()
    }
  }
}