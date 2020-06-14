export default class MyQueue {
  pushStack: unknown[];
  popStack: unknown[];
  constructor() {
      this.pushStack = [];
      this.popStack = [];
  }
  push(value: unknown): void {
      this.pushStack.push(value);
  }
  pop(): unknown {
      if(!this.popStack.length){
          while(this.pushStack.length){
             this.popStack.push(this.pushStack.pop()) 
          }
      }
      return this.popStack.pop()
  }
  peek(): unknown {
      if(!this.popStack.length){
          while(this.pushStack.length){
             this.popStack.push(this.pushStack.pop()) 
          }
      }
      return this.popStack[this.popStack.length - 1]
  }
  empty(): boolean {
      return !this.pushStack.length && !this.popStack.length;
  }
}