import React from 'react';
import './Users.css';
import { Jumbotron, Button, InputGroup, FormControl, Table } from 'react-bootstrap';
import Line from './Line';


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            users: [
                { "name": "greg", "count": 0 },
                { "name": "yoann", "count": 0 },
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        let usr = this.state.users;
        usr.push({ "name": this.state.value, "count": 0 });
        this.setState({ users: usr });
        event.preventDefault();
    }

    render() {

        let table = (
            <tbody>
                {this.state.users.map((user) => (
                    <Line name={user.name} count={user.count} />
                ))}
            </tbody>
        );

        return (
            <div>
                <Jumbotron>
                    <h1 className="text-center">Utilisateurs</h1>
                    <InputGroup className="mb-3">
                        <FormControl aria-describedby="basic-addon1" value={this.state.value} onChange={this.handleChange} />
                        <InputGroup.Prepend>
                            <Button variant="outline-secondary" onClick={this.handleSubmit}>Ajouter</Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <Table striped bordered hover>
                        {table}
                    </Table>
                </Jumbotron>
                <Jumbotron>
                    <h2>Précédents gagnants</h2>
                    <Table striped bordered hover>
                        <tr>
                            <td className="text-center">competiteur</td>
                            <td className="text-center">XXX</td>
                            <td className="text-center">XX/XX/XXXX</td>
                        </tr>
                    </Table>
                </Jumbotron>
            </div>
        );
    }
}

export default Users;