function iteration (step, node1Conn, node2Conn, node3Conn, currentNode, latency, cpu, region ) {
    this.step = step;
    this.node1Conn = node1Conn;
    this.node2Conn = node2Conn;
    this.node3Conn = node3Conn;    
    this.currentNode = currentNode;
    this.latency = latency;
    this.cpu = cpu;
    this.region = region;    
}

function initialize() {
  var x = document.getElementById("canvas");
  var cr = x.getContext("2d");
  cr.beginPath();
  cr.rect(150,180,50,50);
  cr.strokeStyle = 'black';
  cr.stroke();
  cr.closePath();

  var circle = x.getContext("2d");
  circle.beginPath();
  circle.arc(500,200,40,0,2*Math.PI);
  circle.strokeStyle = 'black';
  circle.stroke();
  circle.closePath();

  var client1 = x.getContext("2d");
  client1.beginPath();
  client1.rect(300,400,80,80);
  client1.strokeStyle = 'black';
  client1.stroke();
  client1.closePath();

  var client2 = x.getContext("2d");
  client2.beginPath();
  client2.rect(460,400,80,80);
  client2.strokeStyle = 'black';
  client2.stroke();
  client2.closePath();

  var client3 = x.getContext("2d");
  client3.beginPath();
  client3.rect(620,400,80,80);
  client3.strokeStyle = 'black';
  client3.stroke();
  client3.closePath();

  var line1 = x.getContext("2d");
  line1.beginPath();
  line1.moveTo(465,220);
  line1.lineTo(350,400);
  line1.strokeStyle = 'black';
  line1.stroke();
  line1.closePath();
  
  var line2 = x.getContext("2d");
  line2.beginPath();
  line2.moveTo(500,240);
  line2.lineTo(500,400);
  line2.strokeStyle = 'black';
  line2.stroke();
  line2.closePath();

  var line3 = x.getContext("2d");
  line3.beginPath();
  line3.moveTo(535,220);
  line3.lineTo(655,400);
  line3.strokeStyle = 'black';
  line3.stroke();
  line3.closePath();

    var inputLine = x.getContext("2d");
    inputLine.beginPath();
    inputLine.moveTo(200, 203);
    inputLine.lineTo(460, 203);
    inputLine.strokeStyle = 'black';
    inputLine.stroke();
    inputLine.closePath();
}

initialize();

// bind event handler to reset button
// clears the screen
function reset() {
    location.reload();
}


function drawLine1(color) {
    var x = document.getElementById("canvas");
    var line1 = x.getContext("2d");
    line1.beginPath();
    line1.moveTo(465, 220);
    line1.lineTo(350, 400);
    line1.strokeStyle = color;
    line1.lineWidth = 10;
    line1.stroke();
    line1.closePath();
}

function drawLine2(color) {
    var x = document.getElementById("canvas");
    var line2 = x.getContext("2d");
    line2.beginPath();
    line2.moveTo(500, 240);
    line2.lineTo(500, 400);
    line2.lineWidth = 10;
    line2.strokeStyle = color;
    line2.stroke();
    line2.closePath();
}

function drawLine3(color) {
    var x = document.getElementById("canvas");
    var line3 = x.getContext("2d");
    line3.beginPath();
    line3.moveTo(535, 220);
    line3.lineTo(655, 400);
    line3.lineWidth = 10;
    line3.strokeStyle = color;
    line3.stroke();
    line3.closePath();
}

function drawStep(currStep) {
    var x = document.getElementById("canvas");
    var draw = x.getContext("2d");
    draw.beginPath();
    draw.font = "20px Georgia";
    draw.fillStyle = 'black';
    draw.fillText("Step: " + currStep, 600, 80);
    draw.closePath();
}

function clearStep() {
    var x = document.getElementById("canvas");
    var draw = x.getContext("2d");

    draw.beginPath();
    draw.fillStyle = 'white';
    draw.fillRect(595, 45, 80, 80);
    draw.stroke();
    draw.closePath();
}

function printResults(arr){

  tableLength = arr.length;

  var tbl = document.getElementById("output");
  for( var stepSim = 0; stepSim < tableLength; stepSim++ ){
        
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].step + 1));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].node1Conn));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].node2Conn));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].node3Conn));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].currentNode));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].latency));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].cpu));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].region));
    tr.appendChild(td);

    tbl.appendChild(tr);
    }
}

function simulateColors(arr) {
    tableLength = arr.length;
    var x = document.getElementById("canvas");
    var red = 'red';
    var black = 'black';

    var callNextStep = function(i) {

        if (i === tableLength) {
            return;
        }

        current = arr[i].currentNode;

        if (current == 1) {

            var currStep = arr[i].step + 1;
            drawLine1(red);
            drawStep(currStep);

            setTimeout(
                function() {
                    drawLine1(black);
                    clearStep();
                    callNextStep(++i);
                }, 2000);
        }

        if (current == 2) {

            var currStep = arr[i].step + 1;
            drawLine2(red);
            drawStep(currStep);

            setTimeout(
                function() {
                    drawLine2(black);
                    clearStep();
                    callNextStep(++i);
                }, 2000);
        }

        if (current == 3) {

            var currStep = arr[i].step + 1;
            drawLine3(red);
            drawStep(currStep);

            setTimeout(
                function() {
                    drawLine3(black);
                    clearStep();
                    callNextStep(++i);
                }, 2000);
        }
    }
    callNextStep(0);
}

function getInputVals() {
    var inputValues = { prefcpu: "", preflatency: "", cpuRange: "", latencyRange: "", region: "" };

    inputValues.prefcpu = parseInt(document.getElementById("prefcpu").value);
    inputValues.preflatency = parseInt(document.getElementById("preflatency").value);
    inputValues.cpuRange = parseInt(document.getElementById("cpurange").value);
    inputValues.latencyRange = parseInt(document.getElementById("latencyrange").value);


    if (document.getElementById('r1').checked) {
        inputValues.region = parseInt(document.getElementById('r1').value);
    }
    if (document.getElementById('r2').checked) {
        inputValues.region = parseInt(document.getElementById('r2').value);
    }
    if (document.getElementById('r3').checked) {
        inputValues.region = parseInt(document.getElementById('r3').value);
    }
    return inputValues;
}




