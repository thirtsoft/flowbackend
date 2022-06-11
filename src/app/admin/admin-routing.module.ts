import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  {
    path: 'accueil',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardModule),
      },

      {
        path: 'charts',
        loadChildren: () => 
          import('../chart/chart.module').then(
            (m) => m.ChartModule),
      },

      {
        path: 'categories',
        loadChildren: () => 
          import('../category/category.module').then(
            (m) => m.CategoryModule),
      },

      {
        path: 'products',
        loadChildren: () => 
          import('../product/product.module').then(
            (m) => m.ProductModule),
      },

      {
        path: 'commandes',
        loadChildren: () => 
          import('../commande/commande.module').then(
            (m) => m.CommandeModule),
      },

      {
        path: 'deliveries',
        loadChildren: () => 
          import('../delivery-address/delivery-address.module').then(
            (m) => m.DeliveryAddressModule),
      },

      {
        path: 'localities',
        loadChildren: () => 
          import('../city/city.module').then(
            (m) => m.CityModule),
      },

      {
        path: 'fournisseurs',
        loadChildren: () => 
          import('../fournisseur/fournisseur.module').then(
            (m) => m.FournisseurModule),
      },

      {
        path: 'blogs',
        loadChildren: () => 
          import('../blog/blog.module').then(
            (m) => m.BlogModule),
      },

      {
        path: 'utilisateurs',
        loadChildren: () => 
          import('../utilisateur/utilisateur.module').then(
            (m) => m.UtilisateurModule),
      },

      {
        path: 'historiques',
        loadChildren: () => 
          import('../historique/historique.module').then(
            (m) => m.HistoriqueModule),
      },


    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
