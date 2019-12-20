import React from 'react';
interface Image {
    link: string, src: string, name: string
}
interface Props {
    images: Image[],
    header: string,
    descr: string,
    flipped: boolean
}

class Language extends React.Component<Props, {}> {

    render() {
        let link = (link: string)=> {
            if(link.trim().length > 0)
                window.open(link)
        };
        let image = (
            <div className='logos'>
                {this.props.images.map((img, i) => <img key={img.name+i} src={img.src} alt={img.name} onClick={()=> link(img.link)}/>)}
            </div>);
        let body = (this.props.flipped) ? (<>
            {image}
            <div>
                <h2>{this.props.header}</h2>
                <p>{this.props.descr}</p>
            </div>
        </>) : (<>
            <div>
                <h2>{this.props.header}</h2>
                <p>{this.props.descr}</p>
            </div>
            {image}
        </>);
        return (
            <div className="App-body">
                {body}
            </div>
        );
    }
}

export default Language;
