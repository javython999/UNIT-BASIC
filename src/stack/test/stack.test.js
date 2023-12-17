const Stack = require('../stack.js')

describe('Stack', () => {
  
  let stack;
  beforeEach(()=> {
    stack = new Stack();
  });
  

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });
  

  it('allow to push item', () => {
      stack.push('1');
      expect(stack.size()).toBe(1)
  });
  

  describe('pop', () => {
    
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop(); 
      })
      .toThrow('Stack is empry');
    });
    
    
    it('return the last pushed item and remove it from stack', () => {
      stack.push('1');
      stack.push('2');

      expect(stack.pop()).toEqual('2');
      expect(stack.size()).toBe(1);
    });

  });

  
  describe('peek', () => {

    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.peek(); 
      })
      .toThrow('Stack is empry');
    });


    it('returns the last pushed item but keeps it the stack', () => {
      stack.push('1');
      stack.push('2');

      expect(stack.peek()).toEqual('2');
      expect(stack.size()).toBe(2);
    });
  });

})