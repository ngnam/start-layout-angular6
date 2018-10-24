import { Injector } from '@angular/core';
import { Title } from '@angular/platform-browser';

export abstract class BaseComponent {
    private _titlePage: string;
    private _titleService: Title;

    public constructor(
        protected injector: Injector,
        protected titlePage: string
    ) {
        this._titleService = injector.get(Title);
        this._titlePage = titlePage;
    }

    public setTitle(newTitle?: string) {
        this._titleService.setTitle(newTitle || this._titlePage);
    }

    public getTitle(): string {
        return this._titleService.getTitle() || this._titlePage;
    }
}
