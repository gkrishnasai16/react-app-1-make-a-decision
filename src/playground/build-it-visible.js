class Template extends React.Component{

    constructor(props){
        super(props);
        this.buttonCLick=this.buttonCLick.bind(this);
        this.state={
            toggle:false
        }
    }


    buttonCLick(){
         this.setState((prevState)=>{
             return {
                 toggle:!prevState.toggle
             }
         });
         
         };


    render(){
        return (
            <div>
            <h1>Visbility Toggle</h1>
            <button onClick={this.buttonCLick}>{this.state.toggle?"Hide details":"Show details"}</button>
            {this.state.toggle && <p>Hey. These are some details you can now see!</p>}
        </div>
        );
    }
}

ReactDOM.render(<Template />,document.getElementById('app'));

// let toggle=false;
// let text ='Hey. These are some details you can now see!';

// const buttonCLick = ()=>{
// toggle=!(toggle);
// console.log(toggle);
// render();
// };



// const render = ()=>{

//     const template = (
//         <div>
//             <h1>Visbility Toggle</h1>
//             <button onClick={buttonCLick}>{toggle?"Hide details":"Show details"}</button>
//             {toggle && <p>{text}</p>}
//         </div>
//     );
    
//     ReactDOM.render(template,document.getElementById('app'));
// };

// render();