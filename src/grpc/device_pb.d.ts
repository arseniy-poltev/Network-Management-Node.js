// package: 
// file: device.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class RegisterRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getHostname(): string;
    setHostname(value: string): void;

    getIp(): string;
    setIp(value: string): void;

    getMac(): string;
    setMac(value: string): void;

    getWanosVersion(): string;
    setWanosVersion(value: string): void;


    hasLoc(): boolean;
    clearLoc(): void;
    getLoc(): Location | undefined;
    setLoc(value?: Location): void;

    clearPeersList(): void;
    getPeersList(): Array<PeerInfo>;
    setPeersList(value: Array<PeerInfo>): void;
    addPeers(value?: PeerInfo, index?: number): PeerInfo;

    getWanosLicense(): string;
    setWanosLicense(value: string): void;

    getCpuCount(): number;
    setCpuCount(value: number): void;

    getDsDiskSize(): number;
    setDsDiskSize(value: number): void;

    getSwapDiskSize(): number;
    setSwapDiskSize(value: number): void;

    getPlatform(): string;
    setPlatform(value: string): void;

    getTotalMem(): number;
    setTotalMem(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterRequest;
    static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
    export type AsObject = {
        id: string,
        hostname: string,
        ip: string,
        mac: string,
        wanosVersion: string,
        loc?: Location.AsObject,
        peersList: Array<PeerInfo.AsObject>,
        wanosLicense: string,
        cpuCount: number,
        dsDiskSize: number,
        swapDiskSize: number,
        platform: string,
        totalMem: number,
    }
}

export class PeersReport extends jspb.Message { 
    clearPeersList(): void;
    getPeersList(): Array<PeerInfo>;
    setPeersList(value: Array<PeerInfo>): void;
    addPeers(value?: PeerInfo, index?: number): PeerInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeersReport.AsObject;
    static toObject(includeInstance: boolean, msg: PeersReport): PeersReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeersReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeersReport;
    static deserializeBinaryFromReader(message: PeersReport, reader: jspb.BinaryReader): PeersReport;
}

export namespace PeersReport {
    export type AsObject = {
        peersList: Array<PeerInfo.AsObject>,
    }
}

export class PeersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PeersRequest): PeersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeersRequest;
    static deserializeBinaryFromReader(message: PeersRequest, reader: jspb.BinaryReader): PeersRequest;
}

export namespace PeersRequest {
    export type AsObject = {
    }
}

export class PeerInfo extends jspb.Message { 
    getIp(): string;
    setIp(value: string): void;

    getOutput(): number;
    setOutput(value: number): void;

    getHostname(): string;
    setHostname(value: string): void;

    getMac(): string;
    setMac(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeerInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeerInfo;
    static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
}

export namespace PeerInfo {
    export type AsObject = {
        ip: string,
        output: number,
        hostname: string,
        mac: string,
    }
}

export class Location extends jspb.Message { 
    getLng(): number;
    setLng(value: number): void;

    getLat(): number;
    setLat(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        lng: number,
        lat: number,
    }
}

export class RegisterResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterResponse;
    static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
    export type AsObject = {
        id: string,
        orgId: string,
    }
}

export class DeviceStatsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceStatsRequest): DeviceStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceStatsRequest;
    static deserializeBinaryFromReader(message: DeviceStatsRequest, reader: jspb.BinaryReader): DeviceStatsRequest;
}

export namespace DeviceStatsRequest {
    export type AsObject = {
    }
}

export class DeviceStats extends jspb.Message { 
    getCpuLoad(): number;
    setCpuLoad(value: number): void;


    hasMem(): boolean;
    clearMem(): void;
    getMem(): MemInfo | undefined;
    setMem(value?: MemInfo): void;


    hasNet(): boolean;
    clearNet(): void;
    getNet(): NetworkStats | undefined;
    setNet(value?: NetworkStats): void;

    clearCpusList(): void;
    getCpusList(): Array<CpuInfo>;
    setCpusList(value: Array<CpuInfo>): void;
    addCpus(value?: CpuInfo, index?: number): CpuInfo;

    clearFsList(): void;
    getFsList(): Array<FsInfo>;
    setFsList(value: Array<FsInfo>): void;
    addFs(value?: FsInfo, index?: number): FsInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceStats.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceStats): DeviceStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceStats;
    static deserializeBinaryFromReader(message: DeviceStats, reader: jspb.BinaryReader): DeviceStats;
}

export namespace DeviceStats {
    export type AsObject = {
        cpuLoad: number,
        mem?: MemInfo.AsObject,
        net?: NetworkStats.AsObject,
        cpusList: Array<CpuInfo.AsObject>,
        fsList: Array<FsInfo.AsObject>,
    }
}

export class CpuInfo extends jspb.Message { 
    getLoad(): number;
    setLoad(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CpuInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CpuInfo): CpuInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CpuInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CpuInfo;
    static deserializeBinaryFromReader(message: CpuInfo, reader: jspb.BinaryReader): CpuInfo;
}

export namespace CpuInfo {
    export type AsObject = {
        load: number,
    }
}

export class FsInfo extends jspb.Message { 
    getFs(): string;
    setFs(value: string): void;

    getType(): string;
    setType(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    getUsed(): number;
    setUsed(value: number): void;

    getUse(): number;
    setUse(value: number): void;

    getMount(): string;
    setMount(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FsInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FsInfo): FsInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FsInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FsInfo;
    static deserializeBinaryFromReader(message: FsInfo, reader: jspb.BinaryReader): FsInfo;
}

export namespace FsInfo {
    export type AsObject = {
        fs: string,
        type: string,
        size: number,
        used: number,
        use: number,
        mount: string,
    }
}

export class NetworkStats extends jspb.Message { 
    getWanRxBps(): number;
    setWanRxBps(value: number): void;

    getWanTxBps(): number;
    setWanTxBps(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkStats.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkStats): NetworkStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkStats;
    static deserializeBinaryFromReader(message: NetworkStats, reader: jspb.BinaryReader): NetworkStats;
}

export namespace NetworkStats {
    export type AsObject = {
        wanRxBps: number,
        wanTxBps: number,
    }
}

export class MemInfo extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): void;

    getFree(): number;
    setFree(value: number): void;

    getUsed(): number;
    setUsed(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MemInfo): MemInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemInfo;
    static deserializeBinaryFromReader(message: MemInfo, reader: jspb.BinaryReader): MemInfo;
}

export namespace MemInfo {
    export type AsObject = {
        total: number,
        free: number,
        used: number,
    }
}
