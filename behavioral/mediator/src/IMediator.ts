import { Component } from "./Component";

export interface IMediator {
  notify(component: Component, event: string): void;
}
