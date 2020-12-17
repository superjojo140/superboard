import * as fabric from "fabric"
import { Change, ChangeEventType, CreateEvent, FabricObjectType } from "./types";

let changeHistory:Change[] = []

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');




function addRectangle() {
    // create a rectangle object
    let createEvent: CreateEvent = {
        objectType: FabricObjectType.RECTANGLE,
        properties: {
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            fill: 'green'
        }
    }

    let change: Change = {
        timestamp: new Date().getTime(),
        initiator: "dummy",
        eventType: ChangeEventType.CREATE,
        event: createEvent
    }

    applyChange(change);



}

function applyChange(change: Change) {
    document.getElementById("eventContainer").innerHTML += ` <div class="eventItem"><pre><code>${JSON.stringify(change,undefined,4)}</code></pre></div>`
    //TODO Determine wether to apply this change...
    changeHistory.push(change);

    switch (change.eventType) {
        case ChangeEventType.CREATE: applyCreateEvent(change.event as CreateEvent); break;
    }

}

function applyCreateEvent(e: CreateEvent) {
    switch (e.objectType) {
        case FabricObjectType.RECTANGLE:
            var rect = new fabric.Rect(e.properties);
            canvas.add(rect);
            // rect.on('moved', function (opt) {
            //     const desc = `${opt.transform.action}: From (${r(opt.transform.original.left)}|${r(opt.transform.original.top)}) to (${r(opt.target.left)}|${r(opt.target.top)})`;
            //     let event = new PBEvent(Actions.MOVED, Types.Rectangle, desc, {})
            //     applyChange(event)
            // });
            // rect.on('scaled', function (opt) {
            //     let event = new PBEvent(Actions.SCALED, Types.Rectangle, `Scaled from ${opt.transform.original.scaleX} to ${opt.target.scaleX}`, {})
            //     applyChange(event)
            // });
            break;
    }
}

function r(n) {
    return Math.round(n);
}

document.getElementById("addRectButton").addEventListener("click", addRectangle);