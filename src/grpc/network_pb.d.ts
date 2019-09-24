// package: 
// file: network.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as error_pb from "./error_pb";
import * as report_pb from "./report_pb";

export class NetworkInterfaceStats extends jspb.Message { 
    getBytes(): number;
    setBytes(value: number): void;

    getErrors(): number;
    setErrors(value: number): void;

    getDropped(): number;
    setDropped(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaceStats.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaceStats): NetworkInterfaceStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaceStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaceStats;
    static deserializeBinaryFromReader(message: NetworkInterfaceStats, reader: jspb.BinaryReader): NetworkInterfaceStats;
}

export namespace NetworkInterfaceStats {
    export type AsObject = {
        bytes: number,
        errors: number,
        dropped: number,
    }
}

export class NetworkInterface extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getOnline(): boolean;
    setOnline(value: boolean): void;

    getMac(): string;
    setMac(value: string): void;

    getDriver(): string;
    setDriver(value: string): void;

    getDuplex(): string;
    setDuplex(value: string): void;

    getSpeed(): number;
    setSpeed(value: number): void;

    getMtu(): number;
    setMtu(value: number): void;


    hasReceive(): boolean;
    clearReceive(): void;
    getReceive(): NetworkInterfaceStats | undefined;
    setReceive(value?: NetworkInterfaceStats): void;


    hasTransmit(): boolean;
    clearTransmit(): void;
    getTransmit(): NetworkInterfaceStats | undefined;
    setTransmit(value?: NetworkInterfaceStats): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterface.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterface): NetworkInterface.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterface, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterface;
    static deserializeBinaryFromReader(message: NetworkInterface, reader: jspb.BinaryReader): NetworkInterface;
}

export namespace NetworkInterface {
    export type AsObject = {
        name: string,
        online: boolean,
        mac: string,
        driver: string,
        duplex: string,
        speed: number,
        mtu: number,
        receive?: NetworkInterfaceStats.AsObject,
        transmit?: NetworkInterfaceStats.AsObject,
    }
}

export class NetworkInterfacesRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfacesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfacesRequest): NetworkInterfacesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfacesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfacesRequest;
    static deserializeBinaryFromReader(message: NetworkInterfacesRequest, reader: jspb.BinaryReader): NetworkInterfacesRequest;
}

export namespace NetworkInterfacesRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class NetworkInterfaces extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearNetworkInterfaceList(): void;
    getNetworkInterfaceList(): Array<NetworkInterface>;
    setNetworkInterfaceList(value: Array<NetworkInterface>): void;
    addNetworkInterface(value?: NetworkInterface, index?: number): NetworkInterface;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaces.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaces): NetworkInterfaces.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaces, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaces;
    static deserializeBinaryFromReader(message: NetworkInterfaces, reader: jspb.BinaryReader): NetworkInterfaces;
}

export namespace NetworkInterfaces {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        networkInterfaceList: Array<NetworkInterface.AsObject>,
    }
}

export class NetworkQosClassNumber extends jspb.Message { 
    getValue(): number;
    setValue(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkQosClassNumber.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkQosClassNumber): NetworkQosClassNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkQosClassNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkQosClassNumber;
    static deserializeBinaryFromReader(message: NetworkQosClassNumber, reader: jspb.BinaryReader): NetworkQosClassNumber;
}

export namespace NetworkQosClassNumber {
    export type AsObject = {
        value: number,
    }
}

export class NetworkQosReportRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;


    hasQosClass(): boolean;
    clearQosClass(): void;
    getQosClass(): NetworkQosClassNumber | undefined;
    setQosClass(value?: NetworkQosClassNumber): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkQosReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkQosReportRequest): NetworkQosReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkQosReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkQosReportRequest;
    static deserializeBinaryFromReader(message: NetworkQosReportRequest, reader: jspb.BinaryReader): NetworkQosReportRequest;
}

export namespace NetworkQosReportRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        qosClass?: NetworkQosClassNumber.AsObject,
    }
}

export class NetworkQosReport extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearReportList(): void;
    getReportList(): Array<report_pb.Report>;
    setReportList(value: Array<report_pb.Report>): void;
    addReport(value?: report_pb.Report, index?: number): report_pb.Report;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkQosReport.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkQosReport): NetworkQosReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkQosReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkQosReport;
    static deserializeBinaryFromReader(message: NetworkQosReport, reader: jspb.BinaryReader): NetworkQosReport;
}

