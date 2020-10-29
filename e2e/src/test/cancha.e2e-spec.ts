import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CanchaPage } from '../page/cancha/cancha.po';

describe('workspace-project canchas', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cancha: CanchaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cancha = new CanchaPage();
    });

    it('Listar canchas', () => {
        page.navigateTo();
        navBar.clickBotonCanchas();
        expect(2).toBe(cancha.contarCanchas());
    });
});
