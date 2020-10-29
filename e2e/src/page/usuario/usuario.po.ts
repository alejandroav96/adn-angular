import { by, element } from 'protractor';

export class UsuarioPage {
    private linkCrearUsuario = element(by.tagName('button'));
    private inputNombre = element(by.id('nombre'));
    private listaUsuarios = element.all(by.tagName('mat-list-item'));

    async clickBotonCrearUsuarios() {
        await this.linkCrearUsuario.click();
    }

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async contarUsuarios() {
        return this.listaUsuarios.count();
    }
}
