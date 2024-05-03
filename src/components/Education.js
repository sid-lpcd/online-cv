import {React, Component} from 'react';


export default class Education extends Component{
    render(){
        return(
            <div>
                <div className='card' id='education'>
                    <div className='card-content'>
                        <h6><strong>Education</strong></h6>
                        <table className='stripod'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Key Studies</th>
                                    <th>Grade</th>
                                    <th>Date(s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Front-End Development - Meta</td>
                                    <td>Advanced React, Advanced HTML and CSS, Version Control</td>
                                    <td>100%</td>
                                    <td>01/2024 - 05/2024</td>
                                </tr>
                                <tr>
                                    <td>MEng Electrical & Electronic Engineering - UCL</td>
                                    <td>Network and Services Design, Advanced Digital Design, Mathematical Modelling and Analysis</td>
                                    <td>1st Degree</td>
                                    <td>09/2018 - 06/2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}