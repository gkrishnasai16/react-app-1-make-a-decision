class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);

        this.state ={
            count:0
        };
    }

    handleAddOne(){
            
            this.setState((prevState)=>{
                return {
                count:prevState.count+1
                }
            });            
        };
        
    handleMinusOne(){
            //count--;
            this.setState((prevState)=> {
                return {
                    count:prevState.count-1
                };
            });
            
         };
    handleReset(){
            //count=0;
            this.setState(()=>{
                return {
                    count:0 
                };
                });
           
         };

    render(){
        return (
            <div> 
             <h1>Count: {this.state.count}</h1> 
             <button onClick ={this.handleAddOne}>+1</button>
             <button onClick ={this.handleMinusOne.bind(this)}>-1</button>
             <button onClick ={this.handleReset.bind(this)}>reset</button>
         </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     //console.log("addOne");
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     //console.log("minusOne");
//     renderCounterApp();
//  };
// const reset = () => {
//     count=0;
//    // console.log("reset");
//     renderCounterApp();
//  };

// const renderCounterApp = () =>{

//     const templatetwo = (
//         <div> 
//             <h1>Count: {count}</h1> 
//             <button onClick ={addOne}>+1</button>
//             <button onClick ={minusOne}>-1</button>
//             <button onClick ={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templatetwo,appRoot);

// };

// renderCounterApp();