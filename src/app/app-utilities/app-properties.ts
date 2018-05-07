let hostName = window.location.hostname;
let protocol = window.location.protocol;
const port = 3000;

if (hostName === 'localhost') {
    hostName = 'localhost';
    protocol = 'http:';
}

export const RestEndPoint: string = protocol + '//' + hostName + ':' + port;
// export const RestEndPointApis: string = RestEndPoint + '/';

