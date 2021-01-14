        //file you want to do test on
describe('calculator.js', () => {
    let calculator;
  
    describe('Calculator', () =>{
        beforeEach(function(){
            //anything inside this block executes before
            // each spec (it) inside this suite (describe)
            //we created let calculator is executed before each
            //all the time and we could delete const calculator
            calculator = new Calculator();
         
        })//nested suite to organize output to be regible 
        describe('add()', () =>{
            it('should add numbers to total', () =>{
                // const calculator = new Calculator();//what you want to write test against
                                                    //create const and use name of constructor
                                                    //agains which you want to do test
                
                calculator.add(5) //our total set to 0 so +5 total will be 5 as we expect
                                    //matcher toBe()                
                expect(calculator.total).toBe(5)
                                //our total                         
            })
        });
        describe('subtract()', () =>{
            it('should subtract numbers from total', () =>{
                // const calculator = new Calculator();
                calculator.total = 100;
                calculator.subtract(5);
                expect(calculator.total).toBe(95)
            });

        });
        describe('multiply()', () =>{
    
            it('should multiply total by number', () =>{
                // const calculator = new Calculator();
                calculator.total = 100;
                calculator.multiply(5);
                expect(calculator.total).toBe(500)
            })
            it('does not handle NaN', () =>{
                // const calculator = new Calculator();
                calculator.total = 20;
                calculator.multiply('a')
        
                expect(calculator.total).toBeNaN();
            })
        });
        describe('divide()', () =>{
            it('should divide number to total', () =>{
                // const calculator = new Calculator();
                calculator.total = 200
                calculator.divide(5);
                expect(calculator.total).toBe(40)
            })
            it('handles divide by 0', () =>{
                calculator = new Calculator();
                calculator.total = 20;
                expect(() => { calculator.divide(0) }).toThrow(); 
                expect(() => { calculator.divide(0) }).toThrowError(Error, 'Can not divide by 0')
            })
        });

        describe('total', () =>{
            it('should initialize total', () =>{
                // const calculator = new Calculator();
                expect(calculator.total).toBe(0);
                expect(calculator.constructor.name).toContain('Calc');
            })
        
            it('can override total', () =>{
                // const calculator = new Calculator();
                calculator.total = null;
                expect(calculator.total).toBeNull();
            })
            it('return total', () =>{
                calculator = new Calculator();
                calculator.total = 100;
        
                expect(calculator.total).toMatch(/-?\d+/)
                expect(calculator.total).toBeNumber ();
            })
        });
    });
});



//remeber to include src in spec-runner html calculator.js(file name agains which you dot test)
// <script src="/folder name/file_name.js"></script>