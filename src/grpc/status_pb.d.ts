// package: 
// file: status.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class Alert extends jspb.Message { 
    getReconfigure(): boolean;
    setReconfigure(value: boolean): void;

    getLastErrorAt(): number;
    setLastErrorAt(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Alert.AsObject;
    static toObject(includeInstance: boolean, msg: Alert): Alert.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Alert, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Alert;
    static deserializeBinaryFromReader(message: Alert, reader: jspb.BinaryReader): Alert;
}

export namespace Alert {
    export type AsObject = {
        reconfigure: boolean,
        lastErrorAt: number,
    }
}

export class StatusUpdateRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatusUpdateRequest): StatusUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusUpdateRequest;
    static deserializeBinaryFromReader(message: StatusUpdateRequest, reader: jspb.BinaryReader): StatusUpdateRequest;
}

export namespace StatusUpdateRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class StatusUpdate extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasAlert(): boolean;
    clearAlert(): void;
    getAlert(): Alert | undefined;
    setAlert(value?: Alert): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: StatusUpdate): StatusUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusUpdate;
    static deserializeBinaryFromReader(message: StatusUpdate, reader: jspb.BinaryReader): StatusUpdate;
}

export namespace StatusUpdate {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        alert?: Alert.AsObject,
    }
}
