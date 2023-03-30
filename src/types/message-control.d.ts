declare module '@/message-control/renderer' {
    const sendAsync: (query: string) => Promise<any>;
    export default sendAsync;
  }
  