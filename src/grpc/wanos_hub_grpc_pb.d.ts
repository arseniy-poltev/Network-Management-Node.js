// package: whub
// file: wanos_hub.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as wanos_hub_pb from "./wanos_hub_pb";
import * as device_pb from "./device_pb";
import * as dashboard_pb from "./dashboard_pb";
import * as webcache_pb from "./webcache_pb";
import * as network_pb from "./network_pb";
import * as system_pb from "./system_pb";
import * as diagnostic_pb from "./diagnostic_pb";
import * as configure_pb from "./configure_pb";
import * as status_pb from "./status_pb";
import * as file_transfer_pb from "./file_transfer_pb";
import * as patcher_pb from "./patcher_pb";
import * as maintenance_pb from "./maintenance_pb";
import * as license_pb from "./license_pb";

interface IWHubService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    register: IWHubService_IRegister;
    deviceStatsReport: IWHubService_IDeviceStatsReport;
    updatePeers: IWHubService_IUpdatePeers;
    getDashboardData: IWHubService_IGetDashboardData;
    getDashboardTopPorts: IWHubService_IGetDashboardTopPorts;
    getWebcacheDates: IWHubService_IGetWebcacheDates;
    getWebcacheTotals: IWHubService_IGetWebcacheTotals;
    getWebcacheDomains: IWHubService_IGetWebcacheDomains;
    getWebcacheUrls: IWHubService_IGetWebcacheUrls;
    getWebcacheDenied: IWHubService_IGetWebcacheDenied;
    getWebcacheUsers: IWHubService_IGetWebcacheUsers;
    getWebcacheUserDetail: IWHubService_IGetWebcacheUserDetail;
    getWebcacheNetworks: IWHubService_IGetWebcacheNetworks;
    getWebcacheNetworkDetail: IWHubService_IGetWebcacheNetworkDetail;
    getWebcacheMimeTypes: IWHubService_IGetWebcacheMimeTypes;
    getNetworkApplications: IWHubService_IGetNetworkApplications;
    getNetworkSessions: IWHubService_IGetNetworkSessions;
    getNetworkSessionDetail: IWHubService_IGetNetworkSessionDetail;
    getNetworkTopApplications: IWHubService_IGetNetworkTopApplications;
    getNetworkPeers: IWHubService_IGetNetworkPeers;
    deleteNetworkPeer: IWHubService_IDeleteNetworkPeer;
    getNetworkInterfaceTraffic: IWHubService_IGetNetworkInterfaceTraffic;
    getNetworkOptimizationLanToWan: IWHubService_IGetNetworkOptimizationLanToWan;
    getNetworkOptimizationWanToLan: IWHubService_IGetNetworkOptimizationWanToLan;
    getNetworkOptimizationPassThrough: IWHubService_IGetNetworkOptimizationPassThrough;
    getNetworkOptimizationRatios: IWHubService_IGetNetworkOptimizationRatios;
    getNetworkQosReport: IWHubService_IGetNetworkQosReport;
    getNetworkInterfaces: IWHubService_IGetNetworkInterfaces;
    getSystemMemory: IWHubService_IGetSystemMemory;
    getSystemLoad: IWHubService_IGetSystemLoad;
    getSystemCpu: IWHubService_IGetSystemCpu;
    getSystemDiskLoad: IWHubService_IGetSystemDiskLoad;
    getSystemDiskSpace: IWHubService_IGetSystemDiskSpace;
    getSystemInfo: IWHubService_IGetSystemInfo;
    getSystemIndicators: IWHubService_IGetSystemIndicators;
    getDiagnosticLog: IWHubService_IGetDiagnosticLog;
    getDiagnosticHealth: IWHubService_IGetDiagnosticHealth;
    getDiagnosticBenchmark: IWHubService_IGetDiagnosticBenchmark;
    scheduleDiagnosticBenchmark: IWHubService_IScheduleDiagnosticBenchmark;
    getDiagnosticNetstat: IWHubService_IGetDiagnosticNetstat;
    getDiagnosticPing: IWHubService_IGetDiagnosticPing;
    getDiagnosticTraceroute: IWHubService_IGetDiagnosticTraceroute;
    getSystemSettings: IWHubService_IGetSystemSettings;
    updateSystemSettings: IWHubService_IUpdateSystemSettings;
    getNetworkSettings: IWHubService_IGetNetworkSettings;
    updateNetworkSettings: IWHubService_IUpdateNetworkSettings;
    getOptimizationSettings: IWHubService_IGetOptimizationSettings;
    updateOptimizationSettings: IWHubService_IUpdateOptimizationSettings;
    getMonitorSettings: IWHubService_IGetMonitorSettings;
    updateMonitorSettings: IWHubService_IUpdateMonitorSettings;
    getTunnelPolicies: IWHubService_IGetTunnelPolicies;
    deleteTunnelPoliciesRule: IWHubService_IDeleteTunnelPoliciesRule;
    updateTunnelPoliciesRule: IWHubService_IUpdateTunnelPoliciesRule;
    addTunnelPoliciesRule: IWHubService_IAddTunnelPoliciesRule;
    getTrafficPolicies: IWHubService_IGetTrafficPolicies;
    deleteTrafficPolicy: IWHubService_IDeleteTrafficPolicy;
    updateTrafficPolicy: IWHubService_IUpdateTrafficPolicy;
    addTrafficPolicy: IWHubService_IAddTrafficPolicy;
    getRoutes: IWHubService_IGetRoutes;
    addRoute: IWHubService_IAddRoute;
    updateRoute: IWHubService_IUpdateRoute;
    removeRoute: IWHubService_IRemoveRoute;
    getTcpxRules: IWHubService_IGetTcpxRules;
    addTcpxRule: IWHubService_IAddTcpxRule;
    updateTcpxRule: IWHubService_IUpdateTcpxRule;
    removeTcpxRule: IWHubService_IRemoveTcpxRule;
    moveTcpxRule: IWHubService_IMoveTcpxRule;
    resetService: IWHubService_IResetService;
    changeSshPassword: IWHubService_IChangeSshPassword;
    getPathConfig: IWHubService_IGetPathConfig;
    setPathConfig: IWHubService_ISetPathConfig;
    getPathGateways: IWHubService_IGetPathGateways;
    removePathGateway: IWHubService_IRemovePathGateway;
    getWebcacheConfig: IWHubService_IGetWebcacheConfig;
    setWebcacheConfig: IWHubService_ISetWebcacheConfig;
    getStatusUpdate: IWHubService_IGetStatusUpdate;
    downloadFile: IWHubService_IDownloadFile;
    getServerAgentVersion: IWHubService_IGetServerAgentVersion;
    startBackup: IWHubService_IStartBackup;
    uploadBackup: IWHubService_IUploadBackup;
    getLicense: IWHubService_IGetLicense;
    addLicense: IWHubService_IAddLicense;
}

