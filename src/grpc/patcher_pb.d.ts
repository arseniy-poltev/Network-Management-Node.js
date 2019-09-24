// package: 
// file: patcher.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class ServerAgentVersionRequest extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): void;

    getLocalAgentFilename(): string;
    setLocalAgentFilename(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerAgentVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServerAgentVersionRequest): ServerAgentVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerAgentVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerAgentVersionRequest;
    static deserializeBinaryFromReader(message: ServerAgentVersionRequest, reader: jspb.BinaryReader): ServerAgentVersionRequest;
}

export namespace ServerAgentVersionRequest {
    export type AsObject = {
        version: string,
        localAgentFilename: string,
    }
}

export class ServerAgentVersionResponse extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): void;

    getUpdateFileUrl(): string;
    setUpdateFileUrl(value: string): void;

    getUpdateType(): UpdateTypeEnum;
    setUpdateType(value: UpdateTypeEnum): void;

    getAgentPackageHash(): string;
    setAgentPackageHash(value: string): void;

    getAgentPackageHashAlgo(): string;
    setAgentPackageHashAlgo(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerAgentVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ServerAgentVersionResponse): ServerAgentVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerAgentVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerAgentVersionResponse;
    static deserializeBinaryFromReader(message: ServerAgentVersionResponse, reader: jspb.BinaryReader): ServerAgentVersionResponse;
}

export namespace ServerAgentVersionResponse {
    export type AsObject = {
        version: string,
        updateFileUrl: string,
        updateType: UpdateTypeEnum,
        agentPackageHash: string,
        agentPackageHashAlgo: string,
    }
}

export enum UpdateTypeEnum {
    PATCH = 0,
    FULL = 1,
}