export namespace NetworkQosReport {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        reportList: Array<report_pb.Report.AsObject>,
    }
}

export class NetworkOptimizationRatiosRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationRatiosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationRatiosRequest): NetworkOptimizationRatiosRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationRatiosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationRatiosRequest;
    static deserializeBinaryFromReader(message: NetworkOptimizationRatiosRequest, reader: jspb.BinaryReader): NetworkOptimizationRatiosRequest;
}

export namespace NetworkOptimizationRatiosRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class NetworkOptimizationRatios extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationRatios.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationRatios): NetworkOptimizationRatios.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationRatios, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationRatios;
    static deserializeBinaryFromReader(message: NetworkOptimizationRatios, reader: jspb.BinaryReader): NetworkOptimizationRatios;
}

export namespace NetworkOptimizationRatios {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class NetworkOptimizationPassThroughRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationPassThroughRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationPassThroughRequest): NetworkOptimizationPassThroughRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationPassThroughRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationPassThroughRequest;
    static deserializeBinaryFromReader(message: NetworkOptimizationPassThroughRequest, reader: jspb.BinaryReader): NetworkOptimizationPassThroughRequest;
}

export namespace NetworkOptimizationPassThroughRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
    }
}

export class NetworkOptimizationPassThrough extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationPassThrough.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationPassThrough): NetworkOptimizationPassThrough.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationPassThrough, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationPassThrough;
    static deserializeBinaryFromReader(message: NetworkOptimizationPassThrough, reader: jspb.BinaryReader): NetworkOptimizationPassThrough;
}

export namespace NetworkOptimizationPassThrough {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class NetworkOptimizationLanToWanRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationLanToWanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationLanToWanRequest): NetworkOptimizationLanToWanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationLanToWanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationLanToWanRequest;
    static deserializeBinaryFromReader(message: NetworkOptimizationLanToWanRequest, reader: jspb.BinaryReader): NetworkOptimizationLanToWanRequest;
}

export namespace NetworkOptimizationLanToWanRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class NetworkOptimizationLanToWan extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationLanToWan.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationLanToWan): NetworkOptimizationLanToWan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationLanToWan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationLanToWan;
    static deserializeBinaryFromReader(message: NetworkOptimizationLanToWan, reader: jspb.BinaryReader): NetworkOptimizationLanToWan;
}

export namespace NetworkOptimizationLanToWan {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class NetworkOptimizationWanToLanRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationWanToLanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationWanToLanRequest): NetworkOptimizationWanToLanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationWanToLanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationWanToLanRequest;
    static deserializeBinaryFromReader(message: NetworkOptimizationWanToLanRequest, reader: jspb.BinaryReader): NetworkOptimizationWanToLanRequest;
}

export namespace NetworkOptimizationWanToLanRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
        peerIp: string,
    }
}

export class NetworkOptimizationWanToLan extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    hasReport(): boolean;
    clearReport(): void;
    getReport(): report_pb.Report | undefined;
    setReport(value?: report_pb.Report): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkOptimizationWanToLan.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkOptimizationWanToLan): NetworkOptimizationWanToLan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkOptimizationWanToLan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkOptimizationWanToLan;
    static deserializeBinaryFromReader(message: NetworkOptimizationWanToLan, reader: jspb.BinaryReader): NetworkOptimizationWanToLan;
}

export namespace NetworkOptimizationWanToLan {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        report?: report_pb.Report.AsObject,
    }
}

export class NetworkInterfaceTrafficRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeriod(): report_pb.ReportPeriod;
    setPeriod(value: report_pb.ReportPeriod): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaceTrafficRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaceTrafficRequest): NetworkInterfaceTrafficRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaceTrafficRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaceTrafficRequest;
    static deserializeBinaryFromReader(message: NetworkInterfaceTrafficRequest, reader: jspb.BinaryReader): NetworkInterfaceTrafficRequest;
}

export namespace NetworkInterfaceTrafficRequest {
    export type AsObject = {
        requestId: number,
        period: report_pb.ReportPeriod,
    }
}

export class NetworkInterfaceTraffic extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearReportList(): void;
    getReportList(): Array<report_pb.Report>;
    setReportList(value: Array<report_pb.Report>): void;
    addReport(value?: report_pb.Report, index?: number): report_pb.Report;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaceTraffic.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaceTraffic): NetworkInterfaceTraffic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaceTraffic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaceTraffic;
    static deserializeBinaryFromReader(message: NetworkInterfaceTraffic, reader: jspb.BinaryReader): NetworkInterfaceTraffic;
}

