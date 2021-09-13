import React from "react";

export class OnlinerCard extends React.Component {
    render(){
        const {chapter, title, comments} = this.props;
        return (
            <div className="onlinerCard">
            <div className="onlinerHeader">
                <p className="onlinerChapter">{chapter}</p>
                <p className="onlinerComments">{comments}</p>
            </div>
            <p className="onlinerTitle">{title}</p>
        </div>
        );
    }
}