interface IWHubService_IRegister extends grpc.MethodDefinition<device_pb.RegisterRequest, device_pb.RegisterResponse> {
    path: string; // "/whub.WHub/Register"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<device_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<device_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<device_pb.RegisterResponse>;
    responseDeserialize: grpc.deserialize<device_pb.RegisterResponse>;
}
interface IWHubService_IDeviceStatsReport extends grpc.MethodDefinition<device_pb.DeviceStats, device_pb.DeviceStatsRequest> {
    path: string; // "/whub.WHub/DeviceStatsReport"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<device_pb.DeviceStats>;
    requestDeserialize: grpc.deserialize<device_pb.DeviceStats>;
    responseSerialize: grpc.serialize<device_pb.DeviceStatsRequest>;
    responseDeserialize: grpc.deserialize<device_pb.DeviceStatsRequest>;
}
interface IWHubService_IUpdatePeers extends grpc.MethodDefinition<device_pb.PeersReport, device_pb.PeersRequest> {
    path: string; // "/whub.WHub/UpdatePeers"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<device_pb.PeersReport>;
    requestDeserialize: grpc.deserialize<device_pb.PeersReport>;
    responseSerialize: grpc.serialize<device_pb.PeersRequest>;
    responseDeserialize: grpc.deserialize<device_pb.PeersRequest>;
}
interface IWHubService_IGetDashboardData extends grpc.MethodDefinition<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest> {
    path: string; // "/whub.WHub/GetDashboardData"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<dashboard_pb.DashboardData>;
    requestDeserialize: grpc.deserialize<dashboard_pb.DashboardData>;
    responseSerialize: grpc.serialize<dashboard_pb.DashboardDataRequest>;
    responseDeserialize: grpc.deserialize<dashboard_pb.DashboardDataRequest>;
}
interface IWHubService_IGetDashboardTopPorts extends grpc.MethodDefinition<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest> {
    path: string; // "/whub.WHub/GetDashboardTopPorts"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<dashboard_pb.DashboardTopPorts>;
    requestDeserialize: grpc.deserialize<dashboard_pb.DashboardTopPorts>;
    responseSerialize: grpc.serialize<dashboard_pb.DashboardTopPortsRequest>;
    responseDeserialize: grpc.deserialize<dashboard_pb.DashboardTopPortsRequest>;
}
interface IWHubService_IGetWebcacheDates extends grpc.MethodDefinition<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest> {
    path: string; // "/whub.WHub/GetWebcacheDates"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheDates>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheDates>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheDatesRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheDatesRequest>;
}
interface IWHubService_IGetWebcacheTotals extends grpc.MethodDefinition<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest> {
    path: string; // "/whub.WHub/GetWebcacheTotals"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheTotals>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheTotals>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheTotalsRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheTotalsRequest>;
}
interface IWHubService_IGetWebcacheDomains extends grpc.MethodDefinition<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest> {
    path: string; // "/whub.WHub/GetWebcacheDomains"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheDomains>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheDomains>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheDomainsRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheDomainsRequest>;
}
interface IWHubService_IGetWebcacheUrls extends grpc.MethodDefinition<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest> {
    path: string; // "/whub.WHub/GetWebcacheUrls"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheUrls>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheUrls>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheUrlsRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheUrlsRequest>;
}
interface IWHubService_IGetWebcacheDenied extends grpc.MethodDefinition<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest> {
    path: string; // "/whub.WHub/GetWebcacheDenied"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheDenied>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheDenied>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheDeniedRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheDeniedRequest>;
}
interface IWHubService_IGetWebcacheUsers extends grpc.MethodDefinition<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest> {
    path: string; // "/whub.WHub/GetWebcacheUsers"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheUsers>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheUsers>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheUsersRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheUsersRequest>;
}
interface IWHubService_IGetWebcacheUserDetail extends grpc.MethodDefinition<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest> {
    path: string; // "/whub.WHub/GetWebcacheUserDetail"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheUserDetail>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheUserDetail>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheUserDetailRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheUserDetailRequest>;
}
interface IWHubService_IGetWebcacheNetworks extends grpc.MethodDefinition<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest> {
    path: string; // "/whub.WHub/GetWebcacheNetworks"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheNetworks>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheNetworks>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheNetworksRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheNetworksRequest>;
}
interface IWHubService_IGetWebcacheNetworkDetail extends grpc.MethodDefinition<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest> {
    path: string; // "/whub.WHub/GetWebcacheNetworkDetail"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheNetworkDetail>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheNetworkDetail>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheNetworkDetailRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheNetworkDetailRequest>;
}
interface IWHubService_IGetWebcacheMimeTypes extends grpc.MethodDefinition<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest> {
    path: string; // "/whub.WHub/GetWebcacheMimeTypes"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<webcache_pb.WebcacheMimeTypes>;
    requestDeserialize: grpc.deserialize<webcache_pb.WebcacheMimeTypes>;
    responseSerialize: grpc.serialize<webcache_pb.WebcacheMimeTypesRequest>;
    responseDeserialize: grpc.deserialize<webcache_pb.WebcacheMimeTypesRequest>;
}
interface IWHubService_IGetNetworkApplications extends grpc.MethodDefinition<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest> {
    path: string; // "/whub.WHub/GetNetworkApplications"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkApplications>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkApplications>;
    responseSerialize: grpc.serialize<network_pb.NetworkApplicationsRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkApplicationsRequest>;
}
interface IWHubService_IGetNetworkSessions extends grpc.MethodDefinition<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest> {
    path: string; // "/whub.WHub/GetNetworkSessions"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkSessions>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkSessions>;
    responseSerialize: grpc.serialize<network_pb.NetworkSessionsRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkSessionsRequest>;
}
interface IWHubService_IGetNetworkSessionDetail extends grpc.MethodDefinition<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest> {
    path: string; // "/whub.WHub/GetNetworkSessionDetail"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkSessionDetail>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkSessionDetail>;
    responseSerialize: grpc.serialize<network_pb.NetworkSessionDetailRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkSessionDetailRequest>;
}
interface IWHubService_IGetNetworkTopApplications extends grpc.MethodDefinition<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest> {
    path: string; // "/whub.WHub/GetNetworkTopApplications"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkTopApplications>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkTopApplications>;
    responseSerialize: grpc.serialize<network_pb.NetworkTopApplicationsRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkTopApplicationsRequest>;
}
interface IWHubService_IGetNetworkPeers extends grpc.MethodDefinition<network_pb.NetworkPeers, network_pb.NetworkPeersRequest> {
    path: string; // "/whub.WHub/GetNetworkPeers"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkPeers>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkPeers>;
    responseSerialize: grpc.serialize<network_pb.NetworkPeersRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkPeersRequest>;
}
interface IWHubService_IDeleteNetworkPeer extends grpc.MethodDefinition<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest> {
    path: string; // "/whub.WHub/DeleteNetworkPeer"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkPeerDelete>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkPeerDelete>;
    responseSerialize: grpc.serialize<network_pb.NetworkPeerDeleteRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkPeerDeleteRequest>;
}
interface IWHubService_IGetNetworkInterfaceTraffic extends grpc.MethodDefinition<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest> {
    path: string; // "/whub.WHub/GetNetworkInterfaceTraffic"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkInterfaceTraffic>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkInterfaceTraffic>;
    responseSerialize: grpc.serialize<network_pb.NetworkInterfaceTrafficRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkInterfaceTrafficRequest>;
}
interface IWHubService_IGetNetworkOptimizationLanToWan extends grpc.MethodDefinition<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest> {
    path: string; // "/whub.WHub/GetNetworkOptimizationLanToWan"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkOptimizationLanToWan>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkOptimizationLanToWan>;
    responseSerialize: grpc.serialize<network_pb.NetworkOptimizationLanToWanRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkOptimizationLanToWanRequest>;
}
interface IWHubService_IGetNetworkOptimizationWanToLan extends grpc.MethodDefinition<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest> {
    path: string; // "/whub.WHub/GetNetworkOptimizationWanToLan"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkOptimizationWanToLan>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkOptimizationWanToLan>;
    responseSerialize: grpc.serialize<network_pb.NetworkOptimizationWanToLanRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkOptimizationWanToLanRequest>;
}
interface IWHubService_IGetNetworkOptimizationPassThrough extends grpc.MethodDefinition<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest> {
    path: string; // "/whub.WHub/GetNetworkOptimizationPassThrough"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkOptimizationPassThrough>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkOptimizationPassThrough>;
    responseSerialize: grpc.serialize<network_pb.NetworkOptimizationPassThroughRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkOptimizationPassThroughRequest>;
}
interface IWHubService_IGetNetworkOptimizationRatios extends grpc.MethodDefinition<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest> {
    path: string; // "/whub.WHub/GetNetworkOptimizationRatios"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkOptimizationRatios>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkOptimizationRatios>;
    responseSerialize: grpc.serialize<network_pb.NetworkOptimizationRatiosRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkOptimizationRatiosRequest>;
}
interface IWHubService_IGetNetworkQosReport extends grpc.MethodDefinition<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest> {
    path: string; // "/whub.WHub/GetNetworkQosReport"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkQosReport>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkQosReport>;
    responseSerialize: grpc.serialize<network_pb.NetworkQosReportRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkQosReportRequest>;
}
interface IWHubService_IGetNetworkInterfaces extends grpc.MethodDefinition<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest> {
    path: string; // "/whub.WHub/GetNetworkInterfaces"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<network_pb.NetworkInterfaces>;
    requestDeserialize: grpc.deserialize<network_pb.NetworkInterfaces>;
    responseSerialize: grpc.serialize<network_pb.NetworkInterfacesRequest>;
    responseDeserialize: grpc.deserialize<network_pb.NetworkInterfacesRequest>;
}
interface IWHubService_IGetSystemMemory extends grpc.MethodDefinition<system_pb.SystemMemory, system_pb.SystemMemoryRequest> {
    path: string; // "/whub.WHub/GetSystemMemory"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemMemory>;
    requestDeserialize: grpc.deserialize<system_pb.SystemMemory>;
    responseSerialize: grpc.serialize<system_pb.SystemMemoryRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemMemoryRequest>;
}
interface IWHubService_IGetSystemLoad extends grpc.MethodDefinition<system_pb.SystemLoad, system_pb.SystemLoadRequest> {
    path: string; // "/whub.WHub/GetSystemLoad"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemLoad>;
    requestDeserialize: grpc.deserialize<system_pb.SystemLoad>;
    responseSerialize: grpc.serialize<system_pb.SystemLoadRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemLoadRequest>;
}
interface IWHubService_IGetSystemCpu extends grpc.MethodDefinition<system_pb.SystemCpu, system_pb.SystemCpuRequest> {
    path: string; // "/whub.WHub/GetSystemCpu"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemCpu>;
    requestDeserialize: grpc.deserialize<system_pb.SystemCpu>;
    responseSerialize: grpc.serialize<system_pb.SystemCpuRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemCpuRequest>;
}
interface IWHubService_IGetSystemDiskLoad extends grpc.MethodDefinition<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest> {
    path: string; // "/whub.WHub/GetSystemDiskLoad"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemDiskLoad>;
    requestDeserialize: grpc.deserialize<system_pb.SystemDiskLoad>;
    responseSerialize: grpc.serialize<system_pb.SystemDiskLoadRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemDiskLoadRequest>;
}
interface IWHubService_IGetSystemDiskSpace extends grpc.MethodDefinition<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest> {
    path: string; // "/whub.WHub/GetSystemDiskSpace"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemDiskSpace>;
    requestDeserialize: grpc.deserialize<system_pb.SystemDiskSpace>;
    responseSerialize: grpc.serialize<system_pb.SystemDiskSpaceRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemDiskSpaceRequest>;
}
interface IWHubService_IGetSystemInfo extends grpc.MethodDefinition<system_pb.SystemInfo, system_pb.SystemInfoRequest> {
    path: string; // "/whub.WHub/GetSystemInfo"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemInfo>;
    requestDeserialize: grpc.deserialize<system_pb.SystemInfo>;
    responseSerialize: grpc.serialize<system_pb.SystemInfoRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemInfoRequest>;
}
interface IWHubService_IGetSystemIndicators extends grpc.MethodDefinition<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest> {
    path: string; // "/whub.WHub/GetSystemIndicators"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<system_pb.SystemIndicators>;
    requestDeserialize: grpc.deserialize<system_pb.SystemIndicators>;
    responseSerialize: grpc.serialize<system_pb.SystemIndicatorsRequest>;
    responseDeserialize: grpc.deserialize<system_pb.SystemIndicatorsRequest>;
}
interface IWHubService_IGetDiagnosticLog extends grpc.MethodDefinition<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest> {
    path: string; // "/whub.WHub/GetDiagnosticLog"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticLog>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticLog>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticLogRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticLogRequest>;
}
interface IWHubService_IGetDiagnosticHealth extends grpc.MethodDefinition<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest> {
    path: string; // "/whub.WHub/GetDiagnosticHealth"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticHealth>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticHealth>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticHealthRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticHealthRequest>;
}
interface IWHubService_IGetDiagnosticBenchmark extends grpc.MethodDefinition<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest> {
    path: string; // "/whub.WHub/GetDiagnosticBenchmark"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticBenchmark>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticBenchmark>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticBenchmarkRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticBenchmarkRequest>;
}
interface IWHubService_IScheduleDiagnosticBenchmark extends grpc.MethodDefinition<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest> {
    path: string; // "/whub.WHub/ScheduleDiagnosticBenchmark"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticBenchmark>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticBenchmark>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticBenchmarkRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticBenchmarkRequest>;
}
interface IWHubService_IGetDiagnosticNetstat extends grpc.MethodDefinition<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest> {
    path: string; // "/whub.WHub/GetDiagnosticNetstat"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticNetstat>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticNetstat>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticNetstatRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticNetstatRequest>;
}
interface IWHubService_IGetDiagnosticPing extends grpc.MethodDefinition<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest> {
    path: string; // "/whub.WHub/GetDiagnosticPing"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticPing>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticPing>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticPingRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticPingRequest>;
}
interface IWHubService_IGetDiagnosticTraceroute extends grpc.MethodDefinition<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest> {
    path: string; // "/whub.WHub/GetDiagnosticTraceroute"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<diagnostic_pb.DiagnosticTraceroute>;
    requestDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticTraceroute>;
    responseSerialize: grpc.serialize<diagnostic_pb.DiagnosticTracerouteRequest>;
    responseDeserialize: grpc.deserialize<diagnostic_pb.DiagnosticTracerouteRequest>;
}
interface IWHubService_IGetSystemSettings extends grpc.MethodDefinition<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest> {
    path: string; // "/whub.WHub/GetSystemSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.SystemSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.SystemSettings>;
    responseSerialize: grpc.serialize<configure_pb.SystemSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.SystemSettingsRequest>;
}
interface IWHubService_IUpdateSystemSettings extends grpc.MethodDefinition<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest> {
    path: string; // "/whub.WHub/UpdateSystemSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.SystemSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.SystemSettings>;
    responseSerialize: grpc.serialize<configure_pb.SystemSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.SystemSettingsRequest>;
}
interface IWHubService_IGetNetworkSettings extends grpc.MethodDefinition<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest> {
    path: string; // "/whub.WHub/GetNetworkSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.NetworkSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.NetworkSettings>;
    responseSerialize: grpc.serialize<configure_pb.NetworkSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.NetworkSettingsRequest>;
}
interface IWHubService_IUpdateNetworkSettings extends grpc.MethodDefinition<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest> {
    path: string; // "/whub.WHub/UpdateNetworkSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.NetworkSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.NetworkSettings>;
    responseSerialize: grpc.serialize<configure_pb.NetworkSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.NetworkSettingsRequest>;
}
interface IWHubService_IGetOptimizationSettings extends grpc.MethodDefinition<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest> {
    path: string; // "/whub.WHub/GetOptimizationSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.OptimizationSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.OptimizationSettings>;
    responseSerialize: grpc.serialize<configure_pb.OptimizationSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.OptimizationSettingsRequest>;
}
interface IWHubService_IUpdateOptimizationSettings extends grpc.MethodDefinition<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest> {
    path: string; // "/whub.WHub/UpdateOptimizationSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.OptimizationSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.OptimizationSettings>;
    responseSerialize: grpc.serialize<configure_pb.OptimizationSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.OptimizationSettingsRequest>;
}
interface IWHubService_IGetMonitorSettings extends grpc.MethodDefinition<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest> {
    path: string; // "/whub.WHub/GetMonitorSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.MonitorSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.MonitorSettings>;
    responseSerialize: grpc.serialize<configure_pb.MonitorSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.MonitorSettingsRequest>;
}
interface IWHubService_IUpdateMonitorSettings extends grpc.MethodDefinition<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest> {
    path: string; // "/whub.WHub/UpdateMonitorSettings"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.MonitorSettings>;
    requestDeserialize: grpc.deserialize<configure_pb.MonitorSettings>;
    responseSerialize: grpc.serialize<configure_pb.MonitorSettingsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.MonitorSettingsRequest>;
}
interface IWHubService_IGetTunnelPolicies extends grpc.MethodDefinition<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest> {
    path: string; // "/whub.WHub/GetTunnelPolicies"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TunnelPolicies>;
    requestDeserialize: grpc.deserialize<configure_pb.TunnelPolicies>;
    responseSerialize: grpc.serialize<configure_pb.TunnelPoliciesRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesRequest>;
}
interface IWHubService_IDeleteTunnelPoliciesRule extends grpc.MethodDefinition<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest> {
    path: string; // "/whub.WHub/DeleteTunnelPoliciesRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TunnelPoliciesDeleteRule>;
    requestDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesDeleteRule>;
    responseSerialize: grpc.serialize<configure_pb.TunnelPoliciesDeleteRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesDeleteRuleRequest>;
}
interface IWHubService_IUpdateTunnelPoliciesRule extends grpc.MethodDefinition<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest> {
    path: string; // "/whub.WHub/UpdateTunnelPoliciesRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TunnelPoliciesUpdateRule>;
    requestDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesUpdateRule>;
    responseSerialize: grpc.serialize<configure_pb.TunnelPoliciesUpdateRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesUpdateRuleRequest>;
}
interface IWHubService_IAddTunnelPoliciesRule extends grpc.MethodDefinition<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest> {
    path: string; // "/whub.WHub/AddTunnelPoliciesRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TunnelPoliciesAddRule>;
    requestDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesAddRule>;
    responseSerialize: grpc.serialize<configure_pb.TunnelPoliciesAddRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TunnelPoliciesAddRuleRequest>;
}
interface IWHubService_IGetTrafficPolicies extends grpc.MethodDefinition<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest> {
    path: string; // "/whub.WHub/GetTrafficPolicies"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TrafficPolicies>;
    requestDeserialize: grpc.deserialize<configure_pb.TrafficPolicies>;
    responseSerialize: grpc.serialize<configure_pb.TrafficPoliciesRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TrafficPoliciesRequest>;
}
interface IWHubService_IDeleteTrafficPolicy extends grpc.MethodDefinition<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest> {
    path: string; // "/whub.WHub/DeleteTrafficPolicy"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TrafficPolicyDelete>;
    requestDeserialize: grpc.deserialize<configure_pb.TrafficPolicyDelete>;
    responseSerialize: grpc.serialize<configure_pb.TrafficPolicyDeleteRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TrafficPolicyDeleteRequest>;
}
interface IWHubService_IUpdateTrafficPolicy extends grpc.MethodDefinition<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest> {
    path: string; // "/whub.WHub/UpdateTrafficPolicy"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TrafficPolicyUpdate>;
    requestDeserialize: grpc.deserialize<configure_pb.TrafficPolicyUpdate>;
    responseSerialize: grpc.serialize<configure_pb.TrafficPolicyUpdateRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TrafficPolicyUpdateRequest>;
}
interface IWHubService_IAddTrafficPolicy extends grpc.MethodDefinition<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest> {
    path: string; // "/whub.WHub/AddTrafficPolicy"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TrafficPolicyAdd>;
    requestDeserialize: grpc.deserialize<configure_pb.TrafficPolicyAdd>;
    responseSerialize: grpc.serialize<configure_pb.TrafficPolicyAddRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.TrafficPolicyAddRequest>;
}
interface IWHubService_IGetRoutes extends grpc.MethodDefinition<configure_pb.Routes, configure_pb.RoutesRequest> {
    path: string; // "/whub.WHub/GetRoutes"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.Routes>;
    requestDeserialize: grpc.deserialize<configure_pb.Routes>;
    responseSerialize: grpc.serialize<configure_pb.RoutesRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.RoutesRequest>;
}
interface IWHubService_IAddRoute extends grpc.MethodDefinition<configure_pb.RouteAdd, configure_pb.RouteAddRequest> {
    path: string; // "/whub.WHub/AddRoute"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.RouteAdd>;
    requestDeserialize: grpc.deserialize<configure_pb.RouteAdd>;
    responseSerialize: grpc.serialize<configure_pb.RouteAddRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.RouteAddRequest>;
}
interface IWHubService_IUpdateRoute extends grpc.MethodDefinition<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest> {
    path: string; // "/whub.WHub/UpdateRoute"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.RouteUpdate>;
    requestDeserialize: grpc.deserialize<configure_pb.RouteUpdate>;
    responseSerialize: grpc.serialize<configure_pb.RouteUpdateRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.RouteUpdateRequest>;
}
interface IWHubService_IRemoveRoute extends grpc.MethodDefinition<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest> {
    path: string; // "/whub.WHub/RemoveRoute"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.RouteRemove>;
    requestDeserialize: grpc.deserialize<configure_pb.RouteRemove>;
    responseSerialize: grpc.serialize<configure_pb.RouteRemoveRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.RouteRemoveRequest>;
}
interface IWHubService_IGetTcpxRules extends grpc.MethodDefinition<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest> {
    path: string; // "/whub.WHub/GetTcpxRules"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TcpxRules>;
    requestDeserialize: grpc.deserialize<configure_pb.TcpxRules>;
    responseSerialize: grpc.serialize<configure_pb.GetTcpxRulesRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.GetTcpxRulesRequest>;
}
interface IWHubService_IAddTcpxRule extends grpc.MethodDefinition<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest> {
    path: string; // "/whub.WHub/AddTcpxRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TcpxRuleAdd>;
    requestDeserialize: grpc.deserialize<configure_pb.TcpxRuleAdd>;
    responseSerialize: grpc.serialize<configure_pb.AddTcpxRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.AddTcpxRuleRequest>;
}
interface IWHubService_IUpdateTcpxRule extends grpc.MethodDefinition<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest> {
    path: string; // "/whub.WHub/UpdateTcpxRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TcpxRuleUpdate>;
    requestDeserialize: grpc.deserialize<configure_pb.TcpxRuleUpdate>;
    responseSerialize: grpc.serialize<configure_pb.UpdateTcpxRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.UpdateTcpxRuleRequest>;
}
interface IWHubService_IRemoveTcpxRule extends grpc.MethodDefinition<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest> {
    path: string; // "/whub.WHub/RemoveTcpxRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TcpxRuleRemove>;
    requestDeserialize: grpc.deserialize<configure_pb.TcpxRuleRemove>;
    responseSerialize: grpc.serialize<configure_pb.RemoveTcpxRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.RemoveTcpxRuleRequest>;
}
interface IWHubService_IMoveTcpxRule extends grpc.MethodDefinition<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest> {
    path: string; // "/whub.WHub/MoveTcpxRule"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.TcpxRuleMove>;
    requestDeserialize: grpc.deserialize<configure_pb.TcpxRuleMove>;
    responseSerialize: grpc.serialize<configure_pb.MoveTcpxRuleRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.MoveTcpxRuleRequest>;
}
interface IWHubService_IResetService extends grpc.MethodDefinition<configure_pb.ServiceReset, configure_pb.ServiceResetRequest> {
    path: string; // "/whub.WHub/ResetService"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.ServiceReset>;
    requestDeserialize: grpc.deserialize<configure_pb.ServiceReset>;
    responseSerialize: grpc.serialize<configure_pb.ServiceResetRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.ServiceResetRequest>;
}
interface IWHubService_IChangeSshPassword extends grpc.MethodDefinition<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest> {
    path: string; // "/whub.WHub/ChangeSshPassword"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.SshPasswordChange>;
    requestDeserialize: grpc.deserialize<configure_pb.SshPasswordChange>;
    responseSerialize: grpc.serialize<configure_pb.SshPasswordChangeRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.SshPasswordChangeRequest>;
}
interface IWHubService_IGetPathConfig extends grpc.MethodDefinition<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest> {
    path: string; // "/whub.WHub/GetPathConfig"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.PathConfigResponse>;
    requestDeserialize: grpc.deserialize<configure_pb.PathConfigResponse>;
    responseSerialize: grpc.serialize<configure_pb.GetPathConfigRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.GetPathConfigRequest>;
}
interface IWHubService_ISetPathConfig extends grpc.MethodDefinition<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest> {
    path: string; // "/whub.WHub/SetPathConfig"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.PathConfigResponse>;
    requestDeserialize: grpc.deserialize<configure_pb.PathConfigResponse>;
    responseSerialize: grpc.serialize<configure_pb.SetPathConfigRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.SetPathConfigRequest>;
}
interface IWHubService_IGetPathGateways extends grpc.MethodDefinition<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest> {
    path: string; // "/whub.WHub/GetPathGateways"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.PathGatewaysResponse>;
    requestDeserialize: grpc.deserialize<configure_pb.PathGatewaysResponse>;
    responseSerialize: grpc.serialize<configure_pb.GetPathsRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.GetPathsRequest>;
}
interface IWHubService_IRemovePathGateway extends grpc.MethodDefinition<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest> {
    path: string; // "/whub.WHub/RemovePathGateway"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.PathGatewaysResponse>;
    requestDeserialize: grpc.deserialize<configure_pb.PathGatewaysResponse>;
    responseSerialize: grpc.serialize<configure_pb.RemovePathRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.RemovePathRequest>;
}
interface IWHubService_IGetWebcacheConfig extends grpc.MethodDefinition<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest> {
    path: string; // "/whub.WHub/GetWebcacheConfig"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.WebcacheConfResponse>;
    requestDeserialize: grpc.deserialize<configure_pb.WebcacheConfResponse>;
    responseSerialize: grpc.serialize<configure_pb.GetWebcacheConfRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.GetWebcacheConfRequest>;
}
interface IWHubService_ISetWebcacheConfig extends grpc.MethodDefinition<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest> {
    path: string; // "/whub.WHub/SetWebcacheConfig"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<configure_pb.WebcacheConfResponse>;
    requestDeserialize: grpc.deserialize<configure_pb.WebcacheConfResponse>;
    responseSerialize: grpc.serialize<configure_pb.SetWebcacheConfRequest>;
    responseDeserialize: grpc.deserialize<configure_pb.SetWebcacheConfRequest>;
}
interface IWHubService_IGetStatusUpdate extends grpc.MethodDefinition<status_pb.StatusUpdate, status_pb.StatusUpdateRequest> {
    path: string; // "/whub.WHub/GetStatusUpdate"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<status_pb.StatusUpdate>;
    requestDeserialize: grpc.deserialize<status_pb.StatusUpdate>;
    responseSerialize: grpc.serialize<status_pb.StatusUpdateRequest>;
    responseDeserialize: grpc.deserialize<status_pb.StatusUpdateRequest>;
}
interface IWHubService_IDownloadFile extends grpc.MethodDefinition<file_transfer_pb.FileTransferRequest, file_transfer_pb.FileTransferResponse> {
    path: string; // "/whub.WHub/DownloadFile"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<file_transfer_pb.FileTransferRequest>;
    requestDeserialize: grpc.deserialize<file_transfer_pb.FileTransferRequest>;
    responseSerialize: grpc.serialize<file_transfer_pb.FileTransferResponse>;
    responseDeserialize: grpc.deserialize<file_transfer_pb.FileTransferResponse>;
}
interface IWHubService_IGetServerAgentVersion extends grpc.MethodDefinition<patcher_pb.ServerAgentVersionRequest, patcher_pb.ServerAgentVersionResponse> {
    path: string; // "/whub.WHub/GetServerAgentVersion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<patcher_pb.ServerAgentVersionRequest>;
    requestDeserialize: grpc.deserialize<patcher_pb.ServerAgentVersionRequest>;
    responseSerialize: grpc.serialize<patcher_pb.ServerAgentVersionResponse>;
    responseDeserialize: grpc.deserialize<patcher_pb.ServerAgentVersionResponse>;
}
interface IWHubService_IStartBackup extends grpc.MethodDefinition<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest> {
    path: string; // "/whub.WHub/StartBackup"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<maintenance_pb.StartBackupResponse>;
    requestDeserialize: grpc.deserialize<maintenance_pb.StartBackupResponse>;
    responseSerialize: grpc.serialize<maintenance_pb.StartBackupRequest>;
    responseDeserialize: grpc.deserialize<maintenance_pb.StartBackupRequest>;
}
interface IWHubService_IUploadBackup extends grpc.MethodDefinition<maintenance_pb.UploadBackupRequest, maintenance_pb.UploadBackupResponse> {
    path: string; // "/whub.WHub/UploadBackup"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<maintenance_pb.UploadBackupRequest>;
    requestDeserialize: grpc.deserialize<maintenance_pb.UploadBackupRequest>;
    responseSerialize: grpc.serialize<maintenance_pb.UploadBackupResponse>;
    responseDeserialize: grpc.deserialize<maintenance_pb.UploadBackupResponse>;
}
interface IWHubService_IGetLicense extends grpc.MethodDefinition<license_pb.LicenseResponse, license_pb.LicenseGetRequest> {
    path: string; // "/whub.WHub/GetLicense"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<license_pb.LicenseResponse>;
    requestDeserialize: grpc.deserialize<license_pb.LicenseResponse>;
    responseSerialize: grpc.serialize<license_pb.LicenseGetRequest>;
    responseDeserialize: grpc.deserialize<license_pb.LicenseGetRequest>;
}
interface IWHubService_IAddLicense extends grpc.MethodDefinition<license_pb.LicenseResponse, license_pb.LicenseAddRequest> {
    path: string; // "/whub.WHub/AddLicense"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<license_pb.LicenseResponse>;
    requestDeserialize: grpc.deserialize<license_pb.LicenseResponse>;
    responseSerialize: grpc.serialize<license_pb.LicenseAddRequest>;
    responseDeserialize: grpc.deserialize<license_pb.LicenseAddRequest>;
}

