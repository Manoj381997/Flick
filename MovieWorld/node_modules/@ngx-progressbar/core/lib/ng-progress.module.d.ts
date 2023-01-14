import { ModuleWithProviders } from '@angular/core';
import { NgProgress } from './ng-progress.service';
import { NgProgressConfig } from './ng-progress.interface';
export declare function NgProgressFactory(config: NgProgressConfig): NgProgress;
export declare class NgProgressModule {
    static forRoot(config?: NgProgressConfig): ModuleWithProviders;
}
