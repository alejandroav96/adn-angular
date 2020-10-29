import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkReservas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCanchas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonReservas() {
        await this.linkReservas.click();
    }

    async clickBotonCanchas() {
        await this.linkCanchas.click();
    }

    async clickBotonUsuarios() {
        await this.linkUsuarios.click();
    }
}
