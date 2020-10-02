import React from 'react';
import TrackVisibility from "../../utils/TrackVisibility";

interface Image {
    link: string,
    src: string,
    name: string,
    style: {display: string },
}

interface Props {
    images: Image[],
    header: string,
    descr: string,
    flipped: boolean
}

interface State {
    runAnimation: boolean
}

class Language extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            runAnimation: false
        }
    }

    render() {
        let link = (link: string) => {
            if (link.trim().length > 0)
                window.open(link)
        };
        let image = (
            <div className='logos'>
                {this.props.images.map((img, i) => <img key={img.name + i} src={img.src} alt={img.name}
                                                        style={{animation: (this.state.runAnimation) ? `1s ${i * .25 + (.25)}s ${!(this.props.flipped) 
                                                                        ? 'slideInRight' : 'slideInLeft'} forwards`
                                                                    : '',
                                                        ...img.style}}
                                                        onClick={() => link(img.link)}/>)}
            </div>);
        let body = (this.props.flipped) ? (<>
            {image}
            <div style={{animation: (this.state.runAnimation) ? `2s ${(this.props.flipped) ? 'slideInRight' : 'slideInLeft'} forwards` : ''}}>
                <h2>{this.props.header}</h2>
                <p>{this.props.descr}</p>
            </div>
        </>) : (<>
            <div style={{animation: (this.state.runAnimation) ? `2s ${(this.props.flipped) ? 'slideInRight' : 'slideInLeft'} forwards` : ''}}>
                <h2>{this.props.header}</h2>
                <p>{this.props.descr}</p>
            </div>
            {image}
        </>);
        return (
            <TrackVisibility onVisible={() => this.setState({runAnimation: true})}>
                <div className="App-body">
                    {body}
                </div>
            </TrackVisibility>
        );
    }
}

export default Language;