export const WHubService: IWHubService;

export interface IWHubServer {
    register: grpc.handleUnaryCall<device_pb.RegisterRequest, device_pb.RegisterResponse>;
    deviceStatsReport: grpc.handleBidiStreamingCall<device_pb.DeviceStats, device_pb.DeviceStatsRequest>;
    updatePeers: grpc.handleBidiStreamingCall<device_pb.PeersReport, device_pb.PeersRequest>;
    getDashboardData: grpc.handleBidiStreamingCall<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest>;
    getDashboardTopPorts: grpc.handleBidiStreamingCall<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest>;
    getWebcacheDates: grpc.handleBidiStreamingCall<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest>;
    getWebcacheTotals: grpc.handleBidiStreamingCall<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest>;
    getWebcacheDomains: grpc.handleBidiStreamingCall<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest>;
    getWebcacheUrls: grpc.handleBidiStreamingCall<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest>;
    getWebcacheDenied: grpc.handleBidiStreamingCall<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest>;
    getWebcacheUsers: grpc.handleBidiStreamingCall<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest>;
    getWebcacheUserDetail: grpc.handleBidiStreamingCall<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest>;
    getWebcacheNetworks: grpc.handleBidiStreamingCall<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest>;
    getWebcacheNetworkDetail: grpc.handleBidiStreamingCall<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest>;
    getWebcacheMimeTypes: grpc.handleBidiStreamingCall<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest>;
    getNetworkApplications: grpc.handleBidiStreamingCall<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest>;
    getNetworkSessions: grpc.handleBidiStreamingCall<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest>;
    getNetworkSessionDetail: grpc.handleBidiStreamingCall<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest>;
    getNetworkTopApplications: grpc.handleBidiStreamingCall<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest>;
    getNetworkPeers: grpc.handleBidiStreamingCall<network_pb.NetworkPeers, network_pb.NetworkPeersRequest>;
    deleteNetworkPeer: grpc.handleBidiStreamingCall<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest>;
    getNetworkInterfaceTraffic: grpc.handleBidiStreamingCall<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest>;
    getNetworkOptimizationLanToWan: grpc.handleBidiStreamingCall<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest>;
    getNetworkOptimizationWanToLan: grpc.handleBidiStreamingCall<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest>;
    getNetworkOptimizationPassThrough: grpc.handleBidiStreamingCall<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest>;
    getNetworkOptimizationRatios: grpc.handleBidiStreamingCall<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest>;
    getNetworkQosReport: grpc.handleBidiStreamingCall<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest>;
    getNetworkInterfaces: grpc.handleBidiStreamingCall<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest>;
    getSystemMemory: grpc.handleBidiStreamingCall<system_pb.SystemMemory, system_pb.SystemMemoryRequest>;
    getSystemLoad: grpc.handleBidiStreamingCall<system_pb.SystemLoad, system_pb.SystemLoadRequest>;
    getSystemCpu: grpc.handleBidiStreamingCall<system_pb.SystemCpu, system_pb.SystemCpuRequest>;
    getSystemDiskLoad: grpc.handleBidiStreamingCall<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest>;
    getSystemDiskSpace: grpc.handleBidiStreamingCall<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest>;
    getSystemInfo: grpc.handleBidiStreamingCall<system_pb.SystemInfo, system_pb.SystemInfoRequest>;
    getSystemIndicators: grpc.handleBidiStreamingCall<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest>;
    getDiagnosticLog: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest>;
    getDiagnosticHealth: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest>;
    getDiagnosticBenchmark: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    scheduleDiagnosticBenchmark: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    getDiagnosticNetstat: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest>;
    getDiagnosticPing: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest>;
    getDiagnosticTraceroute: grpc.handleBidiStreamingCall<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest>;
    getSystemSettings: grpc.handleBidiStreamingCall<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    updateSystemSettings: grpc.handleBidiStreamingCall<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    getNetworkSettings: grpc.handleBidiStreamingCall<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    updateNetworkSettings: grpc.handleBidiStreamingCall<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    getOptimizationSettings: grpc.handleBidiStreamingCall<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    updateOptimizationSettings: grpc.handleBidiStreamingCall<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    getMonitorSettings: grpc.handleBidiStreamingCall<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    updateMonitorSettings: grpc.handleBidiStreamingCall<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    getTunnelPolicies: grpc.handleBidiStreamingCall<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest>;
    deleteTunnelPoliciesRule: grpc.handleBidiStreamingCall<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest>;
    updateTunnelPoliciesRule: grpc.handleBidiStreamingCall<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest>;
    addTunnelPoliciesRule: grpc.handleBidiStreamingCall<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest>;
    getTrafficPolicies: grpc.handleBidiStreamingCall<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest>;
    deleteTrafficPolicy: grpc.handleBidiStreamingCall<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest>;
    updateTrafficPolicy: grpc.handleBidiStreamingCall<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest>;
    addTrafficPolicy: grpc.handleBidiStreamingCall<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest>;
    getRoutes: grpc.handleBidiStreamingCall<configure_pb.Routes, configure_pb.RoutesRequest>;
    addRoute: grpc.handleBidiStreamingCall<configure_pb.RouteAdd, configure_pb.RouteAddRequest>;
    updateRoute: grpc.handleBidiStreamingCall<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest>;
    removeRoute: grpc.handleBidiStreamingCall<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest>;
    getTcpxRules: grpc.handleBidiStreamingCall<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest>;
    addTcpxRule: grpc.handleBidiStreamingCall<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest>;
    updateTcpxRule: grpc.handleBidiStreamingCall<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest>;
    removeTcpxRule: grpc.handleBidiStreamingCall<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest>;
    moveTcpxRule: grpc.handleBidiStreamingCall<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest>;
    resetService: grpc.handleBidiStreamingCall<configure_pb.ServiceReset, configure_pb.ServiceResetRequest>;
    changeSshPassword: grpc.handleBidiStreamingCall<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest>;
    getPathConfig: grpc.handleBidiStreamingCall<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest>;
    setPathConfig: grpc.handleBidiStreamingCall<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest>;
    getPathGateways: grpc.handleBidiStreamingCall<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest>;
    removePathGateway: grpc.handleBidiStreamingCall<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest>;
    getWebcacheConfig: grpc.handleBidiStreamingCall<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest>;
    setWebcacheConfig: grpc.handleBidiStreamingCall<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest>;
    getStatusUpdate: grpc.handleBidiStreamingCall<status_pb.StatusUpdate, status_pb.StatusUpdateRequest>;
    downloadFile: grpc.handleServerStreamingCall<file_transfer_pb.FileTransferRequest, file_transfer_pb.FileTransferResponse>;
    getServerAgentVersion: grpc.handleUnaryCall<patcher_pb.ServerAgentVersionRequest, patcher_pb.ServerAgentVersionResponse>;
    startBackup: grpc.handleBidiStreamingCall<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest>;
    uploadBackup: grpc.handleClientStreamingCall<maintenance_pb.UploadBackupRequest, maintenance_pb.UploadBackupResponse>;
    getLicense: grpc.handleBidiStreamingCall<license_pb.LicenseResponse, license_pb.LicenseGetRequest>;
    addLicense: grpc.handleBidiStreamingCall<license_pb.LicenseResponse, license_pb.LicenseAddRequest>;
}

