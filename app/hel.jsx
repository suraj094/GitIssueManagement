import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Git extends React.Component{
    render(){
        return(
            <div>
<div>HELLO WORLD!!!</div>
<div>{this.props.thedata}</div>
                </div>
        )
    }
}

class App extends React.Component{
    constructor(props, context) {
    super(props, context);

    this.state = {
     data: [
        "prakash"
     ],
    };
  };
    render(){
        return(
            <div>
        <div>hello</div>
        <button value="Click button" onClick = {this.unhandler}>Clickme</button>
        <Git className="cont" thedata={this.state.data}/>
        </div>)
    };

    componentDidMount(){
    this.handler({});
};
// handler(filter){

//     $.ajax('/git', {dbdata: filter}).done(function(dbdata){
//         this.state({data: dbdata});
//         // console.log(dbdata);
//     }.bind(this));
// };

    handler(){
    console.log("ajax call");
    $.ajax({
        url:'http://localhost:7777/git',
        dataType:'json',
    
        success:function(mydata){
            console.log("data is coming");
            var datastring = JSON.stringify(mydata);
            this.setState({data: datastring});
            // this.setState({data:["suraj"]})
        }.bind(this)
    });
}


}



export default App;


