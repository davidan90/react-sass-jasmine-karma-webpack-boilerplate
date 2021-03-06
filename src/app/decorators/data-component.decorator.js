import { Component } from 'react';
import { string, object } from 'prop-types';

const [ GET, POST, PATCH, PUT, DELETE ] = [ 'GET', 'POST', 'PATCH', 'PUT', 'DELETE']; 

const defaultParams = {
    method: GET,
    body: new FormData().append('json', JSON.stringify({}))
};

const DataComponent = ({url, params = defaultParams}) => 
    (ComposeComponent) => 
        class extends Component {
            static state = {
                isLoading: false,
                data: undefined,
                error: null,
            }

            static propTypes = {
                url: string.isRequired,
                params: object
            }

            static defaultProps = {
                url,
                params
            }

            constructor(props) {
                super(props);
            }
            
            componentWillMount() {
                this.setState({ isLoading: true });
                this._getData(url, params)
                    .then(data => this.setState({data, isLoading: false,}))
                    .catch( error => this.setState({error, isLoading: false,}));
            }

            async _getData(url, params) {
                const data = await fetch(url, params);
                return data.json();
            }

            render() {
                return (
                    <ComposeComponent { ...this.props } { ...this.state }/>
                );
            }
        }