export namespace NetworkInterfaceTraffic {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        reportList: Array<report_pb.Report.AsObject>,
    }
}

export class NetworkPeerDeleteRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;

    getPeerIp(): string;
    setPeerIp(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkPeerDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkPeerDeleteRequest): NetworkPeerDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkPeerDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkPeerDeleteRequest;
    static deserializeBinaryFromReader(message: NetworkPeerDeleteRequest, reader: jspb.BinaryReader): NetworkPeerDeleteRequest;
}

export namespace NetworkPeerDeleteRequest {
    export type AsObject = {
        requestId: number,
        peerIp: string,
    }
}

export class NetworkPeerDelete extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkPeerDelete.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkPeerDelete): NetworkPeerDelete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkPeerDelete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkPeerDelete;
    static deserializeBinaryFromReader(message: NetworkPeerDelete, reader: jspb.BinaryReader): NetworkPeerDelete;
}

export namespace NetworkPeerDelete {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
    }
}

export class NetworkPeersRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkPeersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkPeersRequest): NetworkPeersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkPeersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkPeersRequest;
    static deserializeBinaryFromReader(message: NetworkPeersRequest, reader: jspb.BinaryReader): NetworkPeersRequest;
}

export namespace NetworkPeersRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class NetworkPeers extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearPeerList(): void;
    getPeerList(): Array<NetworkPeer>;
    setPeerList(value: Array<NetworkPeer>): void;
    addPeer(value?: NetworkPeer, index?: number): NetworkPeer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkPeers.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkPeers): NetworkPeers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkPeers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkPeers;
    static deserializeBinaryFromReader(message: NetworkPeers, reader: jspb.BinaryReader): NetworkPeers;
}

export namespace NetworkPeers {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        peerList: Array<NetworkPeer.AsObject>,
    }
}

export class NetworkPeer extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getHostname(): string;
    setHostname(value: string): void;

    getIp(): string;
    setIp(value: string): void;

    getStatus(): string;
    setStatus(value: string): void;

    getDatastore(): string;
    setDatastore(value: string): void;

    getPlr(): string;
    setPlr(value: string): void;

    getReductionRx(): number;
    setReductionRx(value: number): void;

    getReductionTx(): number;
    setReductionTx(value: number): void;

    getMac(): string;
    setMac(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkPeer.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkPeer): NetworkPeer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkPeer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkPeer;
    static deserializeBinaryFromReader(message: NetworkPeer, reader: jspb.BinaryReader): NetworkPeer;
}

export namespace NetworkPeer {
    export type AsObject = {
        id: number,
        hostname: string,
        ip: string,
        status: string,
        datastore: string,
        plr: string,
        reductionRx: number,
        reductionTx: number,
        mac: string,
    }
}

export class NetworkSessionsFilter extends jspb.Message { 
    getPeer(): string;
    setPeer(value: string): void;

    getApplication(): number;
    setApplication(value: number): void;

    getPort(): number;
    setPort(value: number): void;

    getMinBytes(): number;
    setMinBytes(value: number): void;

    getDirection(): NetworkDirectionEnum;
    setDirection(value: NetworkDirectionEnum): void;

    getPeriod(): number;
    setPeriod(value: number): void;

    getOrderBy(): NetworkOrderByEnum;
    setOrderBy(value: NetworkOrderByEnum): void;

    getSort(): NetworkSortDirectionEnum;
    setSort(value: NetworkSortDirectionEnum): void;

    getLimit(): number;
    setLimit(value: number): void;

    getPage(): number;
    setPage(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSessionsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSessionsFilter): NetworkSessionsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSessionsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSessionsFilter;
    static deserializeBinaryFromReader(message: NetworkSessionsFilter, reader: jspb.BinaryReader): NetworkSessionsFilter;
}

export namespace NetworkSessionsFilter {
    export type AsObject = {
        peer: string,
        application: number,
        port: number,
        minBytes: number,
        direction: NetworkDirectionEnum,
        period: number,
        orderBy: NetworkOrderByEnum,
        sort: NetworkSortDirectionEnum,
        limit: number,
        page: number,
    }
}

export class NetworkSessionsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): NetworkSessionsFilter | undefined;
    setFilter(value?: NetworkSessionsFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSessionsRequest): NetworkSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSessionsRequest;
    static deserializeBinaryFromReader(message: NetworkSessionsRequest, reader: jspb.BinaryReader): NetworkSessionsRequest;
}

