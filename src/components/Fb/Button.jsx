import React from "react";
export class FbButton extends React.Component {
    render(){
        const{name}=this.props
        return (
            <a className='fbBtn'>{name}</a>
        );
    };
};