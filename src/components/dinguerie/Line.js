import React from 'react';
import { Button } from 'react-bootstrap';


class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
        this.clickCount = this.clickCount.bind(this);
    }

    clickCount (event) {
        this.setState({ count: this.state.count + 1})
    }

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">{this.state.count}</td>
                <td className="text-center">
                    <Button variant="danger" onClick={ this.clickCount }>Vote</Button>
                </td>
            </tr>
        );
    }
}

export default Line;