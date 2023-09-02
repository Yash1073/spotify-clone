export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "/";

const clientId = "cff76213089a4e228206c8bf120d67cb";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        // #accesstoken=mysupersecretkey&name=yash
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        // console.log(initial);
        return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;