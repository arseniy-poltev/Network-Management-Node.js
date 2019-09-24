// package: 
// file: dashboard.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";

export class DashboardDataRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getHasPeerOutput(): boolean;
    setHasPeerOutput(value: boolean): void;

    getPeerOutput(): number;
    setPeerOutput(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashboardDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DashboardDataRequest): DashboardDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashboardDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashboardDataRequest;
    static deserializeBinaryFromReader(message: DashboardDataRequest, reader: jspb.BinaryReader): DashboardDataRequest;
}

export namespace DashboardDataRequest {
    export type AsObject = {
        requestId: number,
        hasPeerOutput: boolean,
        peerOutput: number,
    }
}

export class DashboardData extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getTs(): number;
    setTs(value: number): void;

    getOpWanTxBytes(): number;
    setOpWanTxBytes(value: number): void;

    getOpLanRxBytes(): number;
    setOpLanRxBytes(value: number): void;

    getOpWanRxBytes(): number;
    setOpWanRxBytes(value: number): void;

    getOpLanTxBytes(): number;
    setOpLanTxBytes(value: number): void;


    hasBpWanRxBytes(): boolean;
    clearBpWanRxBytes(): void;
    getBpWanRxBytes(): number;
    setBpWanRxBytes(value: number): void;


    hasLoss(): boolean;
    clearLoss(): void;
    getLoss(): number;
    setLoss(value: number): void;


    hasBpWanTxBytes(): boolean;
    clearBpWanTxBytes(): void;
    getBpWanTxBytes(): number;
    setBpWanTxBytes(value: number): void;


    hasRtt(): boolean;
    clearRtt(): void;
    getRtt(): number;
    setRtt(value: number): void;


    getBpLossCase(): DashboardData.BpLossCase;
    getBpRttCase(): DashboardData.BpRttCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashboardData.AsObject;
    static toObject(includeInstance: boolean, msg: DashboardData): DashboardData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashboardData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashboardData;
    static deserializeBinaryFromReader(message: DashboardData, reader: jspb.BinaryReader): DashboardData;
}

export namespace DashboardData {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        ts: number,
        opWanTxBytes: number,
        opLanRxBytes: number,
        opWanRxBytes: number,
        opLanTxBytes: number,
        bpWanRxBytes: number,
        loss: number,
        bpWanTxBytes: number,
        rtt: number,
    }

    export enum BpLossCase {
        BPLOSS_NOT_SET = 0,
    
    BP_WAN_RX_BYTES = 8,

    LOSS = 9,

    }

    export enum BpRttCase {
        BPRTT_NOT_SET = 0,
    
    BP_WAN_TX_BYTES = 10,

    RTT = 11,

    }

}

export class DashboardTopPortsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getTimeSpanSeconds(): number;
    setTimeSpanSeconds(value: number): void;

    getTopN(): number;
    setTopN(value: number): void;

    getHasPeerOutput(): boolean;
    setHasPeerOutput(value: boolean): void;

    getPeerOutput(): number;
    setPeerOutput(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashboardTopPortsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DashboardTopPortsRequest): DashboardTopPortsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashboardTopPortsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashboardTopPortsRequest;
    static deserializeBinaryFromReader(message: DashboardTopPortsRequest, reader: jspb.BinaryReader): DashboardTopPortsRequest;
}

export namespace DashboardTopPortsRequest {
    export type AsObject = {
        requestId: number,
        timeSpanSeconds: number,
        topN: number,
        hasPeerOutput: boolean,
        peerOutput: number,
    }
}

export class DashboardTopPorts extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearProtocolList(): void;
    getProtocolList(): Array<ProtocolInfo>;
    setProtocolList(value: Array<ProtocolInfo>): void;
    addProtocol(value?: ProtocolInfo, index?: number): ProtocolInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashboardTopPorts.AsObject;
    static toObject(includeInstance: boolean, msg: DashboardTopPorts): DashboardTopPorts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashboardTopPorts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashboardTopPorts;
    static deserializeBinaryFromReader(message: DashboardTopPorts, reader: jspb.BinaryReader): DashboardTopPorts;
}

export namespace DashboardTopPorts {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        protocolList: Array<ProtocolInfo.AsObject>,
    }
}

export class ProtocolInfo extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): void;

    getLanBytes(): number;
    setLanBytes(value: number): void;

    getWanBytes(): number;
    setWanBytes(value: number): void;

    getPercentage(): number;
    setPercentage(value: number): void;

    getPort(): number;
    setPort(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtocolInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ProtocolInfo): ProtocolInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtocolInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtocolInfo;
    static deserializeBinaryFromReader(message: ProtocolInfo, reader: jspb.BinaryReader): ProtocolInfo;
}

export namespace ProtocolInfo {
    export type AsObject = {
        label: string,
        lanBytes: number,
        wanBytes: number,
        percentage: number,
        port: number,
    }
}
