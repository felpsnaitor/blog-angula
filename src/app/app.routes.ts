import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        // path é o nome da rotar que vai acessar
        path: '',
        component:HomeComponent
    },
    {
        // para colocar o conteudo dinamico coloca esse :id, o id e o numero que vai pegar no banco de dados para acessar os dados da pagina
        path:"content/:id",
        component:ContentComponent
    }

];
