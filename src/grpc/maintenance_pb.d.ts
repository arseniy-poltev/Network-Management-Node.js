// package: 
// file: maintenance.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";
import * as file_transfer_pb from "./file_transfer_pb";

export class StartBackupRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getUpdateSchedule(): boolean;
    setUpdateSchedule(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartBackupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartBackupRequest): StartBackupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartBackupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartBackupRequest;
    static deserializeBinaryFromReader(message: StartBackupRequest, reader: jspb.BinaryReader): StartBackupRequest;
}

export namespace StartBackupRequest {
    export type AsObject = {
        requestId: number,
        updateSchedule: boolean,
    }
}

export class StartBackupResponse extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartBackupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartBackupResponse): StartBackupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartBackupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartBackupResponse;
    static deserializeBinaryFromReader(message: StartBackupResponse, reader: jspb.BinaryReader): StartBackupResponse;
}

export namespace StartBackupResponse {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class BackupInfo extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): void;

    getUpdateSchedule(): boolean;
    setUpdateSchedule(value: boolean): void;


    hasFileInfo(): boolean;
    clearFileInfo(): void;
    getFileInfo(): file_transfer_pb.FileInfo | undefined;
    setFileInfo(value?: file_transfer_pb.FileInfo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupInfo.AsObject;
    static toObject(includeInstance: boolean, msg: BackupInfo): BackupInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupInfo;
    static deserializeBinaryFromReader(message: BackupInfo, reader: jspb.BinaryReader): BackupInfo;
}

export namespace BackupInfo {
    export type AsObject = {
        version: string,
        updateSchedule: boolean,
        fileInfo?: file_transfer_pb.FileInfo.AsObject,
    }
}

export class UploadBackupRequest extends jspb.Message { 

    hasBackupInfo(): boolean;
    clearBackupInfo(): void;
    getBackupInfo(): BackupInfo | undefined;
    setBackupInfo(value?: BackupInfo): void;


    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): file_transfer_pb.Chunk | undefined;
    setChunk(value?: file_transfer_pb.Chunk): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadBackupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadBackupRequest): UploadBackupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadBackupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadBackupRequest;
    static deserializeBinaryFromReader(message: UploadBackupRequest, reader: jspb.BinaryReader): UploadBackupRequest;
}

export namespace UploadBackupRequest {
    export type AsObject = {
        backupInfo?: BackupInfo.AsObject,
        chunk?: file_transfer_pb.Chunk.AsObject,
    }
}

export class UploadBackupResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadBackupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadBackupResponse): UploadBackupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadBackupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadBackupResponse;
    static deserializeBinaryFromReader(message: UploadBackupResponse, reader: jspb.BinaryReader): UploadBackupResponse;
}

export namespace UploadBackupResponse {
    export type AsObject = {
    }
}
