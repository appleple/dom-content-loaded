declare module "dom-content-loaded" {
  var loaded: (listener: (e: EventListenerObject) => any) => void
  export = loaded;
}