import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { UsuarioPage } from '../page/usuario/usuario.po';

describe('workspace-project usuario', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let usuario: UsuarioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        usuario = new UsuarioPage();
    });

    it('Listar usuarios', () => {
        page.navigateTo();
        navBar.clickBotonUsuarios();
        expect(3).toBe(usuario.contarUsuarios());
    });

    it('Crear usuario', ()=> {
        page.navigateTo();
        navBar.clickBotonUsuarios();
        usuario.clickBotonCrearUsuarios();
        usuario.ingresarNombre("Alejandro");
    })
});
