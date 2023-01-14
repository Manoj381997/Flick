/// <reference types="youtube" />
import { NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IPlayerApiScriptOptions, IPlayerOutputs, IPlayerSize } from '../models';
export declare class YoutubePlayerService {
    private zone;
    static readonly win: Window;
    static readonly YT: any;
    static readonly Player: any;
    api: ReplaySubject<YT.Player>;
    private isFullscreen;
    private defaultSizes;
    constructor(zone: NgZone);
    loadPlayerApi(options: IPlayerApiScriptOptions): void;
    setupPlayer(elementId: string, outputs: IPlayerOutputs, sizes: IPlayerSize, videoId: string, playerVars: YT.PlayerVars): void;
    play(player: YT.Player): void;
    pause(player: YT.Player): void;
    playVideo(media: any, player: YT.Player): void;
    isPlaying(player: YT.Player): boolean;
    createPlayer(elementId: string, outputs: IPlayerOutputs, sizes: IPlayerSize, videoId?: string, playerVars?: YT.PlayerVars): any;
    toggleFullScreen(player: YT.Player, isFullScreen: boolean | null | undefined): void;
    generateUniqueId(): string;
    private createApi();
}
