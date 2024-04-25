import Profile from './Profile';
import Navbar from './Navbar';

export default function GeneralTemplate(props){
    return(
        <section>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col s10 m4 l4'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 l8'>
                        {props.data}
                    </div>
                </div>
            </div>
        </section>
    )
    
}