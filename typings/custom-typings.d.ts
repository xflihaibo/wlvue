declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
// declare module '*.svg' {
//   import type { DefineComponent } from 'vue';
//   const component: DefineComponent;
//   export default component;
// }

declare module '*.svg' {
  // It's really a string, precisely a resolved path pointing to the image file
  const id: string;
  const viewBox: string;

}

declare module '*.png' {
  const content: any;
  export default content;
}

interface Window {
  'NIOBridge': any
}

declare module 'nio-tracker-web' {

  const Tracker: { 
    init: Function,
    track: Function
  }
  export default Tracker
  //  default tracker
}