export namespace NetworkSessionsRequest {
    export type AsObject = {
        requestId: number,
        filter?: NetworkSessionsFilter.AsObject,
    }
}

export class NetworkSessions extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getTotalItems(): number;
    setTotalItems(value: number): void;

    clearSessionList(): void;
    getSessionList(): Array<NetworkSession>;
    setSessionList(value: Array<NetworkSession>): void;
    addSession(value?: NetworkSession, index?: number): NetworkSession;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSessions.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSessions): NetworkSessions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSessions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSessions;
    static deserializeBinaryFromReader(message: NetworkSessions, reader: jspb.BinaryReader): NetworkSessions;
}

export namespace NetworkSessions {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        totalItems: number,
        sessionList: Array<NetworkSession.AsObject>,
    }
}

export class NetworkSession extends jspb.Message { 
    getSource(): string;
    setSource(value: string): void;

    getSourcePort(): number;
    setSourcePort(value: number): void;

    getDestination(): string;
    setDestination(value: string): void;

    getDestinationPort(): number;
    setDestinationPort(value: number): void;

    getBytesLan(): number;
    setBytesLan(value: number): void;

    getBytesWan(): number;
    setBytesWan(value: number): void;

    getProtocol(): string;
    setProtocol(value: string): void;

    getAppId(): number;
    setAppId(value: number): void;

    getReduction(): number;
    setReduction(value: number): void;

    getTime(): string;
    setTime(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSession.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSession): NetworkSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSession;
    static deserializeBinaryFromReader(message: NetworkSession, reader: jspb.BinaryReader): NetworkSession;
}

export namespace NetworkSession {
    export type AsObject = {
        source: string,
        sourcePort: number,
        destination: string,
        destinationPort: number,
        bytesLan: number,
        bytesWan: number,
        protocol: string,
        appId: number,
        reduction: number,
        time: string,
    }
}

export class NetworkSessionDetailFilter extends jspb.Message { 
    getSource(): string;
    setSource(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;

    getOrderBy(): NetworkOrderByEnum;
    setOrderBy(value: NetworkOrderByEnum): void;

    getSort(): NetworkSortDirectionEnum;
    setSort(value: NetworkSortDirectionEnum): void;

    getLimit(): number;
    setLimit(value: number): void;

    getPage(): number;
    setPage(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSessionDetailFilter.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSessionDetailFilter): NetworkSessionDetailFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSessionDetailFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSessionDetailFilter;
    static deserializeBinaryFromReader(message: NetworkSessionDetailFilter, reader: jspb.BinaryReader): NetworkSessionDetailFilter;
}

export namespace NetworkSessionDetailFilter {
    export type AsObject = {
        source: string,
        destination: string,
        orderBy: NetworkOrderByEnum,
        sort: NetworkSortDirectionEnum,
        limit: number,
        page: number,
    }
}

export class NetworkSessionDetailRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): NetworkSessionDetailFilter | undefined;
    setFilter(value?: NetworkSessionDetailFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSessionDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSessionDetailRequest): NetworkSessionDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSessionDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSessionDetailRequest;
    static deserializeBinaryFromReader(message: NetworkSessionDetailRequest, reader: jspb.BinaryReader): NetworkSessionDetailRequest;
}

export namespace NetworkSessionDetailRequest {
    export type AsObject = {
        requestId: number,
        filter?: NetworkSessionDetailFilter.AsObject,
    }
}

export class NetworkSessionDetail extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    getTotalItems(): number;
    setTotalItems(value: number): void;

    clearSessionList(): void;
    getSessionList(): Array<NetworkSession>;
    setSessionList(value: Array<NetworkSession>): void;
    addSession(value?: NetworkSession, index?: number): NetworkSession;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSessionDetail.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSessionDetail): NetworkSessionDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSessionDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSessionDetail;
    static deserializeBinaryFromReader(message: NetworkSessionDetail, reader: jspb.BinaryReader): NetworkSessionDetail;
}

export namespace NetworkSessionDetail {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        totalItems: number,
        sessionList: Array<NetworkSession.AsObject>,
    }
}

export class NetworkTopApplicationsFilter extends jspb.Message { 
    getPeer(): string;
    setPeer(value: string): void;

    getTop(): number;
    setTop(value: number): void;

    getPeriod(): number;
    setPeriod(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkTopApplicationsFilter.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkTopApplicationsFilter): NetworkTopApplicationsFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkTopApplicationsFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkTopApplicationsFilter;
    static deserializeBinaryFromReader(message: NetworkTopApplicationsFilter, reader: jspb.BinaryReader): NetworkTopApplicationsFilter;
}

