import React, { Component } from "react";
import { Row, Col, Input } from 'antd';
import { fetchItunesRequest } from "../reducers/itunes/itunesReducer";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ITunesList from "../components/ITunesList";
const { Search } = Input;

class ITunes extends Component {
    state = {
        loading: false,
        fetched : false,
        error: null,
        searched: false
    }

    searchItunes = value => {
        this.props.fetchItunes({ searchValue: value })
        this.setState({ loading: true, searched : true })
        this.props.fetchItunes({
            searchValue: value, callback: err => {
                if (err) console.log("error ocuured")
                else {
                    this.setState({ loading: false })
                }
                this.setState({fetched : true})
            }
        });

    }
    render() {
        return (
            <>
                <Row>
                    <Col span={24}>
                        <h1>Search ITunes</h1>
                        <Col span={24}>
                            <Search
                                placeholder="input search text"
                                onSearch={value => this.searchItunes(value)}
                                style={{ width: 200 }}
                            />
                        </Col>
                    </Col>
                </Row>
                <hr />
                <Row>
                    {this.state.loading ? <div style={{textAlign : "center"}}>Loading........</div> : null}
                    <ITunesList itunes={this.props.itunes} searched={this.state.searched}/>
                </Row>
            </>
        )
    }
}

export default connect(
    state => ({
        itunes: state.itunes.iTunes
    }),
    {
        fetchItunes: fetchItunesRequest
    }
)(withRouter(ITunes));
