import { Application } from "./Application";
import { WindowsFactory } from "./factory/WindowsFactory";
import { MacFactory } from "./factory/MacFactory";

const windows = new Application(new WindowsFactory());
windows.renderUI();

const mac = new Application(new MacFactory());
mac.renderUI();
