import { NgProgressState, NgProgressConfig } from './ng-progress.interface';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
export declare class NgProgressRef {
    private _state;
    private _config;
    /** Stream that increments and updates progress state */
    private _trickling$;
    /** Stream that emits when progress state is changed */
    state$: BehaviorSubject<NgProgressState>;
    /** Stream that emits when config is changed */
    config$: Subject<NgProgressConfig>;
    readonly isStarted: boolean;
    /** Progress start event */
    readonly started: Observable<boolean>;
    /** Progress ended event */
    readonly completed: Observable<boolean>;
    constructor(customConfig: NgProgressConfig);
    start(): void;
    complete(): void;
    inc(amount?: number): void;
    set(n: number): void;
    setConfig(config: NgProgressConfig): void;
    /**
     * Meant to be used internally and not by user directly
     * Users should use NgProgressManager.destroy(id) instead
     */
    destroy(): void;
    private _setState(state);
    /** Clamps a value to be between min and max */
    private _clamp(n);
    /** Keeps incrementing the progress */
    private _trickling(config);
    /** Completes then resets the progress */
    private _complete(config);
}
