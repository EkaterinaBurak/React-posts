import React from "react";

export class JobCard extends React.Component {
    render(){
        const {job, company, city, jobDescription, companyDescription, date} = this.props;
        return (
            <div className="jobCard">
                   <p className="jobTitle">{job}</p>
                <p className="company">{company}</p>
                <p className="city">{city}</p>
                <p className="jobDescription">{jobDescription}</p>
                <p className="companyDescription">{companyDescription}</p>
                <div className="footer">
                    <button className="jobBtn">Откликнуться</button>
                    <p className="jobDate">{date}</p>
                </div>   
            
        </div>
        );
    }
}