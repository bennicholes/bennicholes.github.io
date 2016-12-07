function roundRobin() {
    //constructor(step, node1Conn, node2Conn, node3Conn, currentNode, latency, cpu, region )

    var node1 = 1;
    var node2 = 2;
    var node3 = 3;
    var node1Conn = 0;
    var node2Conn = 0;
    var node3Conn = 0;
    var table = [];
    var n = 1;

    for (var i = 0; i < 20; i++, n++) {
        var it;

        if (n > 3)
            n = 1;

        if (n === 1) {
            node1Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, 0, 0, "USA");
        } else if (n === 2) {
            node2Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, 0, 0, "USA");
        } else if (n === 3) {
            node3Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, 0, 0, "USA");
        }

        table.push(it);
    }
    printResults(table);
    simulateColors(table);
    return table;
}

function lowestLatency() {
    var node1 = 1;
    var node2 = 2;
    var node3 = 3;
    var node1Conn = 0;
    var node2Conn = 0;
    var node3Conn = 0;
    var table = [];
    var lowLatencyNode = 0;
    var latencya;
    var latencyb;
    var latencyc;
    var lowLatencyVal;

    for (var i = 0; i < 20; i++) {

        var it;


        latencya = Math.floor((Math.random() * 200) + 1);
        latencyb = Math.floor((Math.random() * 200) + 1);
        latencyc = Math.floor((Math.random() * 200) + 1);

        lowLatencyVal = Math.min(latencya, latencyb, latencyc);

        if (latencya === lowLatencyVal)
            lowLatencyNode = 1;
        else if (latencyb === lowLatencyVal)
            lowLatencyNode = 2;
        else
            lowLatencyNode = 3;
        if (lowLatencyNode === 1) {
            node1Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, latencya, 0, "USA");
        }
        if (lowLatencyNode === 2) {
            node2Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, latencyb, 0, "USA");
        }
        if (lowLatencyNode === 3) {
            node3Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, latencyc, 0, "USA");
        }

        table.push(it);
    }
    printResults(table);
    simulateColors(table);
    return table;
}

function enhancedTDMA() {

    var node1 = 1;
    var node2 = 2;
    var node3 = 3;
    var node1Conn = 0;
    var node2Conn = 0;
    var node3Conn = 0;
    var table = [];
    var node1Max = 1;
    var timeFrame = 5;
    var timeSegment = 1;
    var chosenNode1 = 0;
    var chosenNode2 = 0;
    var cpu1Uti = 0;
    var cpu2Uti = 0;
    var lowerCPUNode = 0;
    var currentItNode = 0;

    for (var i = 0; i < 20; i++, timeSegment++) {
        var it;

        if (timeSegment === 1) {

            chosenNode1 = Math.floor((Math.random() * 3) + 1);
            do {
                chosenNode2 = Math.floor((Math.random() * 3) + 1);
            }
            while (chosenNode1 === chosenNode2);
        }

        //generate cpu utilization for the 2 nodes.
        cpu1Uti = Math.floor((Math.random() * 20) + 1);
        cpu2Uti = Math.floor((Math.random() * 20) + 1);

        if (cpu1Uti === cpu2Uti) {
            currentItNode = chosenNode1;
        } else {
            if (cpu1Uti < cpu2Uti)
                currentItNode = chosenNode1;
            else
                currentItNode = chosenNode2;
        }

        if (currentItNode === node1) {
            node1Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, 0, 0, "USA");
        } else if (currentItNode === node2) {
            node2Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, 0, 0, "USA");
        } else if (currentItNode === node3) {
            node3Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, 0, 0, "USA");
        }

        if (timeSegment === timeFrame) {
            timeSegment = 0;
        }

        table.push(it);
    }
    printResults(table);
    simulateColors(table);
    return table;
}


