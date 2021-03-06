import { ProfessionalController } from "./controller/Professional.controller";
import { ProfessionalTypeController } from "./controller/ProfessionalType.controller";

export const Routes = [
  // Professional routes
  {
    method: "get",
    route: "/professional",
    controller: ProfessionalController,
    action: "all"
  },
  {
    method: "get",
    route: "/professional/:id",
    controller: ProfessionalController,
    action: "one"
  },
  {
    method: "post",
    route: "/professional",
    controller: ProfessionalController,
    action: "save"
  },
  {
    method: "put",
    route: "/professional/:id",
    controller: ProfessionalController,
    action: "update"
  },
  {
    method: "delete",
    route: "/professional/:id",
    controller: ProfessionalController,
    action: "remove"
  },
  // Professional Types routes
  {
    method: "get",
    route: "/professional-type",
    controller: ProfessionalTypeController,
    action: "all"
  },
  {
    method: "get",
    route: "/professional-type/:id",
    controller: ProfessionalTypeController,
    action: "one"
  },
  {
    method: "post",
    route: "/professional-type",
    controller: ProfessionalTypeController,
    action: "save"
  },
  {
    method: "put",
    route: "/professional-type/:id",
    controller: ProfessionalTypeController,
    action: "update"
  },
  {
    method: "delete",
    route: "/professional-type/:id",
    controller: ProfessionalTypeController,
    action: "remove"
  }
];