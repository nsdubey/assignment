import React from "react";
import { Row, Col, Card } from 'antd';
import styled from 'styled-components';

const ItuneList = styled.main`
    width: 75%;
    margin: auto;
`;

const ITunesList = props => {
    return (
        <>
            <Col span={24}>
                <h2>ITunes List</h2>
            </Col>
            <Col span={24}>
                <ItuneList>
                    {props.searched ?
                        props.itunes && props.itunes.length > 0 ? props.itunes.map((item, index) => (
                            <Card title={item.artistName} key={index} style={{ marginBottom: 15 }}>
                                <p>collectionArtistName : {item.collectionArtistName}</p>
                                <p>country: {item.country}</p>
                                <p>releaseDate: {item.releaseDate}</p>
                            </Card>
                        )) : "" :
                        "Search I Tunes from search bar"}

                </ItuneList>
            </Col>
        </>
    );
}

export default ITunesList;