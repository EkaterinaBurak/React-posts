import React from "react";
import {FbButton} from "./Button"

export class FbCard extends React.Component {
    render(){
        const {avatarUrl, userName, education, post, time} = this.props;
        return (
        <div className = "fbPost">
            <img className='fbImg' src={avatarUrl} alt="avatar"/>
            <div className="fbBody">
                <div className="fbHeader">
                    <p className="fbName">{userName}</p>
                    <div className="circle"></div>
                    <p className="fbEducation">{education}</p>
                </div>
                <p className="fbText">{post}</p>
                <div className="fbFooter">
                    <FbButton name='Like' />
                    <div className="circle"></div>
                    <FbButton name='Reply' />
                    <div className="circle"></div>
                    <p className="fbTime">{time}</p>
                </div>
         </div>
        </div>
        );
    }
}
