var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: "React",
            msg: "This is from a component"
        };
    },
    getInitialState: function(){
        return{
            name: this.props.name
        };
    },
    onButtonClick: function(e){
        e.preventDefault();

        var name = this.refs.name.value;
        this.refs.name.value = "";
        if(typeof name === "string" && name.length > 0){
        this.setState({
            name: name
        });
        }

            },
    render: function(){
        return (
            <div>
            <h1>Hello {this.state.name}!</h1>
            <p>{this.props.msg}</p>

            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name" />
                <button>Set Name</button>
            </form>
            </div>
        );
    }
});

var message = "Welcome";

ReactDOM.render(
    <Greeter name = "Umer" msg={message}/>,
    document.getElementById("app")
);
