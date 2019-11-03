import React from 'react';
interface Props {
    image: string,
    link: string,
    name: string,
    descr: string,
    flipped: boolean
}

class Card extends React.Component<Props, {}> {

    render() {
        let link = this.props.link !== '' ? () => (window.open(this.props.link)) : ()=> {};
        let caption = (this.props.link.length ===  0) ?(<p>{this.props.name}</p>) : <></>;
        let image = (
            <div className='logos'>
                <img src={this.props.image} alt={this.props.name} onClick={link} width='100px' height='100px'/>
                {caption}
            </div>);
        let body = (this.props.flipped) ? (<>
            {image}
            <div>
                <p>{this.props.descr}</p>
            </div>
        </>) : (<>
            <div>
                <p>{this.props.descr}</p>
            </div>
            {image}
        </>);
        return (
            <div className="App-contact">
                {body}
            </div>
        );
    }
}

export default Card;
