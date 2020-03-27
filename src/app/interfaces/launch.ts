export interface Launch {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: TentativeMaxPrecision;
    tbd: boolean;
    launch_window: number | null;
    rocket: Rocket;
    ships: string[];
    telemetry: Telemetry;
    launch_site: LaunchSite;
    launch_success: boolean;
    launch_failure_details?: LaunchFailureDetails;
    links: Links;
    details: null | string;
    static_fire_date_utc: null | string;
    static_fire_date_unix: number | null;
    timeline: { [key: string]: number | null } | null;
    crew: null;
    last_date_update?: string;
    last_ll_launch_date?: null | string;
    last_ll_update?: null | string;
    last_wiki_launch_date?: string;
    last_wiki_revision?: string;
    last_wiki_update?: string;
    launch_date_source?: string;
}

export interface LaunchFailureDetails {
    time: number;
    altitude: number | null;
    reason: string;
}

export interface LaunchSite {
    site_id: SiteID;
    site_name: SiteName;
    site_name_long: SiteNameLong;
}

export enum SiteID {
    CcafsSlc40 = 'ccafs_slc_40',
    KscLc39A = 'ksc_lc_39a',
    KwajaleinAtoll = 'kwajalein_atoll',
    VafbSlc4E = 'vafb_slc_4e',
}

export enum SiteName {
    CcafsSlc40 = 'CCAFS SLC 40',
    KscLc39A = 'KSC LC 39A',
    KwajaleinAtoll = 'Kwajalein Atoll',
    VafbSlc4E = 'VAFB SLC 4E',
}

export enum SiteNameLong {
    CapeCanaveralAirForceStationSpaceLaunchComplex40 = 'Cape Canaveral Air Force Station Space Launch Complex 40',
    KennedySpaceCenterHistoricLaunchComplex39A = 'Kennedy Space Center Historic Launch Complex 39A',
    KwajaleinAtollOmelekIsland = 'Kwajalein Atoll Omelek Island',
    VandenbergAirForceBaseSpaceLaunchComplex4E = 'Vandenberg Air Force Base Space Launch Complex 4E',
}

export interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: null | string;
    reddit_launch: null | string;
    reddit_recovery: null | string;
    reddit_media: null | string;
    presskit: null | string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
}

export interface Rocket {
    rocket_id: RocketID;
    rocket_name: RocketName;
    rocket_type: RocketType;
    first_stage: FirstStage;
    second_stage: SecondStage;
    fairings: Fairings | null;
}

export interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean | null;
    ship: Ship | null;
}

export enum Ship {
    Gomstree = 'GOMSTREE',
    Gosearcher = 'GOSEARCHER',
}

export interface FirstStage {
    cores: Core[];
}

export interface Core {
    core_serial: string;
    flight: number;
    block: number | null;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success: boolean | null;
    landing_intent: boolean;
    landing_type: LandingType | null;
    landing_vehicle: LandingVehicle | null;
}

export enum LandingType {
    Asds = 'ASDS',
    Ocean = 'Ocean',
    Rtls = 'RTLS',
}

export enum LandingVehicle {
    Jrti = 'JRTI',
    Jrti1 = 'JRTI-1',
    Lz1 = 'LZ-1',
    Lz2 = 'LZ-2',
    Lz4 = 'LZ-4',
    Ocisly = 'OCISLY',
}

export enum RocketID {
    Falcon1 = 'falcon1',
    Falcon9 = 'falcon9',
    Falconheavy = 'falconheavy',
}

export enum RocketName {
    Falcon1 = 'Falcon 1',
    Falcon9 = 'Falcon 9',
    FalconHeavy = 'Falcon Heavy',
}

export enum RocketType {
    Ft = 'FT',
    MerlinA = 'Merlin A',
    MerlinC = 'Merlin C',
    V10 = 'v1.0',
    V11 = 'v1.1',
}

export interface SecondStage {
    block: number | null;
    payloads: Payload[];
}

export interface Payload {
    payload_id: string;
    norad_id: number[];
    reused: boolean;
    customers: string[];
    nationality?: string;
    manufacturer?: null | string;
    payload_type: PayloadType;
    payload_mass_kg: number | null;
    payload_mass_lbs: number | null;
    orbit: string;
    orbit_params: OrbitParams;
    cap_serial?: string;
    mass_returned_kg?: number | null;
    mass_returned_lbs?: number | null;
    flight_time_sec?: number | null;
    cargo_manifest?: null | string;
    uid?: string;
}

export interface OrbitParams {
    reference_system: ReferenceSystem;
    regime: null | string;
    longitude: number | null;
    semi_major_axis_km: number | null;
    eccentricity: number | null;
    periapsis_km: number | null;
    apoapsis_km: number | null;
    inclination_deg: number | null;
    period_min: number | null;
    lifespan_years: number | null;
    epoch: null | string;
    mean_motion: number | null;
    raan: number | null;
    arg_of_pericenter?: number | null;
    mean_anomaly?: number | null;
}

export enum ReferenceSystem {
    Geocentric = 'geocentric',
    Heliocentric = 'heliocentric',
    HighlyElliptical = 'highly-elliptical',
}

export enum PayloadType {
    CrewDragon = 'Crew Dragon',
    Dragon10 = 'Dragon 1.0',
    Dragon11 = 'Dragon 1.1',
    DragonBoilerplate = 'Dragon Boilerplate',
    Lander = 'Lander',
    Satellite = 'Satellite',
}

export interface Telemetry {
    flight_club: null | string;
}

export enum TentativeMaxPrecision {
    Hour = 'hour',
}
