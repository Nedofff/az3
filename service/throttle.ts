

export default function throttle(func:any, ms:number) {

    let isThrottled:boolean = false,
      savedArgs:IArguments | null,
      savedThis:any;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs as any);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }