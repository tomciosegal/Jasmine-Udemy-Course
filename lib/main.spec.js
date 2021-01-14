describe(('main.js'),() => {
         //name method you want to test
    describe('calculate()', () =>{
        it('validates expression when first number is invalid',function(){
            spyOn(window, 'updateResult') //second par is name of method you 
                                          //want to spy on
            calculate('a+3')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized')
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when second naumber is invalid',function(){
            spyOn(window, 'updateResult') //second par is name of method you 
                                          //want to spy on
            calculate('3+a')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized')
        });

        it('validates expression when operation is invalid',function(){
            spyOn(window, 'updateResult') //second par is name of method you 
                                          //want to spy on
            calculate('3_3')
            expect(window.updateResult).toHaveBeenCalled();
             expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized')
        });

        it('calls add',function(){
            const spy = spyOn(Calculator.prototype, 'add');

            calculate('3+4')
            expect(spy).toHaveBeenCalledTimes(2)
            expect(spy).toHaveBeenCalledWith(3)
            expect(spy).toHaveBeenCalledWith(4)
        });

        it('calls subtract', function(){
            const spy = spyOn(Calculator.prototype, 'subtract');

            calculate('5-4');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls multiply', function(){
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('4*6');
            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(4)
            expect(spy).toHaveBeenCalledWith(6)
        });

        it('calls divide', function(){
            const spy = spyOn(Calculator.prototype, 'divide');

            calculate('10/2');
            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(1)
            expect(spy).toHaveBeenCalledWith(2)

        });

        it('calls UpdateResult (example using and.callThrough', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25)
        });

        it('calls UpdateResult (example using and.returnValues', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever [add] returns');

            calculate('5+5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns')
        });

        it('calls UpdateResult (example using and.callFake', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(number){
                return 'it works';

            });

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works')
        });

        it('does not handle errors', function(){
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');

            expect(function() {calculate('5*5') }).toThrowError('some error');
        });
    });

    
          //name method you want to test
    describe('updateResult()', () => {
    
        //executed once before all specs are executed
        beforeAll(function(){
            //first you define element =>create element 
            //you want to display
        const element = document.createElement('div');
        //setting id and name of id that we have in 
        //main.js
        element.setAttribute('id', 'result');
        document.body.appendChild(element);

        this.element = element;
        });
        //it helps clean innerText from div after  all
        //its clean up step
        //executed once after all specs are executed
        afterAll(function(){
            const element = document.getElementById('result')

            document.body.removeChild(element);
        });

        it('adds result to DOM element', function() {
            
        //   we need to call the method
        // we have in main.js
        updateResult('5');
           
        expect(this.element.innerText).toBe('5')    
        });
    });
});

