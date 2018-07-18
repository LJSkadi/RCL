import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, InputGroupAddon, Button } from 'reactstrap';

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
            license:""
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
                <ListGroup>
                    <h2>{this.props.name}</h2>
                    <InputGroupAddon addonType="prepend">Repository: <ListGroupItem tag="a" target="_blank" href={this.state.repo}>{this.state.repo}</ListGroupItem></InputGroupAddon>
                    {(this.state.npmLink !== "") && <InputGroupAddon addonType="prepend">npm-Link: <ListGroupItem tag="a" target="_blank" href={this.state.npmLink}>{this.state.npmLink}</ListGroupItem></InputGroupAddon>}
                    {(this.state.docLink !== "") && <InputGroupAddon addonType="prepend">Documentary: <ListGroupItem tag="a" target="_blank" href={this.state.docLink}>{this.state.docLink}</ListGroupItem></InputGroupAddon>}
                    {(this.state.description !== []) && <InputGroupAddon addonType="prepend">Description: <ListGroupItem>{this.state.description}</ListGroupItem></InputGroupAddon>}
                    {(this.state.tutorial !== "") && <InputGroupAddon addonType="prepend">Tutorial: <ListGroupItem>{this.state.tutorial}</ListGroupItem></InputGroupAddon>}
                    {(this.state.license !== "") && <InputGroupAddon addonType="prepend">License: <ListGroupItem>{this.state.license}</ListGroupItem></InputGroupAddon>}
                    <InputGroupAddon addonType="prepend">Hashtags: <ListGroupItem> {this.state.hashtags.map(tag => `${tag} `)}</ListGroupItem></InputGroupAddon>
                </ListGroup>
                <div>
                    {prevHost && <Button outline color="primary"><Link to={`/comp/edit/${this.props.match.params.id}`}>Edit</Link></Button>}
                    {prevHost && <Button outline color="danger" onClick={this.handleDeleteClick}>Delete</Button>}
                    {!prevHost && !this.state.bookmarked && <Button outline color="primary" onClick={this.handleBMClick}>Bookmark</Button>}
                    {!prevHost && this.state.bookmarked && <Button outline color="primary" onClick={(e) => this.handleBMDelete(this.state.id, e)}>Delete Bookmark</Button>}
                </div>
            </div>
        );
    }
}

export default CompDetail;
