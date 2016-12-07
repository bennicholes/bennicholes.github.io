
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





