import {React, Component} from 'react';


export default class Skills extends Component{
    render(){
        return(
            <div>
                <div className='container' id='skills'>
                    <div className='card-content'>
                        <h6><strong>Professional Skills</strong></h6>
                    </div>
                    <div className='row mt-top'>
                        <div className='col s12'>
                            <h6><em>Front-End Developer Skills</em></h6>
                        </div>
                        <div className='col s4'>
                            <p>HTML</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'89%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>CSS</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'85%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>JavaScript</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'80%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>React</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'90%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>Vue</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'80%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>Node.js</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'75%'}}></div>
                            </div>
                        </div>
                        <div className='col s12'>
                            <h6><em>Back-End Developer Skills</em></h6>
                        </div>
                        <div className='col s4'>
                            <p>Python</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'95%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>Java</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'85%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>C</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'90%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>MySQL</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'65%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>PHP</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'80%'}}></div>
                            </div>
                        </div>
                        <div className='col s4'>
                            <p>C#</p>
                            <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'70%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}