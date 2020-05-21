import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/admin" },
  {
    path: "admin",
    loadChildren: () =>
      import("./dashboard/dashboard-routing.module").then(
        (m) => m.DashboardRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
