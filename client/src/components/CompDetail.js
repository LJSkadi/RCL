import React from 'react';
import api from '../api';
import EditBtn from './CompEditButtons';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardImg, CardHeader, CardBody, CardText, Button } from 'reactstrap';

class CompDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            owned: false,
            bookmarked: false,
            newSearch: false,
            toEdit: false,
            owner: "",
            id: "",
            name: "",
            githubRepo: "",
            npmLink: "",
            hashtags: [], //Array
            tutorial: [],   //Array
            description: [], //Array
            license: "",
            image: "",
        }
        
        this.handleBMClick = this.handleBMClick.bind(this)
        this.handleBMDelete = this.handleBMDelete.bind(this)
        this.handleDeleteClick=this.handleDeleteClick.bind(this)
        this.handleEditClick=this.handleEditClick(this)
        this.handleSubmitClick=this.handleSubmitClick.bind(this)
    }



    componentDidMount() {
        let compId = this.props.match.params.id;
        api.getComponent(compId)
            .then(res => {
                this.setState({
                    toEdit: false,
                    id: compId,
                    name: res.component.name,
                    owner: res.component._owner,
                    repo: res.component.repo,
                    npmLink: res.component.npmLink,
                    hashtags: res.component.hashtags, //Array
                    tutorial: res.component.tutorial,   //Array
                    description: res.component.description, //Array
                    license: res.component.license,
                    image: res.component._owner.pictureUrl,
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
                api.getUser()
                    .then(res => {
                        if (res.user._id == this.state.owner._id) {
                            this.setState({ 
                                owned: true 
                            })
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.componentDidMount()
        }
    }

    handleDeleteClick(event) {
        let compId = this.state.id;
        api.deleteComponent(compId)
            .then(res => {
                this.componentDidMount();
                this.props.history.push("/host") 
            })
            .catch(err => console.log(err))
      }

    handleEditClick(e){

        if(this.state.owned){
            this.setState({
                toEdit: true,
              })
        this.props.history.push(`/host/edit/${this.state.id}`)  // Redirect to the home page
        }
      }

    handleBMClick(event) {
        let compId = this.state.id;
        api.addBookmark(compId)
            .then(res => {
                this.setState({
                    bookmarked: !this.state.bookmarked
                })
                this.props.history.push("/bm")  // Redirect to the home page
            })
            .catch(err => console.log(err))
    }

    handleBMDelete(compId, event) {
        api.deleteBookmark(compId)
            .then(res => {
                this.setState({
                    bookmarked: !this.state.bookmarked
                })
                this.props.history.push("/bm")  // Redirect to the home page
            })
            .catch(err => console.log(err))
    }

    handleSubmitClick(e){
        this.setState({
          toEdit: false,
        })
      }

    render() {
        return (
            <div>
                <Col className="d-flex justify-content-center">
                    <Card className="Card" style={{ maxWidth: '40rem' }} >
                        <CardHeader className="CardHeader welcome" style={{ backgroundColor: '#3b3b3b', borderColor: '#808080' }}>{this.state.name}</CardHeader>
                        <CardBody className="text-center" color="secondary" style={{ backgroundColor: '#080808', borderColor: '#808080' }}>
                            <CardText style={{ padding: '10px 10px 10px 10px' }}>
                                <CardImg className="card-img-top" style={{ borderRadius: '10em', maxWidth: '20rem' }} src={this.state.image} alt="Card image cap" />
                                <div className="text-left" >
                                    <div>Repository: <a className="welcome" target="_blank" href={this.state.repo}>{this.state.repo}</a></div>
                                    {this.state.npmLink !== undefined && <div>npm-Link: <a className="welcome" target="_blank" href={this.state.npmLink}> {this.state.npmLink}</a></div>}
                                    {this.state.docLink !== undefined && <div>Documentary: <a className="welcome" target="_blank" href={this.state.docLink}>{this.state.docLink}</a></div>}
                                    {this.state.description !== [] && <div>Description: <p className="welcome">{this.state.description}</p></div>}
                                    {this.state.tutorial !== undefined && <div>Tutorial: <p className="welcome">{this.state.tutorial}</p></div>}
                                    {this.state.license !== undefined && <div>License: <p className="welcome">{this.state.license}</p></div>}
                                    <div>Hashtags: <p className="welcome"> {this.state.hashtags.map(tag => `${tag} `)}</p></div>
                                </div>
                                <div className="text-center" >
                                    <Col >
                                        <Row className="d-flex justify-content-center">
                                            {!this.state.bookmarked && <Button style={{ margin: '10px 10px 10px 10px' }} outline color="primary" onClick={this.handleBMClick}>Bookmark</Button>}
                                            {this.state.bookmarked && <Button style={{ margin: '10px 10px 10px 10px' }} outline color="primary" onClick={(e) => this.handleBMDelete(this.state.id, e)}>Delete Bookmark</Button>}
                                        </Row>
                                        <Row className="d-flex justify-content-center">
                                        {this.state.owned && !this.state.toEdit && <EditBtn className="d-flex justify-content-center" id={this.state.id} handleEClick={this.handleEditClick} handleDClick={this.handleDeleteClick}/>}
         
                                        </Row>

                                    </Col>
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




// if(this.props.location.pathname.includes("host")){
//     this.setState({
//         owned: true,
//     })
// }
