// package: 
// file: file_transfer.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class FileInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    getHash(): string;
    setHash(value: string): void;

    getHashAlgo(): string;
    setHashAlgo(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfo;
    static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
    export type AsObject = {
        name: string,
        size: number,
        hash: string,
        hashAlgo: string,
    }
}

export class Chunk extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chunk.AsObject;
    static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chunk;
    static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class FileTransferRequest extends jspb.Message { 
    getFileUrl(): string;
    setFileUrl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileTransferRequest): FileTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileTransferRequest;
    static deserializeBinaryFromReader(message: FileTransferRequest, reader: jspb.BinaryReader): FileTransferRequest;
}

export namespace FileTransferRequest {
    export type AsObject = {
        fileUrl: string,
    }
}

export class FileTransferResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasFileInfo(): boolean;
    clearFileInfo(): void;
    getFileInfo(): FileInfo | undefined;
    setFileInfo(value?: FileInfo): void;


    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Chunk | undefined;
    setChunk(value?: Chunk): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileTransferResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FileTransferResponse): FileTransferResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileTransferResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileTransferResponse;
    static deserializeBinaryFromReader(message: FileTransferResponse, reader: jspb.BinaryReader): FileTransferResponse;
}

export namespace FileTransferResponse {
    export type AsObject = {
        error?: error_pb.Error.AsObject,
        fileInfo?: FileInfo.AsObject,
        chunk?: Chunk.AsObject,
    }
}
