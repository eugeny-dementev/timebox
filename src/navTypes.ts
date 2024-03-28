import { ComponentType } from "react";

export type RouteType = {
  name: string,
  path: string,
  component: ComponentType,
};

export type NavProps = {
  routes: RouteType[],
}
