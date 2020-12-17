export interface Point {
    x: number;
    y: number;
}

export interface ChangeEvent {
    objectId:string;
}

export interface Change {
    timestamp: number;
    initiator: string;
    eventType: ChangeEventType;
    event: ChangeEvent;
}

export interface MoveEvent extends ChangeEvent {
    from: Point;
    to: Point;
}

export interface ScaleEvent extends ChangeEvent {
    from: Point;
    to: Point;
}

export interface CreateEvent extends ChangeEvent {
    objectType: FabricObjectType;
    properties: FabricObjectProperties;
}

export interface FabricObjectProperties {
    left: number;
    top: number;
    width: number;
    height: number;
    fill?: string;
}

export enum FabricObjectType { RECTANGLE = "RECTANGLE" };
export enum ChangeEventType { CREATE = "CREATE", MOVE = "MOVE", SCALE = "SCALE" };