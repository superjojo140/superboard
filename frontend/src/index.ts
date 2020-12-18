import * as fabric from "fabric"
import { Change, ChangeEventType, CreateEvent, FabricObjectType, MoveEvent, ScaleEvent } from "./types";

let changeHistory: Change[] = []

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

//socketio init
let socket = io();

socket.on("server.change",applyChange)

function addRectangle() {
    // create a rectangle object
    let createEvent: CreateEvent = {
        objectId: "dummyObjectId",
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
        event: createEvent,
    }

    emmitChange(change);



}

function applyChange(change: Change) {
    document.getElementById("eventContainer").innerHTML = ` <div class="eventItem"><pre><code>${JSON.stringify(change, undefined, 4)}</code></pre></div>` + document.getElementById("eventContainer").innerHTML
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
            rect.id = e.objectId;
            canvas.add(rect);


            rect.on('moved', function (opt) {
                const moveEvent: MoveEvent = {
                    objectId: opt.target.id,
                    from: {
                        x: r(opt.transform.original.left),
                        y: r(opt.transform.original.top)
                    },
                    to: {
                        x: r(opt.target.left),
                        y: r(opt.target.top)
                    }
                };
                const change: Change = {
                    timestamp: new Date().getTime(),
                    initiator: "dummy",
                    eventType: ChangeEventType.MOVE,
                    event: moveEvent,
                }
                emmitChange(change)
            });
            rect.on('scaled', function (opt) {
                const scaleEvent: ScaleEvent = {
                    objectId: opt.target.id,
                    from: {
                        x: opt.transform.original.scaleX.toFixed(2),
                        y: opt.transform.original.scaleY.toFixed(2),
                    },
                    to: {
                        x: opt.target.scaleX.toFixed(2),
                        y: opt.target.scaleY.toFixed(2),
                    }
                };
                const change: Change = {
                    timestamp: new Date().getTime(),
                    initiator: "dummy",
                    eventType: ChangeEventType.SCALE,
                    event: scaleEvent,
                }
                emmitChange(change)
            });
            break;
    }
}

function r(n) {
    return Math.round(n);
}

function emmitChange(change:Change){
    socket.emit('client.change', change);
}

document.getElementById("addRectButton").addEventListener("click", addRectangle);