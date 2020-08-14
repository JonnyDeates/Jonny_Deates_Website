import React from 'react';
import './Introduction.css';


interface Props {
    introduction: string;
}

class Introduction extends React.Component<Props, {}> {
    descr: string = `I'm a full-stack developer based in Denver, Colorado. I am owner, designer, and sole contributor \n` +
    `to The Koi Foundation LLC. I have a strong passion for programming and love seeing my projects come into fruition.`;

    render() {
        return (
            <div>
                <h2>{this.props.introduction}</h2>
                <p>{this.descr}</p>
            </div>
        );
    }
}

export default Introduction;