export namespace NetworkTopApplicationsFilter {
    export type AsObject = {
        peer: string,
        top: number,
        period: number,
    }
}

export class NetworkTopApplicationsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): NetworkTopApplicationsFilter | undefined;
    setFilter(value?: NetworkTopApplicationsFilter): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkTopApplicationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkTopApplicationsRequest): NetworkTopApplicationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkTopApplicationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkTopApplicationsRequest;
    static deserializeBinaryFromReader(message: NetworkTopApplicationsRequest, reader: jspb.BinaryReader): NetworkTopApplicationsRequest;
}

export namespace NetworkTopApplicationsRequest {
    export type AsObject = {
        requestId: number,
        filter?: NetworkTopApplicationsFilter.AsObject,
    }
}

export class NetworkTopApplications extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearApplicationList(): void;
    getApplicationList(): Array<NetworkTopApplication>;
    setApplicationList(value: Array<NetworkTopApplication>): void;
    addApplication(value?: NetworkTopApplication, index?: number): NetworkTopApplication;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkTopApplications.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkTopApplications): NetworkTopApplications.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkTopApplications, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkTopApplications;
    static deserializeBinaryFromReader(message: NetworkTopApplications, reader: jspb.BinaryReader): NetworkTopApplications;
}

export namespace NetworkTopApplications {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        applicationList: Array<NetworkTopApplication.AsObject>,
    }
}

export class NetworkTopApplication extends jspb.Message { 
    getApplication(): string;
    setApplication(value: string): void;

    getBytesLan(): number;
    setBytesLan(value: number): void;

    getBytesWan(): number;
    setBytesWan(value: number): void;

    getReduction(): number;
    setReduction(value: number): void;

    getPercentageLan(): number;
    setPercentageLan(value: number): void;

    getPercentageWan(): number;
    setPercentageWan(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkTopApplication.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkTopApplication): NetworkTopApplication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkTopApplication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkTopApplication;
    static deserializeBinaryFromReader(message: NetworkTopApplication, reader: jspb.BinaryReader): NetworkTopApplication;
}

export namespace NetworkTopApplication {
    export type AsObject = {
        application: string,
        bytesLan: number,
        bytesWan: number,
        reduction: number,
        percentageLan: number,
        percentageWan: number,
    }
}

export class NetworkApplicationsRequest extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkApplicationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkApplicationsRequest): NetworkApplicationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkApplicationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkApplicationsRequest;
    static deserializeBinaryFromReader(message: NetworkApplicationsRequest, reader: jspb.BinaryReader): NetworkApplicationsRequest;
}

export namespace NetworkApplicationsRequest {
    export type AsObject = {
        requestId: number,
    }
}

export class NetworkApplications extends jspb.Message { 
    getRequestId(): number;
    setRequestId(value: number): void;


    hasError(): boolean;
    clearError(): void;
    getError(): error_pb.Error | undefined;
    setError(value?: error_pb.Error): void;

    clearApplicationList(): void;
    getApplicationList(): Array<NetworkApplication>;
    setApplicationList(value: Array<NetworkApplication>): void;
    addApplication(value?: NetworkApplication, index?: number): NetworkApplication;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkApplications.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkApplications): NetworkApplications.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkApplications, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkApplications;
    static deserializeBinaryFromReader(message: NetworkApplications, reader: jspb.BinaryReader): NetworkApplications;
}

export namespace NetworkApplications {
    export type AsObject = {
        requestId: number,
        error?: error_pb.Error.AsObject,
        applicationList: Array<NetworkApplication.AsObject>,
    }
}

export class NetworkApplication extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkApplication.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkApplication): NetworkApplication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkApplication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkApplication;
    static deserializeBinaryFromReader(message: NetworkApplication, reader: jspb.BinaryReader): NetworkApplication;
}

export namespace NetworkApplication {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export enum NetworkDirectionEnum {
    BOTH = 0,
    WAN_IN = 1,
    WAN_OUT = 2,
}

export enum NetworkOrderByEnum {
    REDUCTION = 0,
    SOURCE = 1,
    DESTINATION = 2,
    BYTES_LAN = 3,
    BYTES_WAN = 4,
    APPLICATION = 5,
    TIME = 6,
}

export enum NetworkSortDirectionEnum {
    DESCENDING = 0,
    ASCENDING = 1,
}
