import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { Col, Card, CardHeader, CardBody, CardText, ListGroup, ListGroupItem, InputGroupAddon, Button } from 'reactstrap';

class CompDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookmarked: false,
            id: "",
            name: "",
            githubRepo: "",
            npmLink: "",
            hashtags: [], //Array
            tutorial: [],   //Array
            description: [], //Array
            license: ""
        }
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleBMClick = this.handleBMClick.bind(this)
    }



    componentDidMount() {
        console.log("Comp did mount", this.props.match.params.id)
        let compId = this.props.match.params.id;
        api.getComponent(compId)
            .then(res => {
                console.log(res)
                this.setState({
                    id: compId,
                    name: res.component.name,
                    repo: res.component.repo,
                    npmLink: res.component.npmLink,
                    hashtags: res.component.hashtags, //Array
                    tutorial: res.component.tutorial,   //Array
                    description: res.component.description, //Array
                    license: res.component.license
                })
                api.getBookmarkList()
                    .then(res => {
                        let isBookmarked = res["_components"].filter(component => component._id === compId)
                        if (isBookmarked.length !== 0) {
                            this.setState({ bookmarked: true })
                        } else {
                            this.setState({ bookmarked: false })
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }

    handleDeleteClick(event) {
        let compId = this.state.id;
        api.deleteComponent(compId)
            .then(res => {
                console.log(res)
                this.props.history.push("/host")  // Redirect to the home page
            })
            .catch(err => console.log(err))
    }

    handleBMClick(event) {
        let compId = this.state.id;
        api.addBookmark(compId)
            .then(res => {
                this.setState({
                    bookmarked: !this.state.bookmarked
                })
                console.log(res)
                this.props.history.push("/bm")  // Redirect to the home page
            })
            .catch(err => console.log(err))
    }

    handleBMDelete(compId, event) {
        console.log("I'm in handleBMDelete", compId)
        api.deleteBookmark(compId)
            .then(res => {
                console.log("BM is deleted")
                this.setState({
                    bookmarked: !this.state.bookmarked
                })
                this.props.history.push("/bm")  // Redirect to the home page
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log("This is props in CompDetail", this.state.id)
        let prevHost = this.props.prevHost;
        return (
            <div>
                <Col className="d-flex justify-content-center">
                    <Card className="Card" style={{ width: '20rem' }} >
                        <CardHeader className="CardHeader welcome" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.state.name}</CardHeader>
                        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                            <CardText style={{ padding: '10px 10px 10px 10px' }}>
                                <div className="text-left" >
                                <div>Repository: <a className="welcome" target="_blank" href={this.state.repo}>{this.state.repo}</a></div>
                                    {this.state.npmLink!==undefined && <div>npm-Link: <a className="welcome" target="_blank" href={this.state.npmLink}> {this.state.npmLink}</a></div>}
                                    {this.state.docLink!==undefined && <div>Documentary: <a className="welcome" target="_blank" href={this.state.docLink}>{this.state.docLink}</a></div>}
                                    {this.state.description!==[] && <div>Description: <p className="welcome">{this.state.description}</p></div>}
                                    {this.state.tutorial!==undefined && <div>Tutorial: <p className="welcome">{this.state.tutorial}</p></div>}
                                    {this.state.license!==undefined && <div>License: <p className="welcome">{this.state.license}</p></div>}
                                    <div>Hashtags: <p className="welcome"> {this.state.hashtags.map(tag => `${tag} `)}</p></div>
                                </div>
                                <div className="text-center" >
                                    {prevHost && <Button outline color="primary"><Link to={`/comp/edit/${this.props.match.params.id}`}>Edit</Link></Button>}
                                    {prevHost && <Button outline color="danger" onClick={this.handleDeleteClick}>Delete</Button>}
                                    {!prevHost && !this.state.bookmarked && <Button outline color="primary" onClick={this.handleBMClick}>Bookmark</Button>}
                                    {!prevHost && this.state.bookmarked && <Button outline color="primary" onClick={(e) => this.handleBMDelete(this.state.id, e)}>Delete Bookmark</Button>}
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
}
}

export default CompDetail;
