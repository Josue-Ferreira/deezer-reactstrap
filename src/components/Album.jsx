import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

const Album = ({album, playList, setPlayList}) => { 
    return (
        <Card
            style={{
                width: '18rem'
            }}
            >
            <img
                alt={album.title_short}
                src={album.album.cover}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {album.title_short}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    {album.title}
                </CardSubtitle>
                <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
                <Button onClick={() => setPlayList([...playList, album])}>
                    Add to Playlist
                </Button>
                    <audio controls name="media" style={{padding: '10px', height: '10vh', width: '100%'}}>
                        <source src={album.preview} type="audio/mpeg"/>
                    </audio>
            </CardBody>
        </Card>
    );
};

Album.propTypes = {
    album: PropTypes.shape({
        title_short: PropTypes.string.isRequired,
        title_short: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
    }).isRequired
};

export default Album;