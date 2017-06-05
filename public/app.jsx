var GreeterMessage = React.createClass({
    render: function(){
        var name = this.props.name;
        var msg = this.props.msg;
        return (
            <div>
            <h1> Hello {name}! </h1>
            <p> {msg} </p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var updateObj = {};

        var name = this.refs.name.value;
        var msg = this.refs.msg.value;

        if(msg.length > 0){
            updateObj.msg = msg;
        }

        if(name.length > 0){
            updateObj.name = name;
        }

        this.props.onNewData(updateObj);
            
    },
    render: function(){
        return(
            <form  onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Enter your name" />
                <br/>
                <input type="text" ref="msg" placeholder = "Enter your Message" />
                <br/>
                <button>Submit</button>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: "React",
            msg: "This is from a component"
        };
    },
    getInitialState: function(){
        return{
            name: this.props.name,
            msg: this.props.msg
        };
    },
    handleData: function(updateObj){
        this.setState(updateObj);
            },
    render: function(){
        var name = this.state.name;
        var msg = this.state.msg;
        return (
            <div>

            <GreeterMessage name={name} msg={msg}/>
            <GreeterForm onNewData = {this.handleData}/>

            </div>
        );
    }
});

var message = "Welcome to the site";

ReactDOM.render(
    <Greeter name = "Umer" msg= "Welcome"/>,
    document.getElementById("app")
);
