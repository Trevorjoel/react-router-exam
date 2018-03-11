import React from "react"
export default class Archives extends React.Component{
    render(){
        console.log(this.props.location.search);
const article = (this.props.match.params.article);
        return (
            <div>
                <h1>Archives</h1>< br /> <h4>{article}</h4>
            </div>
        );
    }
}