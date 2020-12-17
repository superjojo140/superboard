import * as fabric from "fabric"

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

class PBEvent {
    constructor(public action, public objectType, public name, public options) {
        this.action = action;
        this.objectType = objectType;
        this.name = name;
        this.options = options;
    }
}

const Types = {
    Rectangle: "Rectangle"
}

const Actions = {
    CREATE: "CREATE",
    MOVED: "MOVED",
    SCALED: "SCALED",
}




function addRectangle() {
    // create a rectangle object
    let event = new PBEvent(Actions.CREATE, Types.Rectangle, "Create red Rectangle", {
        left: 100,
        top: 100,
        fill: 'red',
        width: 40,
        height: 40
    });

    applyEvent(event);



}

function applyEvent(event) {
    document.getElementById("eventContainer").innerHTML += ` <div class="eventItem">${event.name}</div>`

    if (event.action == Actions.CREATE) {
        switch (event.objectType) {
            case Types.Rectangle:
                var rect = new fabric.Rect(event.options);
                // "add" rectangle onto canvas
                canvas.add(rect);
                rect.on('moved', function (opt) {
                    const desc = `${opt.transform.action}: From (${r(opt.transform.original.left)}|${r(opt.transform.original.top)}) to (${r(opt.target.left)}|${r(opt.target.top)})`;
                    let event = new PBEvent(Actions.MOVED, Types.Rectangle, desc, {})
                    applyEvent(event)
                });
                rect.on('scaled', function (opt) {
                    let event = new PBEvent(Actions.SCALED, Types.Rectangle, `Scaled from ${opt.transform.original.scaleX} to ${opt.target.scaleX}`, {})
                    applyEvent(event)
                });
                break;
        }
    }

    if (event.action == Actions.MOVED) {
        switch (event.objectType) {
            case Types.Rectangle:
                //move it
                break;
        }
    }
}

function r(n){
    return Math.round(n);
}

document.getElementById("addRectButton").addEventListener("click",addRectangle);