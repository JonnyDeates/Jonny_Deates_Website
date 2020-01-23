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
        let caption = (this.props.link.length ===  0) ?(<h1>{this.props.name}</h1>) : <></>;
        let image = (
            <div className='logos'>
                {caption}
            </div>);
        let body = (this.props.flipped) ? (<>
            {image}
            <div className='card-descr'>
                <h1>{this.props.descr}</h1>
            </div>
        </>) : (<>
            <div className='card-descr'>
                <h1>{this.props.descr}</h1>
            </div>
            {image}
        </>);
        return (
            <div className="card">
                {body}
            </div>
        );
    }
}

export default Card;
