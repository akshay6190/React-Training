const headerstyle = {
    color:red,
    Textdecoration
}

console.log("Hello");
const component = React.createElement("h1",null,"Hi There")
//const link = React.createElement("a",{{href:"/"} , style={color:red}},"Hello World")

const link=React.createElement("a",{
    href:"https://reactjs.org",
    style:{
        color:"orangered",
        textDecoration:"none"
    }

},"React Official WebSite");

const div1 = document.getElementById("placeholder");
ReactDOM.render(link,div1)
