import React from 'react';
import './Table.css';


class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <tbody>
                {this.props.Table.map((user) => (
                    <tr>
                        <td className="text-center">{user}</td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default Table;