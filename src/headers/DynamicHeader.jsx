import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import './DynamicHeader.scss';
import avatar from './kamilek.jpg';

class DynamicHeader extends Component {
    state = {
        nameDivStyle: {
            transform: 'scale(2.5) translateY(40px) translateX(200px)'
        },
        nameStyle: {
            color: 'black'
        }
    }

    scroll$;

    componentDidMount() {
        this.scroll$ = fromEvent(window, 'scroll')
            .pipe(
                map(x => window.scrollY),
                filter(x => x <= 500),
                map(x => x > 200 ? 200 : x)
            )
            .subscribe(x => {
                this.setState({
                    ...this.state,
                    nameDivStyle: {
                        transform: `scale(${2.5 - (x * 0.0075)}) translateY(${40 - (x * 0.2)}px) translateX(${200 - x}px)`
                    },
                    nameStyle: {
                        color: x < 200 ? 'black' : 'white'
                    }
                })
            });
    }

    componentWillUnmount() {
        this.scroll$.unsubscribe();
    }

    render() {
        const { nameDivStyle, nameStyle } = this.state;
        return (
            <header className='dynamic-header'>
                <div className='cv-header' >
                    <aside>
                        <div style={nameDivStyle}>
                            <Image src={avatar} circular ></Image>
                            <h1 style={nameStyle}>Kamil Szymański</h1>
                        </div>
                    </aside>
                </div>
            </header>
        );
    }
}

export default DynamicHeader;