//TODO// is the parameter required?
function leastConnections() {
    var node1 = 1;
    var node2 = 2;
    var node3 = 3;
    var node1Conn = 0;
    var node2Conn = 0;
    var node3Conn = 0;
    var table = [];
    var minNode = 0;
    var i = 0;

    //generate the # of initial connections per node. NOTE: node connections are fixed in simulation.
    node1Conn = 0;
    node2Conn = 8;
    //numIterations would also be used as a max in this simulation.
    node3Conn = 20;

    while (node1Conn != node2Conn || node2Conn != node3Conn) {

        var it;
        minNode = Math.min(node1Conn, node2Conn, node3Conn);

        if (minNode === node1Conn) {
            node1Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, 0, 0, "USA");
        } else if (minNode === node2Conn) {
            node2Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, 0, 0, "USA");
        } else if (minNode === node3Conn) {
            node3Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, 0, 0, "USA");
        }

        i++;
        table.push(it);

    }
    printResults(table);
    simulateColors(table);
    return table;
}
//node 1 has 1x weight, node 2 has 2x weight, node 3 has 3x weight
function weightedRoundRobin() {

    var node1 = 1;
    var node2 = 2;
    var node3 = 3;
    var node1Conn = 0;
    var node2Conn = 0;
    var node3Conn = 0;
    var table = [];
    var node1Max = 1;
    var node2Max = 2;
    var node3Max = 3;
    var currentN1 = 0;
    var currentN2 = 0;
    var currentN3 = 0;
    var n = 1;
    var doneIteration = false;

    for (var i = 0; i < 20; i++, n++) {

        var it;

        if (n > 3)
            n = 1;

        if (currentN3 === node3Max) {
            currentN1 = 0;
            currentN2 = 0;
            currentN3 = 0;
        }

        if (n === 1 && currentN1 < node1Max) {
            currentN1++;
            node1Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, 0, 0, "USA");

        } else if (n === 1 && currentN1 === node1Max) {
            n++;
        }
        if (n === 2 && currentN2 < node2Max) {
            currentN2++;
            node2Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, 0, 0, "USA");

        } else if (n === 2 && currentN2 === node2Max) {
            n++;
        }
        if (n === 3 && currentN3 < node3Max) {
            currentN3++;
            node3Conn++;
            it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, 0, 0, "USA");

        }

        table.push(it);
    }
    printResults(table);
    simulateColors(table);
    return table;
}


function enhancedEnforced() {

    var node1 = 1;
    var node2 = 2;
    var node3 = 3;
    var node1Conn = 0;
    var node2Conn = 0;
    var node3Conn = 0;
    var table = [];
    var latency = 0;
    var cpu = 0;

    userInput = getInputVals();
    preferredCPU = userInput.prefcpu;
    preferredLatency = userInput.preflatency;
    preferredRegion = userInput.region;
    cpuWindow = userInput.cpuRange;
    latencyWindow = userInput.latencyRange;

    if (preferredRegion === 1)
        defaultRegion = 2;
    else
        defaultRegion = 1;

    for (var i = 0; i < 20; i++) {
        var it;

        latency = Math.floor((Math.random() * 200) + 1);

        cpu = Math.floor((Math.random() * 99) + 20);

        if (withinWindow(latency, latencyWindow, preferredLatency) && withinWindow(cpu, cpuWindow, preferredCPU)) {
            if (preferredRegion === 1) {
                node1Conn++;
                it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, latency, cpu, "USA");
            }
            if (preferredRegion === 2) {
                node2Conn++;
                it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, latency, cpu, "Russia");
            }
            if (preferredRegion === 3) {
                node3Conn++;
                it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, latency, cpu, "China");
            }
        }

        // //else load balance iteration to default server.
        else {

            latency = Math.floor((Math.random() * 200) + 1);

            cpu = Math.floor((Math.random() * 99) + 20);

            if (defaultRegion === 1) {
                node1Conn++;
                it = new iteration(i, node1Conn, node2Conn, node3Conn, node1, latency, cpu, "USA");
            }
            if (defaultRegion === 2) {
                node2Conn++;
                it = new iteration(i, node1Conn, node2Conn, node3Conn, node2, latency, cpu, "Russia");
            }
            if (defaultRegion === 3) {
                node3Conn++;
                it = new iteration(i, node1Conn, node2Conn, node3Conn, node3, latency, cpu, "China");
            }

        }
        table.push(it);
    }
    printResults(table);
    simulateColors(table);
    return table;
}

function withinWindow(actual, window, preferred) {

    if (Math.abs(actual - preferred) <= window)
        return true;

    else
        return false
}
