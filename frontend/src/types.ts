export interface Point {
    x: number;
    y: number;
}

export interface ChangeEvent {

}

export interface Change {
    timestamp: number;
    initiator: string;
    eventType: ChangeEventType;
    event: ChangeEvent;
}

export interface DragEvent extends ChangeEvent {
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