export interface IWHubClient {
    register(request: device_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: device_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: device_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: device_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    deviceStatsReport(): grpc.ClientDuplexStream<device_pb.DeviceStats, device_pb.DeviceStatsRequest>;
    deviceStatsReport(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.DeviceStats, device_pb.DeviceStatsRequest>;
    deviceStatsReport(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.DeviceStats, device_pb.DeviceStatsRequest>;
    updatePeers(): grpc.ClientDuplexStream<device_pb.PeersReport, device_pb.PeersRequest>;
    updatePeers(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.PeersReport, device_pb.PeersRequest>;
    updatePeers(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.PeersReport, device_pb.PeersRequest>;
    getDashboardData(): grpc.ClientDuplexStream<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest>;
    getDashboardData(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest>;
    getDashboardData(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest>;
    getDashboardTopPorts(): grpc.ClientDuplexStream<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest>;
    getDashboardTopPorts(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest>;
    getDashboardTopPorts(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest>;
    getWebcacheDates(): grpc.ClientDuplexStream<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest>;
    getWebcacheDates(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest>;
    getWebcacheDates(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest>;
    getWebcacheTotals(): grpc.ClientDuplexStream<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest>;
    getWebcacheTotals(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest>;
    getWebcacheTotals(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest>;
    getWebcacheDomains(): grpc.ClientDuplexStream<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest>;
    getWebcacheDomains(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest>;
    getWebcacheDomains(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest>;
    getWebcacheUrls(): grpc.ClientDuplexStream<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest>;
    getWebcacheUrls(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest>;
    getWebcacheUrls(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest>;
    getWebcacheDenied(): grpc.ClientDuplexStream<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest>;
    getWebcacheDenied(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest>;
    getWebcacheDenied(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest>;
    getWebcacheUsers(): grpc.ClientDuplexStream<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest>;
    getWebcacheUsers(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest>;
    getWebcacheUsers(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest>;
    getWebcacheUserDetail(): grpc.ClientDuplexStream<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest>;
    getWebcacheUserDetail(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest>;
    getWebcacheUserDetail(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest>;
    getWebcacheNetworks(): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest>;
    getWebcacheNetworks(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest>;
    getWebcacheNetworks(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest>;
    getWebcacheNetworkDetail(): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest>;
    getWebcacheNetworkDetail(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest>;
    getWebcacheNetworkDetail(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest>;
    getWebcacheMimeTypes(): grpc.ClientDuplexStream<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest>;
    getWebcacheMimeTypes(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest>;
    getWebcacheMimeTypes(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest>;
    getNetworkApplications(): grpc.ClientDuplexStream<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest>;
    getNetworkApplications(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest>;
    getNetworkApplications(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest>;
    getNetworkSessions(): grpc.ClientDuplexStream<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest>;
    getNetworkSessions(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest>;
    getNetworkSessions(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest>;
    getNetworkSessionDetail(): grpc.ClientDuplexStream<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest>;
    getNetworkSessionDetail(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest>;
    getNetworkSessionDetail(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest>;
    getNetworkTopApplications(): grpc.ClientDuplexStream<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest>;
    getNetworkTopApplications(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest>;
    getNetworkTopApplications(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest>;
    getNetworkPeers(): grpc.ClientDuplexStream<network_pb.NetworkPeers, network_pb.NetworkPeersRequest>;
    getNetworkPeers(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeers, network_pb.NetworkPeersRequest>;
    getNetworkPeers(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeers, network_pb.NetworkPeersRequest>;
    deleteNetworkPeer(): grpc.ClientDuplexStream<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest>;
    deleteNetworkPeer(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest>;
    deleteNetworkPeer(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest>;
    getNetworkInterfaceTraffic(): grpc.ClientDuplexStream<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest>;
    getNetworkInterfaceTraffic(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest>;
    getNetworkInterfaceTraffic(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest>;
    getNetworkOptimizationLanToWan(): grpc.ClientDuplexStream<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest>;
    getNetworkOptimizationLanToWan(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest>;
    getNetworkOptimizationLanToWan(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest>;
    getNetworkOptimizationWanToLan(): grpc.ClientDuplexStream<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest>;
    getNetworkOptimizationWanToLan(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest>;
    getNetworkOptimizationWanToLan(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest>;
    getNetworkOptimizationPassThrough(): grpc.ClientDuplexStream<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest>;
    getNetworkOptimizationPassThrough(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest>;
    getNetworkOptimizationPassThrough(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest>;
    getNetworkOptimizationRatios(): grpc.ClientDuplexStream<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest>;
    getNetworkOptimizationRatios(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest>;
    getNetworkOptimizationRatios(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest>;
    getNetworkQosReport(): grpc.ClientDuplexStream<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest>;
    getNetworkQosReport(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest>;
    getNetworkQosReport(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest>;
    getNetworkInterfaces(): grpc.ClientDuplexStream<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest>;
    getNetworkInterfaces(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest>;
    getNetworkInterfaces(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest>;
    getSystemMemory(): grpc.ClientDuplexStream<system_pb.SystemMemory, system_pb.SystemMemoryRequest>;
    getSystemMemory(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemMemory, system_pb.SystemMemoryRequest>;
    getSystemMemory(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemMemory, system_pb.SystemMemoryRequest>;
    getSystemLoad(): grpc.ClientDuplexStream<system_pb.SystemLoad, system_pb.SystemLoadRequest>;
    getSystemLoad(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemLoad, system_pb.SystemLoadRequest>;
    getSystemLoad(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemLoad, system_pb.SystemLoadRequest>;
    getSystemCpu(): grpc.ClientDuplexStream<system_pb.SystemCpu, system_pb.SystemCpuRequest>;
    getSystemCpu(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemCpu, system_pb.SystemCpuRequest>;
    getSystemCpu(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemCpu, system_pb.SystemCpuRequest>;
    getSystemDiskLoad(): grpc.ClientDuplexStream<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest>;
    getSystemDiskLoad(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest>;
    getSystemDiskLoad(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest>;
    getSystemDiskSpace(): grpc.ClientDuplexStream<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest>;
    getSystemDiskSpace(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest>;
    getSystemDiskSpace(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest>;
    getSystemInfo(): grpc.ClientDuplexStream<system_pb.SystemInfo, system_pb.SystemInfoRequest>;
    getSystemInfo(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemInfo, system_pb.SystemInfoRequest>;
    getSystemInfo(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemInfo, system_pb.SystemInfoRequest>;
    getSystemIndicators(): grpc.ClientDuplexStream<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest>;
    getSystemIndicators(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest>;
    getSystemIndicators(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest>;
    getDiagnosticLog(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest>;
    getDiagnosticLog(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest>;
    getDiagnosticLog(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest>;
    getDiagnosticHealth(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest>;
    getDiagnosticHealth(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest>;
    getDiagnosticHealth(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest>;
    getDiagnosticBenchmark(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    getDiagnosticBenchmark(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    getDiagnosticBenchmark(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    scheduleDiagnosticBenchmark(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    scheduleDiagnosticBenchmark(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    scheduleDiagnosticBenchmark(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    getDiagnosticNetstat(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest>;
    getDiagnosticNetstat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest>;
    getDiagnosticNetstat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest>;
    getDiagnosticPing(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest>;
    getDiagnosticPing(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest>;
    getDiagnosticPing(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest>;
    getDiagnosticTraceroute(): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest>;
    getDiagnosticTraceroute(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest>;
    getDiagnosticTraceroute(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest>;
    getSystemSettings(): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    getSystemSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    getSystemSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    updateSystemSettings(): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    updateSystemSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    updateSystemSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    getNetworkSettings(): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    getNetworkSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    getNetworkSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    updateNetworkSettings(): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    updateNetworkSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    updateNetworkSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    getOptimizationSettings(): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    getOptimizationSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    getOptimizationSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    updateOptimizationSettings(): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    updateOptimizationSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    updateOptimizationSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    getMonitorSettings(): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    getMonitorSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    getMonitorSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    updateMonitorSettings(): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    updateMonitorSettings(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    updateMonitorSettings(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    getTunnelPolicies(): grpc.ClientDuplexStream<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest>;
    getTunnelPolicies(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest>;
    getTunnelPolicies(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest>;
    deleteTunnelPoliciesRule(): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest>;
    deleteTunnelPoliciesRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest>;
    deleteTunnelPoliciesRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest>;
    updateTunnelPoliciesRule(): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest>;
    updateTunnelPoliciesRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest>;
    updateTunnelPoliciesRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest>;
    addTunnelPoliciesRule(): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest>;
    addTunnelPoliciesRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest>;
    addTunnelPoliciesRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest>;
    getTrafficPolicies(): grpc.ClientDuplexStream<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest>;
    getTrafficPolicies(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest>;
    getTrafficPolicies(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest>;
    deleteTrafficPolicy(): grpc.ClientDuplexStream<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest>;
    deleteTrafficPolicy(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest>;
    deleteTrafficPolicy(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest>;
    updateTrafficPolicy(): grpc.ClientDuplexStream<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest>;
    updateTrafficPolicy(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest>;
    updateTrafficPolicy(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest>;
    addTrafficPolicy(): grpc.ClientDuplexStream<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest>;
    addTrafficPolicy(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest>;
    addTrafficPolicy(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest>;
    getRoutes(): grpc.ClientDuplexStream<configure_pb.Routes, configure_pb.RoutesRequest>;
    getRoutes(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.Routes, configure_pb.RoutesRequest>;
    getRoutes(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.Routes, configure_pb.RoutesRequest>;
    addRoute(): grpc.ClientDuplexStream<configure_pb.RouteAdd, configure_pb.RouteAddRequest>;
    addRoute(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteAdd, configure_pb.RouteAddRequest>;
    addRoute(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteAdd, configure_pb.RouteAddRequest>;
    updateRoute(): grpc.ClientDuplexStream<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest>;
    updateRoute(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest>;
    updateRoute(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest>;
    removeRoute(): grpc.ClientDuplexStream<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest>;
    removeRoute(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest>;
    removeRoute(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest>;
    getTcpxRules(): grpc.ClientDuplexStream<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest>;
    getTcpxRules(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest>;
    getTcpxRules(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest>;
    addTcpxRule(): grpc.ClientDuplexStream<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest>;
    addTcpxRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest>;
    addTcpxRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest>;
    updateTcpxRule(): grpc.ClientDuplexStream<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest>;
    updateTcpxRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest>;
    updateTcpxRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest>;
    removeTcpxRule(): grpc.ClientDuplexStream<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest>;
    removeTcpxRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest>;
    removeTcpxRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest>;
    moveTcpxRule(): grpc.ClientDuplexStream<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest>;
    moveTcpxRule(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest>;
    moveTcpxRule(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest>;
    resetService(): grpc.ClientDuplexStream<configure_pb.ServiceReset, configure_pb.ServiceResetRequest>;
    resetService(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.ServiceReset, configure_pb.ServiceResetRequest>;
    resetService(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.ServiceReset, configure_pb.ServiceResetRequest>;
    changeSshPassword(): grpc.ClientDuplexStream<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest>;
    changeSshPassword(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest>;
    changeSshPassword(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest>;
    getPathConfig(): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest>;
    getPathConfig(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest>;
    getPathConfig(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest>;
    setPathConfig(): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest>;
    setPathConfig(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest>;
    setPathConfig(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest>;
    getPathGateways(): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest>;
    getPathGateways(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest>;
    getPathGateways(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest>;
    removePathGateway(): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest>;
    removePathGateway(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest>;
    removePathGateway(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest>;
    getWebcacheConfig(): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest>;
    getWebcacheConfig(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest>;
    getWebcacheConfig(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest>;
    setWebcacheConfig(): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest>;
    setWebcacheConfig(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest>;
    setWebcacheConfig(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest>;
    getStatusUpdate(): grpc.ClientDuplexStream<status_pb.StatusUpdate, status_pb.StatusUpdateRequest>;
    getStatusUpdate(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<status_pb.StatusUpdate, status_pb.StatusUpdateRequest>;
    getStatusUpdate(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<status_pb.StatusUpdate, status_pb.StatusUpdateRequest>;
    downloadFile(request: file_transfer_pb.FileTransferRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<file_transfer_pb.FileTransferResponse>;
    downloadFile(request: file_transfer_pb.FileTransferRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<file_transfer_pb.FileTransferResponse>;
    getServerAgentVersion(request: patcher_pb.ServerAgentVersionRequest, callback: (error: grpc.ServiceError | null, response: patcher_pb.ServerAgentVersionResponse) => void): grpc.ClientUnaryCall;
    getServerAgentVersion(request: patcher_pb.ServerAgentVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: patcher_pb.ServerAgentVersionResponse) => void): grpc.ClientUnaryCall;
    getServerAgentVersion(request: patcher_pb.ServerAgentVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: patcher_pb.ServerAgentVersionResponse) => void): grpc.ClientUnaryCall;
    startBackup(): grpc.ClientDuplexStream<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest>;
    startBackup(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest>;
    startBackup(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest>;
    uploadBackup(callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    uploadBackup(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    uploadBackup(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    uploadBackup(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    getLicense(): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseGetRequest>;
    getLicense(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseGetRequest>;
    getLicense(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseGetRequest>;
    addLicense(): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseAddRequest>;
    addLicense(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseAddRequest>;
    addLicense(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseAddRequest>;
}

export class WHubClient extends grpc.Client implements IWHubClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public register(request: device_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: device_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: device_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: device_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public deviceStatsReport(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.DeviceStats, device_pb.DeviceStatsRequest>;
    public deviceStatsReport(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.DeviceStats, device_pb.DeviceStatsRequest>;
    public updatePeers(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.PeersReport, device_pb.PeersRequest>;
    public updatePeers(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<device_pb.PeersReport, device_pb.PeersRequest>;
    public getDashboardData(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest>;
    public getDashboardData(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardData, dashboard_pb.DashboardDataRequest>;
    public getDashboardTopPorts(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest>;
    public getDashboardTopPorts(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<dashboard_pb.DashboardTopPorts, dashboard_pb.DashboardTopPortsRequest>;
    public getWebcacheDates(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest>;
    public getWebcacheDates(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDates, webcache_pb.WebcacheDatesRequest>;
    public getWebcacheTotals(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest>;
    public getWebcacheTotals(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheTotals, webcache_pb.WebcacheTotalsRequest>;
    public getWebcacheDomains(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest>;
    public getWebcacheDomains(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDomains, webcache_pb.WebcacheDomainsRequest>;
    public getWebcacheUrls(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest>;
    public getWebcacheUrls(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUrls, webcache_pb.WebcacheUrlsRequest>;
    public getWebcacheDenied(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest>;
    public getWebcacheDenied(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheDenied, webcache_pb.WebcacheDeniedRequest>;
    public getWebcacheUsers(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest>;
    public getWebcacheUsers(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUsers, webcache_pb.WebcacheUsersRequest>;
    public getWebcacheUserDetail(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest>;
    public getWebcacheUserDetail(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheUserDetail, webcache_pb.WebcacheUserDetailRequest>;
    public getWebcacheNetworks(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest>;
    public getWebcacheNetworks(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworks, webcache_pb.WebcacheNetworksRequest>;
    public getWebcacheNetworkDetail(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest>;
    public getWebcacheNetworkDetail(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheNetworkDetail, webcache_pb.WebcacheNetworkDetailRequest>;
    public getWebcacheMimeTypes(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest>;
    public getWebcacheMimeTypes(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<webcache_pb.WebcacheMimeTypes, webcache_pb.WebcacheMimeTypesRequest>;
    public getNetworkApplications(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest>;
    public getNetworkApplications(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkApplications, network_pb.NetworkApplicationsRequest>;
    public getNetworkSessions(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest>;
    public getNetworkSessions(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessions, network_pb.NetworkSessionsRequest>;
    public getNetworkSessionDetail(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest>;
    public getNetworkSessionDetail(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkSessionDetail, network_pb.NetworkSessionDetailRequest>;
    public getNetworkTopApplications(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest>;
    public getNetworkTopApplications(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkTopApplications, network_pb.NetworkTopApplicationsRequest>;
    public getNetworkPeers(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeers, network_pb.NetworkPeersRequest>;
    public getNetworkPeers(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeers, network_pb.NetworkPeersRequest>;
    public deleteNetworkPeer(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest>;
    public deleteNetworkPeer(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkPeerDelete, network_pb.NetworkPeerDeleteRequest>;
    public getNetworkInterfaceTraffic(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest>;
    public getNetworkInterfaceTraffic(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaceTraffic, network_pb.NetworkInterfaceTrafficRequest>;
    public getNetworkOptimizationLanToWan(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest>;
    public getNetworkOptimizationLanToWan(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationLanToWan, network_pb.NetworkOptimizationLanToWanRequest>;
    public getNetworkOptimizationWanToLan(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest>;
    public getNetworkOptimizationWanToLan(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationWanToLan, network_pb.NetworkOptimizationWanToLanRequest>;
    public getNetworkOptimizationPassThrough(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest>;
    public getNetworkOptimizationPassThrough(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationPassThrough, network_pb.NetworkOptimizationPassThroughRequest>;
    public getNetworkOptimizationRatios(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest>;
    public getNetworkOptimizationRatios(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkOptimizationRatios, network_pb.NetworkOptimizationRatiosRequest>;
    public getNetworkQosReport(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest>;
    public getNetworkQosReport(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkQosReport, network_pb.NetworkQosReportRequest>;
    public getNetworkInterfaces(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest>;
    public getNetworkInterfaces(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<network_pb.NetworkInterfaces, network_pb.NetworkInterfacesRequest>;
    public getSystemMemory(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemMemory, system_pb.SystemMemoryRequest>;
    public getSystemMemory(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemMemory, system_pb.SystemMemoryRequest>;
    public getSystemLoad(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemLoad, system_pb.SystemLoadRequest>;
    public getSystemLoad(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemLoad, system_pb.SystemLoadRequest>;
    public getSystemCpu(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemCpu, system_pb.SystemCpuRequest>;
    public getSystemCpu(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemCpu, system_pb.SystemCpuRequest>;
    public getSystemDiskLoad(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest>;
    public getSystemDiskLoad(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskLoad, system_pb.SystemDiskLoadRequest>;
    public getSystemDiskSpace(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest>;
    public getSystemDiskSpace(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemDiskSpace, system_pb.SystemDiskSpaceRequest>;
    public getSystemInfo(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemInfo, system_pb.SystemInfoRequest>;
    public getSystemInfo(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemInfo, system_pb.SystemInfoRequest>;
    public getSystemIndicators(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest>;
    public getSystemIndicators(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<system_pb.SystemIndicators, system_pb.SystemIndicatorsRequest>;
    public getDiagnosticLog(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest>;
    public getDiagnosticLog(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticLog, diagnostic_pb.DiagnosticLogRequest>;
    public getDiagnosticHealth(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest>;
    public getDiagnosticHealth(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticHealth, diagnostic_pb.DiagnosticHealthRequest>;
    public getDiagnosticBenchmark(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    public getDiagnosticBenchmark(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    public scheduleDiagnosticBenchmark(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    public scheduleDiagnosticBenchmark(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticBenchmark, diagnostic_pb.DiagnosticBenchmarkRequest>;
    public getDiagnosticNetstat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest>;
    public getDiagnosticNetstat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticNetstat, diagnostic_pb.DiagnosticNetstatRequest>;
    public getDiagnosticPing(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest>;
    public getDiagnosticPing(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticPing, diagnostic_pb.DiagnosticPingRequest>;
    public getDiagnosticTraceroute(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest>;
    public getDiagnosticTraceroute(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<diagnostic_pb.DiagnosticTraceroute, diagnostic_pb.DiagnosticTracerouteRequest>;
    public getSystemSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    public getSystemSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    public updateSystemSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    public updateSystemSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SystemSettings, configure_pb.SystemSettingsRequest>;
    public getNetworkSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    public getNetworkSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    public updateNetworkSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    public updateNetworkSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.NetworkSettings, configure_pb.NetworkSettingsRequest>;
    public getOptimizationSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    public getOptimizationSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    public updateOptimizationSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    public updateOptimizationSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.OptimizationSettings, configure_pb.OptimizationSettingsRequest>;
    public getMonitorSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    public getMonitorSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    public updateMonitorSettings(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    public updateMonitorSettings(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.MonitorSettings, configure_pb.MonitorSettingsRequest>;
    public getTunnelPolicies(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest>;
    public getTunnelPolicies(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPolicies, configure_pb.TunnelPoliciesRequest>;
    public deleteTunnelPoliciesRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest>;
    public deleteTunnelPoliciesRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesDeleteRule, configure_pb.TunnelPoliciesDeleteRuleRequest>;
    public updateTunnelPoliciesRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest>;
    public updateTunnelPoliciesRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesUpdateRule, configure_pb.TunnelPoliciesUpdateRuleRequest>;
    public addTunnelPoliciesRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest>;
    public addTunnelPoliciesRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TunnelPoliciesAddRule, configure_pb.TunnelPoliciesAddRuleRequest>;
    public getTrafficPolicies(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest>;
    public getTrafficPolicies(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicies, configure_pb.TrafficPoliciesRequest>;
    public deleteTrafficPolicy(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest>;
    public deleteTrafficPolicy(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyDelete, configure_pb.TrafficPolicyDeleteRequest>;
    public updateTrafficPolicy(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest>;
    public updateTrafficPolicy(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyUpdate, configure_pb.TrafficPolicyUpdateRequest>;
    public addTrafficPolicy(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest>;
    public addTrafficPolicy(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TrafficPolicyAdd, configure_pb.TrafficPolicyAddRequest>;
    public getRoutes(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.Routes, configure_pb.RoutesRequest>;
    public getRoutes(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.Routes, configure_pb.RoutesRequest>;
    public addRoute(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteAdd, configure_pb.RouteAddRequest>;
    public addRoute(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteAdd, configure_pb.RouteAddRequest>;
    public updateRoute(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest>;
    public updateRoute(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteUpdate, configure_pb.RouteUpdateRequest>;
    public removeRoute(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest>;
    public removeRoute(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.RouteRemove, configure_pb.RouteRemoveRequest>;
    public getTcpxRules(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest>;
    public getTcpxRules(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRules, configure_pb.GetTcpxRulesRequest>;
    public addTcpxRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest>;
    public addTcpxRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleAdd, configure_pb.AddTcpxRuleRequest>;
    public updateTcpxRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest>;
    public updateTcpxRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleUpdate, configure_pb.UpdateTcpxRuleRequest>;
    public removeTcpxRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest>;
    public removeTcpxRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleRemove, configure_pb.RemoveTcpxRuleRequest>;
    public moveTcpxRule(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest>;
    public moveTcpxRule(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.TcpxRuleMove, configure_pb.MoveTcpxRuleRequest>;
    public resetService(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.ServiceReset, configure_pb.ServiceResetRequest>;
    public resetService(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.ServiceReset, configure_pb.ServiceResetRequest>;
    public changeSshPassword(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest>;
    public changeSshPassword(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.SshPasswordChange, configure_pb.SshPasswordChangeRequest>;
    public getPathConfig(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest>;
    public getPathConfig(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.GetPathConfigRequest>;
    public setPathConfig(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest>;
    public setPathConfig(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathConfigResponse, configure_pb.SetPathConfigRequest>;
    public getPathGateways(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest>;
    public getPathGateways(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.GetPathsRequest>;
    public removePathGateway(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest>;
    public removePathGateway(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.PathGatewaysResponse, configure_pb.RemovePathRequest>;
    public getWebcacheConfig(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest>;
    public getWebcacheConfig(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.GetWebcacheConfRequest>;
    public setWebcacheConfig(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest>;
    public setWebcacheConfig(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<configure_pb.WebcacheConfResponse, configure_pb.SetWebcacheConfRequest>;
    public getStatusUpdate(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<status_pb.StatusUpdate, status_pb.StatusUpdateRequest>;
    public getStatusUpdate(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<status_pb.StatusUpdate, status_pb.StatusUpdateRequest>;
    public downloadFile(request: file_transfer_pb.FileTransferRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<file_transfer_pb.FileTransferResponse>;
    public downloadFile(request: file_transfer_pb.FileTransferRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<file_transfer_pb.FileTransferResponse>;
    public getServerAgentVersion(request: patcher_pb.ServerAgentVersionRequest, callback: (error: grpc.ServiceError | null, response: patcher_pb.ServerAgentVersionResponse) => void): grpc.ClientUnaryCall;
    public getServerAgentVersion(request: patcher_pb.ServerAgentVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: patcher_pb.ServerAgentVersionResponse) => void): grpc.ClientUnaryCall;
    public getServerAgentVersion(request: patcher_pb.ServerAgentVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: patcher_pb.ServerAgentVersionResponse) => void): grpc.ClientUnaryCall;
    public startBackup(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest>;
    public startBackup(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<maintenance_pb.StartBackupResponse, maintenance_pb.StartBackupRequest>;
    public uploadBackup(callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    public uploadBackup(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    public uploadBackup(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    public uploadBackup(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: maintenance_pb.UploadBackupResponse) => void): grpc.ClientWritableStream<maintenance_pb.UploadBackupRequest>;
    public getLicense(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseGetRequest>;
    public getLicense(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseGetRequest>;
    public addLicense(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseAddRequest>;
    public addLicense(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<license_pb.LicenseResponse, license_pb.LicenseAddRequest>;
}
