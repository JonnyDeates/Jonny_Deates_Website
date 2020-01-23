import React from 'react';
import './Project.css';
interface Props {
    image: string,
    link: string,
    githubLink: string,
    title: string,
    subTitle: string,
    descr: string,
    color: string
}

class Project extends React.Component<Props, {}> {
    render() {
        return (
            <div className="project" style={{backgroundColor: this.props.color}}>
                <div>
                <img src={this.props.image} alt={this.props.title}/>
                <div className='project-content'>
                    <h2>{this.props.title}</h2>
                    <h4>{this.props.subTitle}</h4>
                    <p>{this.props.descr}</p>
                </div>

                </div>
            </div>
        );
    }
}

export default Project;
