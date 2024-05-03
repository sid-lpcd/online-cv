import {React, Component} from 'react';


export default class Experience extends Component{
    render(){
        return(
            <div>
                <div className='card' id='experience'>
                    <div className='card-content'>
                        <h6><strong>Experience</strong></h6>
                        <div className='row'>
                            <div className='col s12 m3 l3 xl3'>
                                <p className='teal year_exp white-text' style={{'padding': '0 5%'}}>
                                    September <strong>2022</strong> - <br></br>March <strong>2023</strong>
                                </p>
                            </div>
                            <blocknote className='no-pad col s12 m9 l9 xl9'>
                                <div className='row'>
                                    <h6 className='no-pad mt-bottom col s12 m9 l9 xl9'>
                                        <strong>Vice-President of Engineering</strong>
                                    </h6>
                                    <h6 className='no-pad mt-bottom col s12 m3 l3 xl3'>
                                        <strong>Metalchemy</strong>
                                    </h6>
                                </div>
                                <h6 className='no-pad mt-bottom'>
                                    <em style={{textDecorationLine: 'underline'}}>Key Achievements</em>
                                </h6>
                                <ul>
                                    <li>
                                        <strong>Brand Expansion:</strong> Established a new sub-brand Alchemy Natural, covering branding, marketing, product lines, and sales strategies.
                                        <br></br><strong>Diversified revenue streams; Market expansion.</strong>
                                    </li>
                                    <li>
                                        <strong>Revenue Growth:</strong> Conducted comprehensive market research and gap analyses to identify growth opportunities and devised client acquisition and conversion strategies.
                                        <br></br><strong>Amplified B2C revenue to £5k/month sales. Acquired 10 high-value B2B clients.</strong>
                                    </li>
                                    <li>
                                        <strong>Innovative Solutions:</strong> Oversaw the grant-awarded project lifecycle from ideation to implementation, ensuring adherence to project milestones and deliverables.
                                        <br></br><strong>Secured £350k grant funding.</strong>
                                    </li>
                                </ul>
                            </blocknote>
                        </div>
                        <div className='row'>
                            <div className='col s12 m3 l3 xl3'>
                                <p className='teal year_exp white-text' style={{'padding': '0 5%'}}>
                                    September <strong>2021</strong> - <br></br>September <strong>2022</strong>
                                </p>
                            </div>
                            <blocknote className='no-pad col s12 m9 l9 xl9'>
                                <div className='row'>
                                    <h6 className='no-pad mt-bottom col s12 m9 l9 xl9'>
                                        <strong>Engineering (Associate)</strong>
                                    </h6>
                                    <h6 className='no-pad mt-bottom col s12 m3 l3 xl3'>
                                        <strong>Metalchemy</strong>
                                    </h6>
                                </div>
                                <h6 className='no-pad mt-bottom'>
                                    <em style={{textDecorationLine: 'underline'}}>Key Achievements</em>
                                </h6>
                                <ul>
                                    <li>
                                        <strong>Technology Efficiency:</strong> Developed and implemented scientifically driven approaches to streamline processes, leveraging engineering principles and industry research to maximise output and minimise resource utilisation.
                                        <br></br><strong>x20 more efficient; Time and cost savings.</strong>
                                    </li>
                                    <li>
                                        <strong>Margin Optimisation:</strong> Led initiatives in production forecasting, supply chain management, and logistics optimisation.
                                        <br></br><strong>Cost reduction; Increased gross profit from 2% to 45%.</strong>
                                    </li>
                                </ul>
                            </blocknote>
                        </div>
                        <div className='row'>
                            <div className='col s12 m3 l3 xl3'>
                                <p className='teal year_exp white-text' style={{'padding': '0 5%'}}>
                                    November <strong>2020</strong> - <br></br>December <strong>2020</strong>
                                </p>
                            </div>
                            <blocknote className='no-pad col s12 m9 l9 xl9'>
                                <div className='row'>
                                    <h6 className='no-pad mt-bottom col s12 m9 l9 xl9'>
                                        <strong>Engineering (Internship)</strong>
                                    </h6>
                                    <h6 className='no-pad mt-bottom col s12 m3 l3 xl3'>
                                        <strong>Metalchemy</strong>
                                    </h6>
                                </div>                                
                                <h6 className='no-pad mt-bottom'>
                                    <em style={{textDecorationLine: 'underline'}}>Key Achievements</em>
                                </h6>
                                <ul>
                                    <li>
                                        <strong>Product Innovation:</strong> Adapted nanotechnology principles to medical bionanocomposite applications, culminating in a peer-reviewed paper publication.
                                        <br></br><strong>Scientific Publication.</strong>
                                    </li>
                                </ul>
                            </blocknote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}