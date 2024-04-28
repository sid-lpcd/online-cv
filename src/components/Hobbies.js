import Slider from '../components/Slider';
import CapeTown from '../images/CapeTown.png'
import VolleyUni from '../images/VolleyballUni.jpg'
import VolleyPark from '../images/VolleyballSocial.jpg'
import SoloTravelling from '../images/SoloTravelling.jpg'
import GroupTravelling from '../images/GroupTravelling.jpg'

export default function Hobbies(){
    const slideData = [
        {
          index: 0,
          headline: 'Volunteering Chilcare in Cape Town, South Africa',
          src: CapeTown
        },
        {
          index: 1,
          headline: 'Volleyball Mixed Team at UCL',
          src: VolleyUni
        },
        {
          index: 2,
          headline: 'Volleyball Social Events and Organizer Member at Hyde Park',
          src: VolleyPark
        },
        {
          index: 3,
          headline: 'Solo Travelling in Marrakesh, Morocco',
          src: SoloTravelling
        },
        {
            index: 4,
            headline: 'Travelling with close friends in Vienna, Austria',
            src: GroupTravelling
        }
      ]
      
    return(
        <div>
            <div className='card' id='hobbies'>
                <div className='card-content'>
                    <div className='row'>
                        <h6><strong>Hobbies</strong></h6>
                        <p className='grey-text'>Outside of my professional life, I'm a passionate and driven individual with a zest for life and a love for adventure. I thrive in active and social environments, always up for a game of volleyball or exploring the great outdoors. Volunteering is close to my heart, having spent time in South Africa with childcare, supporting food banks in Portugal, and teaching science back home.</p>
                    </div>
                    <div className='row'>
                        <h6>Snapshots</h6>
                        <Slider heading="Hobbies" slides={slideData}/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}