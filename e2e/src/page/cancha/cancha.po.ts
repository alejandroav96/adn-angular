import { by, element } from 'protractor';

export class CanchaPage {
    private listaCanchas = element.all(by.tagName('mat-list-item'));

    async contarCanchas() {
        return this.listaCanchas.count();
    }
}
