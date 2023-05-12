import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

const Album = ({album}) => {
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
                <Button>
                Button
                </Button>
                <video controls name="media" style={{padding: '10px', height: '10vh', width: '100%'}}><source src={album.preview} type="audio/mpeg"/></video>
            </CardBody>
        </Card>

        // <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //     <img className="w-full" src={album.album.cover} alt={album.title_short}/>
        //     <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">{album.title_short}</div>
        //         <p className="text-gray-700 text-base">{album.title}</p>
        //     </div>
        //     <video controls name="media" style={{padding: '10px', height: '10vh', width: '100%'}}><source src={album.preview} type="audio/mpeg"/></video>
        // </div>
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