import { NgProgressConfig } from './ng-progress.interface';
export declare class NgProgress {
    /** Stores NgProgressRef instances */
    private readonly _instances;
    /** Global config */
    config: NgProgressConfig;
    constructor(config: NgProgressConfig);
    /**
     * Returns NgProgressRef by ID
     */
    ref(id?: string, config?: NgProgressConfig): any;
    setConfig(config: NgProgressConfig, id?: string): void;
    start(id?: string): void;
    set(n: number, id?: string): void;
    inc(n?: number, id?: string): void;
    complete(id?: string): void;
    isStarted(id?: string): any;
    started(id?: string): any;
    completed(id?: string): any;
    destroy(id?: string): void;
    destroyAll(): void;
}
