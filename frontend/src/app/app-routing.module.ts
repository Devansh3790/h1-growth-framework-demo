import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanActivateAdmin } from './guards/can-activate-admin.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/admin/admin-routing.module").then(
        (m) => m.AdminRoutingModule
      ),
    canActivate: [CanActivateAdmin]
  },
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
