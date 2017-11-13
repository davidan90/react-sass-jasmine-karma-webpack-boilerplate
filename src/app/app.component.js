import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// Constants
import { CONTAINERS } from './constants/containers';

// Components
import { NavbarComponent, SectionComponent, FooterComponent } from './components';

// Services
import { AppActions } from './services/redux/actions';

// Styles css and scss
import './main.scss';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    resizeAction: (width) => dispatch(AppActions.setDevice(width)),
});

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class App extends Component {
    
    componentDidMount() {
        const {resizeAction} = this.props;
        window.addEventListener('resize', resizeAction.bind(window.innerWidth));
    }

    render() {
        return (
            <div id="my-app">
                <Router>
                    <div className="container">
                        <NavbarComponent links={CONTAINERS} />
                        <SectionComponent sections={CONTAINERS} />
                        <FooterComponent />
                    </div>
                </Router>
            </div>
        );
    }
}