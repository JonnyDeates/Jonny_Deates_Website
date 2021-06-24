import React from 'react';
import TrackVisibility from "../../../Components/utils/TrackVisibility";

interface Props {
    image: string,
    link: string,
    name: string,
    descr: string,
    flipped: boolean
}

interface State {
    runAnimation: boolean
}

class Card extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            runAnimation: false
        }
    }

    render() {
        let link = this.props.link !== '' ? () => (window.open(this.props.link)) : () => {
        };
        let caption = (this.props.link.length === 0) ? (<p>{this.props.name}</p>) : <></>;
        let image = (
            <div className='logos'>
                <img src={this.props.image} alt={this.props.name}
                     style={{animation: (this.state.runAnimation) ? `1s ${!(this.props.flipped) ? 'slideInRight' : 'slideInLeft'} forwards` : ''}}
                     onClick={link}/>
                {caption}
            </div>);
        let body = (this.props.flipped) ? (<>
            {image}
            <div className='card-descr' style={{animation: (this.state.runAnimation) ? `2s ${(this.props.flipped) ? 'slideInRight' : 'slideInLeft'} forwards` : ''}}>
                <p>{this.props.descr}</p>
            </div>
        </>) : (<>
            <div className='card-descr' style={{animation: (this.state.runAnimation) ? `2s ${(this.props.flipped) ? 'slideInRight' : 'slideInLeft'} forwards` : ''}}>
                <p>{this.props.descr}</p>
            </div>
            {image}
        </>);
        return (
            <TrackVisibility onVisible={() => this.setState({runAnimation: true})}>
                <div className="card">
                    {body}
                </div>
            </TrackVisibility>
        );
    }
}

export default Card;
