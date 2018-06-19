
const rp = require('request-promise');

exports.adsDataExample = (req, res) => {
    let uri = `https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?
    lat=33.433638&
    lng=-112.008113&
    fDstL=0&
    fDstU=100`

    rp.get({
        uri: uri,
        json: true
    }).then((response) => {
        //Attach Response data to the Configuration Object
        var data = response;
        res.setHeader('Content-Type', 'application/json');
        //console.log(JSON.stringify(data, null, 3));
        res.status(200).send(JSON.stringify(data, null, 3));
    })
}
