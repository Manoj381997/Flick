/**
 * @license
 * Copyright ngx-progressbar All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/MurhafSousli/ngx-progressbar/blob/master/LICENSE
 */
import { OnChanges, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { NgProgress } from './ng-progress.service';
import { NgProgressRef } from './ng-progress-ref';
import { Observable } from 'rxjs';
export declare class NgProgressComponent implements OnInit, OnChanges, OnDestroy {
    private _ngProgress;
    private _started$;
    private _completed$;
    /** Progress bar worker */
    progressRef: NgProgressRef;
    /** Progress state stream */
    state$: Observable<{
        active: boolean;
        transform: string;
    }>;
    /** Creates a new instance if id is not already exists */
    id: string;
    /** Initializes inputs from the global config */
    spinnerPosition: 'left' | 'right';
    direction: 'ltr+' | 'ltr-' | 'rtl+' | 'rtl-';
    ease: string;
    color: string;
    meteor: boolean;
    spinner: boolean;
    thick: boolean;
    max: number;
    min: number;
    speed: number;
    trickleSpeed: number;
    trickleFunc: (n: number) => number;
    debounceTime: number;
    started: EventEmitter<{}>;
    completed: EventEmitter<{}>;
    constructor(_ngProgress: NgProgress);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    start(): void;
    complete(): void;
    inc(n?: number): void;
    set(n: number): void;
    readonly isStarted: boolean;
}
